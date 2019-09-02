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
    cardImg: "./assets/images/Obi1.jpg",
    playAvail: true
  };

  var luke = {
    name: "Luke Skywalker",
    nickname: "Luke",
    health: 100,
    battleHealth: 0,
    attackPW: 5,
    counterPW: 5,
    cardImg: "./assets/images/Luke1.jpg",
    playAvail: true
  };

  var vader = {
    name: "Darth Vader",
    nickname: "Vader",
    health: 300,
    battleHealth: 0,
    attackPW: 20,
    counterPW: 20,
    cardImg: "./assets/images/Vader1.jpg",
    playAvail: true
  };

  var sidious = {
    name: "Darth Sidious",
    nickname: "Sidious",
    health: 500,
    battleHealth: 0,
    attackPW: 25,
    counterPW: 25,
    cardImg: "./assets/images/Sith-Primer-Sidious.jpg",
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
  var stageComplete = false;

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
      $(target + " div:last-child").addClass("card text-center yourChar");
      $(target + " div:last-child").attr("id", selection[i].nickname);
      $(target + " div:last-child").append("<p>" + selection[i].name + "</p>");
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

  //sets the board of playersArray
  function resetGame(resetTarget) {
    //resets player picks
    report("resetting game");
    player1Confirmed = false;
    player2Confirmed = false;
    $(resetTarget)
      .children()
      .remove();
    for (var i = 0; i < playersArray.length; i++) {
      //resets playersArray to original stats.
      playersArray[i] = staticArray[i];
    }

    console.log("this is the players array ", playersArray);
    updateDisplay(resetTarget, playersArray);
  }

  function winBanner() {
    report("winnerBanner");
    // $("#winnerSec").children.remove();
    $("#winnerSec").append("<h1>YOU WON!!!</h1>");
    $("#player2Select")
      .children()
      .remove();
  }

  // =============================================================================
  // Game functionality
  // =============================================================================
  // =============================================================================
  //function for pushing selected Character into dummy object array.
  // =============================================================================
  function Attack(p1, p2) {
    var audio = new Audio("./assets/audio/Lightsaber.ogg");
    report("Attack");
    $("button").on("click", function() {
      console.log("clicked attack");

      audio.play();
      if (p1[0].health > 0 && p2[0].health > 0) {
		 report("first attack loop");
        p2[0].health -= p1[0].attackPW;
        p1[0].health -= p2[0].counterPW;
        p1[0].attackPW += p1[0].attackPW;

        if (p1[0].health < 0) {
          alert("You died game over");
          document.location.reload();
        } else if (p2[0].health < 0) {
          player2Confirmed = false;
          firstPlayer[0] = p1[0];
          secondPlayer.pop();
          winBanner();

          charSelect();
        }
        updateDisplay("#player1Select", p1);
        updateDisplay("#player2Select", p2);
      }
    });
  }

  function buildChar(charID) {
    report("buildChar");
    console.log("This is the value buildChar got " + charID);
    if (!player1Confirmed && !player2Confirmed) {
      console.log("no character selected");
      return;
    } else if (player1Confirmed && !player2Confirmed) {
      //if the first player has been confirmed and the second has not
      for (i = 0; i < playersArray.length; i++) {
        if (charID === playersArray[i].nickname) {
          playersArray[i].playAvail = false;
          firstPlayer.push(playersArray[i]);
          firstPlayer[0].battleHealth = firstPlayer[0].health;
          playersArray.splice(i, 1);
        }
      }
      updateDisplay("#player1Select", firstPlayer);
      updateDisplay("#enemiesSelect", playersArray);
      stageComplete = false;
      charSelect();
    } else if (player1Confirmed && player2Confirmed) {
      //if player 1 has been confirmed and player 2 has been confirmed
      for (i = 0; i < playersArray.length; i++) {
        if (charID === playersArray[i].nickname) {
          playersArray[i].playAvail = false;
          secondPlayer.push(playersArray[i]);
          secondPlayer[0].battleHealth = secondPlayer[0].health;
          playersArray.splice(i, 1);
        }
      }
      updateDisplay("#player2Select", secondPlayer);
      updateDisplay("#enemiesSelect", playersArray);
    }
  }

  function charSelect() {
    report("charSelect");
    console.log(playersArray);
	
	
	if (!playersArray === undefined || !playersArray.length == 0) {
		// array empty or does not exist
	
      		$(".yourChar").on("click", function() {
        		//if first player hasn't been selected yet...
       			 if (!player1Confirmed) {
          				console.log("picked first player");
          				player1Confirmed = true;
          				buildChar(this.id);
          				//if first has been selected and second player has not been selected.
        		} else if (!player2Confirmed) {
          				console.log("picked second player");
          				player2Confirmed = true;
          				buildChar(this.id);
        		}
			  });
			  
    } else {
      winBanner()
      confirm("would you like to play again?");
      document.location.reload();
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
    resetGame("#player1Select");
    //  reset("#enemiesSelect");
    //starts the
    // for player 1
    charSelect(stageComplete);
    Attack(firstPlayer, secondPlayer);
  }

  Game();
});
