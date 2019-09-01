//ensures code does not run until the page full loads
$(document).ready(function() {
  // $("*").hide();
  // ============================================================================
  // Global Variables
  // ============================================================================

  // ----------------------------------------------------------------------------
  // Character stats and attributes are stored in objects.
  // ----------------------------------------------------------------------------
  var obi = {
    name: "Obi-Wan",
    nickname: "Obi",
    health: 120,
    battleHealth: 0,
    attackPW: 8,
    counterPW: 8,
    cardImg: "../assets/images/Obi1.jpg",
    playAvail: true
  };

  var luke = {
    name: "Luke Skywalker",
    nickname: "Luke",
    health: 100,
    battleHealth: 0,
    attackPW: 5,
    counterPW: 5,
    cardImg: "../assets/images/Luke1.jpg",
    playAvail: true
  };

  var vader = {
    name: "Darth Vader",
    nickname: "Vader",
    health: 150,
    battleHealth: 0,
    attackPW: 20,
    counterPW: 20,
    cardImg: "../assets/images/Vader1.jpg",
    playAvail: true
  };

  var sidious = {
    name: "Darth Sidious",
    nickname: "Sidious",
    health: 180,
    battleHealth: 0,
    attackPW: 25,
    counterPW: 25,
    cardImg: "../assets/images/Sith-Primer-Sidious.jpg",
    playAvail: true
  };
  //array created to store character objects
  var playersArray = [obi, luke, vader, sidious];
  const staticArray = [obi, luke, vader, sidious];
  //arrays for characters selected
  var firstPlayer = [];
  var secondPlayer = [];
  //conditions for players selected
  var player1Confirmed = false;
  var player2Confirmed = false;

  // =============================================================================
  // console reporting function
  // =============================================================================
  function report(section) {
    var divider = "--------------------------------------------------";
    console.log(" ");
    console.log(divider);
    console.log("running", section);
    console.log(divider);
  }

  // ===========================================================================
  // display functions
  // ===========================================================================
  //updates display
  function setting(target, selection) {
    report("setting");
    $(target)
      .children()
      .remove();
    console.log("this is the target div ", target);
    console.log("this is the array received ", selection);

    for (var i = 0; i < selection.length; i++) {
      if (selection[i].playAvail) {
        $(target).append("<div/>");
        $(target + " div:last-child").addClass("card text-center yourChar");
        $(target + " div:last-child").attr("id", selection[i].nickname);
        $(target + " div:last-child").append(
          "<p>" + selection[i].name + "</p>"
        );
        $(target + " div:last-child").append("<img/>");
        $(target + " img:last-child").attr("class", "rounded img-fluid");
        $(target + " img:last-child").attr("src", selection[i].cardImg);
        $(target + " img:last-child").attr("width", "160");
        $(target + " div:last-child").append(
          "<p>" + selection[i].health + "</p>"
        );
        $(target + " div:last-child").append();
      }
    }
  }

  //sets the board of playersArray
  function update(target) {
    report("resetGame");
    //sets up game display on first run. Second run resets game
    console.log("this is the target received", target);
    console.log("removing children from id", target);
    $(target)
      .children()
      .remove();
    console.log(
      "running resetGame loop for " + playersArray.length + " times."
    );
    for (var i = 0; i < playersArray.length; i++) {
      if (playersArray[i].playAvail) {
        $(target).append("<div />");
        $(target + " div:last-child").addClass("card text-center yourChar");
        $(target + " div:last-child").attr("id", playersArray[i].nickname);
        $(target + " div:last-child").append(
          "<p>" + playersArray[i].name + "</p>"
        );
        $(target + " div:last-child").append("<img/>");
        $(target + " img:last-child").attr("class", "rounded img-fluid");
        $(target + " img:last-child").attr("src", playersArray[i].cardImg);
        $(target + " img:last-child").attr("width", "160");
        $(target + " div:last-child").append(
          "<p>" + playersArray[i].health + "</p>"
        );
        $(target + " div:last-child").append();
      }
    }
  }

  //sets the board of playersArray
  function resetGame() {
    var resetTarget = "#playerSelect";
    $(resetTarget)
      .children()
      .remove();

    for (var i = 0; i < playersArray.length; i++) {
      //resets playersArray to original stats.
      playersArray[i] = staticArray[i];
      $(resetTarget).append("<div />");
      $(resetTarget + " div:last-child").addClass("card text-center yourChar");
      $(resetTarget + " div:last-child").attr("id", playersArray[i].nickname);
      $(resetTarget + " div:last-child").append(
        "<p>" + playersArray[i].name + "</p>"
      );
      $(resetTarget + " div:last-child").append("<img/>");
      $(resetTarget + " img:last-child").attr("class", "rounded img-fluid");
      $(resetTarget + " img:last-child").attr("src", playersArray[i].cardImg);
      $(resetTarget + " img:last-child").attr("width", "160");
      $(resetTarget + " div:last-child").append(
        "<p>" + playersArray[i].health + "</p>"
      );
      $(resetTarget + " div:last-child").append();
    }
    console.log("this is the static array ", staticArray);
    console.log("this is the players array ", playersArray);
    player1Confirmed = false;
    player2Confirmed = false;
  }




  // =============================================================================
  // Game functionality
  // =============================================================================
  // =============================================================================
  //function for pushing selected Character into dummy object array.
  // =============================================================================
  function buildChar(charID) {
    report("buildChar");
    console.log("This is the value buildChar got " + charID);
      if (!player1Confirmed && !player2Confirmed) {
        console.log("no character selected");
        return
      } else if (player1Confirmed && !player2Confirmed) {
          //if the first player has been confirmed and the second has not
              for (i = 0; i < playersArray.length; i++) {
                      if (charID === playersArray[i].nickname) {
                              playersArray[i].playAvail = false;
                              firstPlayer.push(playersArray[i]);
                              playersArray.splice(i, 1);
                      }  

              }
              setting("#userAttacks",firstplayer)
       
      } else if (player1Confirmed && player2Confirmed) {
        //if player 1 has been confirmed and player 2 has been confirmed
        for (i = 0; i < playersArray.length; i++) {
          if (charID === playersArray[i].nickname) {
                  playersArray[i].playAvail = false;
                  secondPlayer.push(playersArray[i]);
                  playersArray.splice(i, 1);
          }  

        }
        setting(secondPlayer)
      }
  }

    // return dummyOBJ.nickname;
    //these functions are meant to update the board
    //takes chosen player and sends it to be displayed in the user attack area
    setting("#userAttacks", dummyOBJ);
    //takes the remaining playersArray to display in the playersArray left section
    resetGame("#enemiesSelect", playersArray);
    console.log("This is who's left" + playersArrayLeft);
  



  function charSelect() {
    report("charSelect");
    $(".yourChar").on("click", function() {
      //if first player hasnt been selected yet...
      if (!player1Confirmed) {
        console.log("picked first player");
        buildChar(this.id);
        player1Confirmed = true;
        // setting("#playerselect",firstPlayer);
        //if first has been selected and second player has not been selected.
      } else if (!player2Confirmed) {
        console.log("picked second player");
        player2Confirmed = true;
        buildChar(this.id);
      }
    });
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
    resetGame("#playersArrayelect");
    //  reset("#enemiesSelect");

    //starts the game
    charSelect();
  }

  Game();
});
