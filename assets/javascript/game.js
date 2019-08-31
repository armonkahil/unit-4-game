$(document).ready(function() {
    // $("*").hide();
    var obi = {
      name: "Obi-Wan",
      nickname: "Obi",
      health: 120,
      attackPW: 8,
      counterPW: 8,
      cardImg: "../assets/images/Obi1.jpg",
      playAvail: true
    };

    var luke = {
      name: "Luke Skywalker",
      nickname : "Luke",
      health: 100,
      attackPW: 5,
      counterPW: 5,
      cardImg: "../assets/images/Luke1.jpg",
      playAvail: true
    };

    var vader = {
      name: "Darth Vader",
      nickname: "Vader",
      health: 150,
      attackPW: 20,
      counterPW: 20,
      cardImg: "../assets/images/Vader1.jpg",
      playAvail: true
    };

    var sidious = {
      name: "Darth Sidious",
      nickname: "Sidious",
      health: 180,
      attackPW: 25,
      counterPW: 25,
      cardImg: "../assets/images/Sith-Primer-Sidious.jpg",
      playAvail: true
    };


var players = [obi, luke, vader, sidious];

playersLeft = [];

// console.log(playersLeft);
// var dummyOBJ = {
//   name: "Savage Oppress",
//   nickname: "Savage",
//   health: 300,
//   attackPW: 50,
//   counterPW: 200,
//   cardImg: "../assets/images/savage.jpg"
// };



var dummyOBJ=[];


function buildChar (charID){
 
  console.log("This is the value buildChar got " + charID);
  for (i=0; i < players.length; i++) {
    if (charID === players[i].nickname && players[i].playAvail) {
        dummyOBJ.push(players[i]);
        players.splice(i,1);  //<-----I created a global dummy object "dummyOBJ" to r 
        // players[i].playAvail = false;
        } 
  }
  
  // return dummyOBJ.nickname;
   //these functions are meant to update the board
    //takes chosen player and sends it to be displayed in the user attack area
    setting("#userAttacks", dummyOBJ);  
    //takes the remaining players to display in the players left section
    reset("#enemiesSelect", players);
    console.log("This is who's left" + playersLeft);
}
 //sets the board of players
function reset(target) {
  $(target).children().remove();

   for (var i = 0; i < players.length; i++) { 
            if (players[i].playAvail) {
             $(target).append("<div />");
              $(target + " div:last-child").addClass("card text-center yourChar");
              $(target + " div:last-child").attr("id", players[i].nickname);
              $(target + " div:last-child").append("<p>" + players[i].name + "</p>");
              $(target + " div:last-child").append("<img/>");
              $(target + " img:last-child").attr("class", "rounded img-fluid");
              $(target + " img:last-child").attr("src", players[i].cardImg);
              $(target + " img:last-child").attr("width", "160");
              $(target + " div:last-child").append("<p>" + players[i].health + "</p>");
              $(target + " div:last-child").append();
            }
  }
}

  
// This is where i run into my problem....the player array of objects is now undefined.
function setting (target,selection) {
 
  $(target).children().remove();
     console.log("this is the target div ", target);
     console.log("this is the array received ", selection);
     
     for (var i=0; i < selection.length; i++) {  
            if (selection[i].playAvail){
                $(target).append("<div/>");
                $(target + " div:last-child").addClass("card text-center yourChar");
                $(target + " div:last-child").attr("id", selection[i].nickname);
                $(target + " div:last-child").append("<p>" + selection[i].name + "</p>");
                $(target + " div:last-child").append("<img/>");
                $(target + " img:last-child").attr("class", "rounded img-fluid");
                $(target + " img:last-child").attr("src", selection[i].cardImg);
                $(target + " img:last-child").attr("width", "160");
                $(target + " div:last-child").append("<p>" + selection[i].health + "</p>");
                $(target + " div:last-child").append();
              }
      }
}


//TODO: I need a function that will take the id and return a variable equal to the character selected.







function CharSelect () {
$(".yourChar").on('click', function() {
     buildChar(this.id);
   setting("#playerSelect",dummyOBJ);
});
}

//---------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------
//sets up initial divs displaying the players
 reset("#playerSelect");
//  reset("#enemiesSelect"); 

//starts the game
 CharSelect()

  

});