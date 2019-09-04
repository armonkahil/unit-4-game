//ensures code does not run until the page full loads
$(document).ready(function() {
  // 
// =============================================================================
// // ==========================================================================
   // // =======================================================================
      // I could not decide on a theme for this assignment. So I designed it in
      // way that allows it to easily be changed. All of the specific theme 
      // components are stored on the object variable char1.
      // =======================================================================
   // ==========================================================================
// =============================================================================

// =============================================================================
// // ==========================================================================
   // // =======================================================================
      // // ====================================================================
         // // =================================================================
            // Stars Theme
            // =================================================================
         // ====================================================================
      // =======================================================================
   // ==========================================================================
// =============================================================================
var char1 = {
  name: "Obi-Wan Kenobi",
  nickname: "Obi", 
  health: 120,
  baseAttack: 8,
  attackPW: 8,
  counterPW: 8,
  cardImg: "./assets/images/Star Wars/Obi1.jpg",
  backgroundIMG: "url('./assets/images/Star Wars/xwing.jpg')",
  thememusic: "./assets/audio/Star Wars/theme.ogg",
  sound: "./assets/audio/Star Wars/sound.ogg",
  title: "./assets/images/Star Wars/star-wars-logo-0.png",
  endSound: "./assets/audio/Star wars/Strong with the force.mp3",
  playAvail: true
};

var char2 = {
  name: "Luke Skywalker",
  nickname: "Luke",
  health: 100,
  baseAttack: 5,
  attackPW: 5,
  counterPW: 5,
  cardImg: "./assets/images/Star Wars/Luke1.jpg",
  playAvail: true
};

var char3 = {
  name: "Darth Vader",
  nickname: "Vader",
  health: 150,
  baseAttack: 20,
  attackPW: 20,
  counterPW: 20,
  cardImg: "./assets/images/Star Wars/Vader1.jpg",
  playAvail: true
};

var char4 = {
  name: "Darth Sidious",
  nickname: "Sidious",
  health: 180,
  baseAttack: 25,
  attackPW: 25,
  counterPW: 25,
  cardImg: "./assets/images/Star Wars/Sith-Primer-Sidious.jpg",
  playAvail: true
};


// =============================================================================
// // ==========================================================================
   // // =======================================================================
      // // ====================================================================
         // // =================================================================
            // // ==============================================================
               // Comment this section out for Star Wars Theme
               // ==============================================================
            // =================================================================
         // ====================================================================
      // =======================================================================
   // ==========================================================================
// =============================================================================

  // ============================================================================
  // Global Variables
  // ============================================================================
//
//  ----------------------------------------------------------------------------
//  Character stats and attributes are stored in objects.
//  ----------------------------------------------------------------------------
  // var char1 = {
  //   name: "Lone Star",
  //   nickname: "Lone", 
  //   health: 120,
  //   baseAttack: 8,
  //   attackPW: 8,
  //   counterPW: 8,
  //   cardImg: "./assets/images/Space Balls/LoneStarl.jpg",
  //   backgroundIMG: "url('./assets/images/Space Balls/thumb-1920-635770.jpg')",
  //   thememusic: "./assets/audio/Space Balls/space-balls-theme.mp3",
  //   sound: "./assets/audio/Space Balls/saberhitwall3.mp3",
  //   title: "./assets/images/Space Balls/Spaceballs-5187654ca916c.png",
  //   endSound: "./assets/audio/Space Balls/self-destruct-button.mp3",
  //   playAvail: true
  // };

  // var char2 = {
  //   name: "Barf",
  //   nickname: "Barf",
  //   health: 100,
  //   baseAttack: 5,
  //   attackPW: 5,
  //   counterPW: 5,
  //   cardImg: "./assets/images/Space Balls/Barf.jpg",
  //   playAvail: true
  // };

  // var char3 = {
  //   name: "The Guy",
  //   nickname: "Guy",
  //   health: 150,
  //   baseAttack: 20,
  //   attackPW: 20,
  //   counterPW: 20,
  //   cardImg: "./assets/images/Space Balls/Russ.jpg",
  //   playAvail: true
  // };

  // var char4 = {
  //   name: "DarK Helmet",
  //   nickname: "Dark",
  //   health: 180,
  //   baseAttack: 25,
  //   attackPW: 25,
  //   counterPW: 25,
  //   cardImg: "./assets/images/Space Balls/Dark.jpeg",
  //   playAvail: true
  // };

  var status = "play"; 

  //array created to store character objects
  var playersArray = [char1, char2, char3, char4];
  const staticArray = [char1, char2, char3, char4];
  //arrays for characters selected
  var firstPlayer = [];
  var secondPlayer = [];
  //conditions for players selected
  var player1Confirmed = false;
  var player2Confirmed = false;

//audio variables
  var thememusic = new Audio(playersArray[0].thememusic);
      thememusic.loop = true;
  var wilhelm = new Audio("./assets/audio/WilhelmScream.ogg");
  var attackSound = new Audio(playersArray[0].sound);
  var endSound1 = new Audio(playersArray[0].endSound);
  
  
  // ===========================================================================
  // // ========================================================================
  // // =====================================================================
  // // ==================================================================
  //   Animate.CSS function
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
    $(target).children().remove();

    for (var i = 0; i < selection.length; i++) {
      $(target).append("<div/>");
      $(target + " div:last-child").addClass(
        "card animated fadeIn text-center yourChar float-left");
      $(target + " div:last-child").attr("id", selection[i].nickname);
      $(target + " div:last-child").append("<p>" + selection[i].name + "</p>");
      $(target + " div:last-child").append("<img/>");
      $(target + " img:last-child").attr("class", "rounded img-responsive");
      $(target + " img:last-child").attr("src", selection[i].cardImg);
      $(target + " img:last-child").attr("width", "130");
      $(target + " div:last-child").append("<p>" + selection[i].health + "</p>");
      $(target + " div:last-child").append();
    }
  }

  //sets the board of playersArray
  function resetGame(resetTarget) {
    report("resetting game");
    player1Confirmed = false;
    player2Confirmed = false;
    $(resetTarget).children().remove();
    //sets background image
    $("body").css("background-image", staticArray[0].backgroundIMG);
    //sets title image
    $("#title").addClass("float-right img-responsive");
    $("#title").attr("src", staticArray[0].title);
    $("#themesong").attr("src", staticArray[0].thememusic);
    $("#themesong").attr("loop", "true");
    
    for (var i = 0; i < playersArray.length; i++) {
      //resets playersArray to original stats.
      playersArray[i] = staticArray[i];
    }
    updateDisplay(resetTarget, playersArray);
    
  }
// updates page after winning
  function winBanner(loser) {
    wilhelm.play();
    report("winnerBanner");
    $("#player1").text("YOU WON!!");
    $("#player2").text("You defeated " + loser[0].name + "!!!");
    $("#player2Select").children().remove();

  }
//updates page after dying
  function Died() {
     endSound1.play();
    $("#player1Select").empty();
    $("#player1").text("YOU Died!!");
    $("button").text("Reset");
    $("button").on("click", function() {
      document.location.reload();
    });
  }
//updates page after defeating all players
function endGame () {
  endSound1.play()
  $("#player1").text("No one left. Click the button to start over");
  $("#attackbtn").text("Reset");
  $("#attackbtn").on("click", function() {
      document.location.reload();
    });
  }
  //plays theme music
function playmusic () {
  $('#playpause').on('click', function(){ 
    $("#themesong").trigger(status);
     if (status == 'play') {
         status='pause';                
       } else {
         status = 'play';     
       }
     });
}

  // =============================================================================
  // Game functionality
  // =============================================================================
  // =============================================================================
  // Attack function
  // =============================================================================
  function Attack(p1, p2) {
    var ID = "Attack: ";
    report(ID,"Attack"); 

    //when attack button is clicked on
    $("#attackbtn").on("click", function() {
      //sound plays
      attackSound.play();
      //if is not undefined
      if (!p2 === undefined || !p2.length == 0) {
        //both players are alive
        if (p1[0].health > 0 && p2[0].health > 0) {
          report(ID,"Attack loop");
          //when player 1 attacks player 2
          p2[0].health -= p1[0].attackPW;
         
            //player 1's attack power increases by base attack power
            p1[0].attackPW += p1[0].baseAttack;
            //updates info for player 1 attack
          $("#player1").text(p1[0].name + " hit " + p2[0].name +" for " + p1[0].attackPW +" damage.");
            //if player 2 dies from player 1's attack
          if (p2[0].health <= 0) {
            
            var name = [];
            name.push(p2[0]);
            //dates screen with winner inforamtion
            winBanner(name)
            //remove event listener from attack button
            $("#attackbtn").off();
            //resets player 2 pick
            player2Confirmed = false;
            //first player is then replace with current stats for next attack
            firstPlayer.splice(0, 1, p1[0]);
            //second player is erased
            secondPlayer = [];
            
            //picks player for next round
            charSelect();

          } else {
            
            //if player 2 lives
            //player 2 counter attacks player 1
            p1[0].health -= p2[0].counterPW;
            //update player cards with new stats
            updateDisplay("#player1Select", p1);
            updateDisplay("#player2Select", p2);
            //updates screen with info from attack
            $("#player2").text(p2[0].name +" counter attacked " + p1[0].name + " for " + p2[0].counterPW + " damage.");
            //if player 1 dies
            if (p1[0].health <= 0) {
              //run died function   
              Died();
            }
          }
        }
      } else {
        //if variable received it undefined
        console.log(ID, "player arrays are undefined");
      }
    });
  }
  // ============================================================================
  //Character Selection functions
  // ============================================================================
  //builds player variable for attack function
  function buildChar(charID) {
    var ID = "buildChar: ";
    report(ID,"buildChar");

    //if no players are selected, ends function.
    if (!player1Confirmed && !player2Confirmed) {
      return;

    } else if (player1Confirmed && !player2Confirmed) {
      //if the first player has been confirmed and the second has not

      // searches array for Id and and stores object first player array
      for (i = 0; i < playersArray.length; i++) {
        if (charID === playersArray[i].nickname) {
          //pushes player object into variable to play with
          firstPlayer.push(playersArray[i]);
          //removes selected player from players array
          playersArray.splice(i, 1);
        }
      }
      //Displays first player in player1Select container
      updateDisplay("#player1Select", firstPlayer);
      //Displays remaining players in enemiesSelect container
      updateDisplay("#enemiesSelect", playersArray);


      // calls charSelect for second player
      charSelect();

    } else if (player1Confirmed && player2Confirmed) {
      //if player 1 and 2 have been pick clicked on
      
      // searches array for Id and and stores object first player array
      for (i = 0; i < playersArray.length; i++) {
        if (charID === playersArray[i].nickname) {
          //pushes player object into variable to play with
          secondPlayer.push(playersArray[i]);
         //removes selected player from players array
          playersArray.splice(i, 1);
        }
      }
      //if players array is defined which means do it still have players left
      if (!playersArray === undefined || !playersArray.length == 0) {
        //update display with second play selected
        updateDisplay("#player2Select", secondPlayer);
        //updates display with remaining players in the remaining players section
        updateDisplay("#enemiesSelect", playersArray);
      } else {
        //there are no remaining player left, remove the last player from  the enemies section
        $("#enemiesSelect")
          .children()
          .remove();
          //updates display with last player
        updateDisplay("#player2Select", secondPlayer);
      }
      //if both players are picked, run attack function
      Attack(firstPlayer, secondPlayer);
    }
  }

  function charSelect() {
    var ID = "charSelect: ";
    report("charSelect");

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
      //run endGame function
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
    //toggle function for theme music
    playmusic();
    charSelect();

  }
  
  $('#themeplay').on('click', function() {
    animateCSS('#themeplay','pulse')
    console.log(this);
    thememusic.play();
    });
    $('#themepause').on('click', function() {
    thememusic.pause();
    animateCSS('#themepause','pulse')
    });
    
 
  
$
  

  Game();
});
