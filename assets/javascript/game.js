//ensures code does not run until the page full loads
$(document).ready(function() {
  // $("*").hide();
  // ============================================================================
  // Global Variables
  // ============================================================================

  // ----------------------------------------------------------------------------
  // Character stats and attributes are stored in objects.
  // ----------------------------------------------------------------------------
  var char1 = {
    name: "Lone Star",
    nickname: "Lone",
    health: 120,
    baseAttack: 8,
    attackPW: 8,
    counterPW: 8,
    cardImg: "./assets/images/Space Balls/LoneStarl.jpg",
    backgroundIMG: "url('./assets/images/Space Balls/thumb-1920-635770.jpg')",
    thememusic: "assets/audio/space-balls-theme.mp3",
    sound: "/assets/audio/Lightsaber.ogg",
    title: "Space Balls RPG!",
    playAvail: true
  };

  var char2 = {
    name: "Barf",
    nickname: "Barf",
    health: 100,
    baseAttack: 5,
    attackPW: 5,
    counterPW: 5,
    cardImg: "./assets/images/Space Balls/Barf.jpg",
    playAvail: true
  };

  var char3 = {
    name: "The Guy",
    nickname: "Guy",
    health: 150,
    baseAttack: 20,
    attackPW: 20,
    counterPW: 20,
    cardImg: "./assets/images/Space Balls/Russ.jpg",
    playAvail: true
  };

  var char4 = {
    name: "DarK Helmet",
    nickname: "Dark",
    health: 180,
    baseAttack: 25,
    attackPW: 25,
    counterPW: 25,
    cardImg: "./assets/images/Space Balls/Dark.jpeg",
    playAvail: true
  };
  //array created to store character objects
  var playersArray = [char1, char2, char3, char4];
  const staticArray = [char1, char2, char3, char4];
  //arrays for characters selected
  var firstPlayer = [];
  var secondPlayer = [];
  //conditions for players selected
  var player1Confirmed = false;
  var player2Confirmed = false;

  // var soundArray = ["./assets/audio/Lightsaber.ogg"];
  var thememusic = new Audio(playersArray[0].thememusic);
  thememusic.loop = true;
  var wilhem = new Audio(playersArray[0].sound);
  // ===========================================================================
  // // ========================================================================
  // // =====================================================================
  // // ==================================================================
  //
  // ==================================================================
  // =====================================================================
  // ========================================================================
  // ===========================================================================
  function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element);
    node.classList.add("animated", animationName);

    function handleAnimationEnd() {
      node.classList.remove("animated", animationName);
      node.removeEventListener("animationend", handleAnimationEnd);

      if (typeof callback === "function") callback();
    }

    node.addEventListener("animationend", handleAnimationEnd);
  }

  // =============================================================================
  // console reporting function
  // =============================================================================
  function report(section) {
    var divider = "------------------------------------";
    console.log(" ");
    console.log(divider);
    console.log("running ", section);
    console.log(divider);
  }

  // ===========================================================================
  // display functions
  // ===========================================================================
  //updates display
  function updateDisplay(target, selection) {
    report("updating display");
    $(target)
      .children()
      .remove();
    console.log("this is the target div ", target);
    console.log("this is the array received ", selection);

    for (var i = 0; i < selection.length; i++) {
      $(target).append("<div/>");
      $(target + " div:last-child").addClass(
        "card animated fadeIn text-center yourChar"
      );
      $(target + " div:last-child").attr("id", selection[i].nickname);
      $(target + " div:last-child").append("<p>" + selection[i].name + "</p>");
      $(target + " div:last-child").append("<img/>");
      $(target + " img:last-child").attr("class", "rounded img-responsive");
      $(target + " img:last-child").attr("src", selection[i].cardImg);
      $(target + " img:last-child").attr("width", "130");
      $(target + " div:last-child").append(
        "<p>" + selection[i].health + "</p>"
      );
      $(target + " div:last-child").append();
    }
  }

  //sets the board of playersArray
  function resetGame(resetTarget) {
    //resets player picks

    report("resetting game");
    player1Confirmed = false;
    player2Confirmed = false;
    $(resetTarget)
      .children()
      .remove();
    $("body").css("background-image", staticArray[0].backgroundIMG);
    $("#title").text(staticArray[0].title);
    thememusic.play();
    for (var i = 0; i < playersArray.length; i++) {
      //resets playersArray to original stats.
      playersArray[i] = staticArray[i];
    }

    console.log("this is the players array ", playersArray);
    updateDisplay(resetTarget, playersArray);
  }

  function winBanner(loser) {
    report("winnerBanner");
    $("#player1").text("YOU WON!!");
    $("#player2").text("You defeated " + loser[0].name + "!!!");
    $("#player2Select").children().remove();

  }

  function Died() {
    
    $("#player1Select").empty();
    $("#player1").text("YOU Died!!");
    $("button").text("Reset");
    $("button").on("click", function() {
      document.location.reload();
    });
  }

function endGame () {
  animateCSS('#player1Select','pulse infinite')
  $("#player1").text("No one left. Click the button to start over");
  $("button").text("Reset");
    $("button").on("click", function() {
      document.location.reload();
    });
  }


  // =============================================================================
  // Game functionality
  // =============================================================================
  // =============================================================================
  //function for pushing selected Character into dummy object array.
  // =============================================================================
  function Attack(p1, p2) {
    var ID = "Attack: ";

    report("Attack");

    $("button").on("click", function() {
      console.log(ID, "clicked attack");
      animateCSS("button", "wobble");
      wilhem.play();
      if (!p2 === undefined || !p2.length == 0) {
        console.log(ID, playersArray);

        if (p1[0].health > 0 && p2[0].health > 0) {
          report("Attack loop");

          console.log(ID, p1[0].health, p2[0].health);

          p2[0].health -= p1[0].attackPW;
          //when player 1 attacks player 2

          p1[0].attackPW += p1[0].baseAttack;

          $("#player1").text(
            p1[0].name +
              " hit " +
              p2[0].name +
              " for " +
              p1[0].attackPW +
              " damage."
          );

          if (p2[0].health <= 0) {
            //if player 2 dies then....
            var name = [];
            name.push(p2[0]);
            winBanner(name)
            $("button").off();
            player2Confirmed = false;
            firstPlayer.splice(0, 1, p1[0]);
            secondPlayer = [];
            // updateDisplay("#player2Select",secondPlayer);
            // updateDisplay("#player1Select", p1);
            
            // winBanner();

            charSelect();
          } else {
            //if player 2 lives
            p1[0].health -= p2[0].counterPW;
            updateDisplay("#player1Select", p1);
            updateDisplay("#player2Select", p2);
            $("#player2").text(
              p2[0].name +
                " counter attacked " +
                p1[0].name +
                " for " +
                p2[0].counterPW +
                " damage."
            );
          }
          if (p1[0].health <= 0) {
            Died();
          }
        }
      } else {
        console.log(ID, "problem in attack");
      }
    });
  }
  // ============================================================================
  //
  // ============================================================================
  function buildChar(charID) {
    var ID = "buildChar: ";
    report("buildChar");
    console.log(ID, "playersArray length ", playersArray.length);
    console.log(ID, "This is the value buildChar got ", charID);

    //if no players are selected, ends function.
    if (!player1Confirmed && !player2Confirmed) {
      console.log(ID, "no character selected");
      return;
    } else if (player1Confirmed && !player2Confirmed) {
      //if the first player has been confirmed and the second has not

      // searches array for Id and and stores object first player array
      for (i = 0; i < playersArray.length; i++) {
        if (charID === playersArray[i].nickname) {
          playersArray[i].playAvail = false;

          firstPlayer.push(playersArray[i]);

          // firstPlayer[0].battleHealth = firstPlayer[0].health;
          playersArray.splice(i, 1);
          console.log(ID, playersArray);
        }
      }
      //Displays first player in player1Select container
      updateDisplay("#player1Select", firstPlayer);
      //Displays remaining players in enemiesSelect container
      updateDisplay("#enemiesSelect", playersArray);

      // stageComple$("#player1").empty();te = false;

      // calls charSelect for second player
      charSelect();
    } else if (player1Confirmed && player2Confirmed) {
      //if player 1 has been confirmed and player 2 has been confirmed
      $("#player1").empty();
      for (i = 0; i < playersArray.length; i++) {
        console.log(ID, "counter", i);
        if (charID === playersArray[i].nickname) {
          playersArray[i].playAvail = false;
          secondPlayer = [];
          secondPlayer.push(playersArray[i]);
          // secondPlayer[0].battleHealth = secondPlayer[0].health;
          playersArray.splice(i, 1);
          console.log(ID, secondPlayer);
          console.log(ID, playersArray);
        }
      }
      if (!playersArray === undefined || !playersArray.length == 0) {
        updateDisplay("#player2Select", secondPlayer);
        updateDisplay("#enemiesSelect", playersArray);
      } else {
        $("#enemiesSelect")
          .children()
          .remove();
        updateDisplay("#player2Select", secondPlayer);
        // playersArray=["none"];
      }
      Attack(firstPlayer, secondPlayer);
    }
  }

  function charSelect() {
    report("charSelect");
    var ID = "charSelect: ";
    console.log(ID, playersArray);

    //if the playersArray is undefined, don't run.
    if (!playersArray === undefined || !playersArray.length == 0) {
      console.log(ID, "players array defined");
      //event listener added to cards
      $(".yourChar").on("click", function() {
        //if first player hasn't been selected yet...
        if (!player1Confirmed) {
          console.log(ID, "picked first player");

          player1Confirmed = true;
          //matches element ID with corresponding object stored in playersArray.
          buildChar(this.id);

          //if first has been selected and second player has not been selected.
        } else if (!player2Confirmed) {
          console.log(ID, "picked second player");

          player2Confirmed = true;
          //matches element ID with corresponding object stored in playersArray
          buildChar(this.id);
        }
      });
    } else {
      //if playsArray is undefined, then there are no players left and the game is over.

      
      //reset page
      endGame();
    }
  }
  // =============================================================================
  //
  // =============================================================================
  // =============================================================================
  //
  // =============================================================================
  // =============================================================================
  // Sets up game
  // =============================================================================

  function Game() {
    //sets board
    resetGame("#player1Select");
    //selects players
    charSelect();
  }
  //starts Gam
  Game();
});
