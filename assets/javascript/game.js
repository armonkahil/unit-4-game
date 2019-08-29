//instructions
//the goal of the game is to kill all the other characters by fighting them
//pick a character to fight with
//the other 3 characters become enenmies
//your character w
//obi wan hits with 8 damage, with every attack increases by 1.
//darth Maul attack power is 25 damage
//add a restart button

//120 100 150 180


$(document).ready(function(){
    // $("*").hide();
    // jQuery methods go here...
    // $('.jquery-background-video').bgVideo({fadeIn: 2000});

    var obi = {
      name: "Obi-Wan",
      health: 120,
      attackPW: 8,
      counterPW: 8,
      cardImg: "src = ../assets/images/obiWan.jpeg"
    };

    var luke = {
      name: "Luke Skywalker",
      health: 100,
      attackPW: 5,
      counterPW: 5,
      cardImg: "../assets/images/Luke_skywalker.jpg"
    };

    var vader = {
      name: "Darth Vader",
      health: 150,
      attackPW: 20,
      counterPW: 20,
      cardImg: "../assets/images/vader.jpeg"
    };

    var sidious = {
      name: "Darth Sidious",
      health: 180,
      attackPW: 25,
      counterPW: 25,
      cardImg: "../assets/images/Emperor_RotJ.png"
    };

function SetGame (player) {
  var newDiv = $("<div>");
  var newIMG = $("<img>");
  var newPname = $("<p>");
  var newPhealth = $("<p>");
  var pl = (''"#" + player.name "');
  newPname = player.name;
  newPhealth = player.health;
  newDiv.attr("id", player.name);
  newIMG.attr("src", player.cardImg);
  $("#playerBoard").append(newDiv);
  $("#playerBoard").append(newPname);
  

  
  newDiv.attr("class", "card text-center");
  $("#playerBoard").append(newIMG);
  $("#playerBoard").append(newPhealth);
}

SetGame(luke);




});