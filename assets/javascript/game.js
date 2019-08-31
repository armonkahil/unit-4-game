
$(document).ready(function() {
    // $("*").hide();
    

    var obi = {
      name: "Obi-Wan",
      nickname: "Obi",
      health: 120,
      attackPW: 8,
      counterPW: 8,
      cardImg: "../assets/images/Obi1.jpg"
    };

    var luke = {
      name: "Luke Skywalker",
      nickname : "Luke",
      health: 100,
      attackPW: 5,
      counterPW: 5,
      cardImg: "../assets/images/Luke1.jpg"
    };

    var vader = {
      name: "Darth Vader",
      nickname: "Vader",
      health: 150,
      attackPW: 20,
      counterPW: 20,
      cardImg: "../assets/images/Vader1.jpg"
    };

    var sidious = {
      name: "Darth Sidious",
      nickname: "Sidious",
      health: 180,
      attackPW: 25,
      counterPW: 25,
      cardImg: "../assets/images/Sith-Primer-Sidious.jpg"
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

var dummyOBJ


function buildChar (charID){
 
  console.log("This is the value buildChar got " + charID);
  for (i=0; i < players.length; i++){
    if (charID === players[i].nickname) {
      dummyOBJ = players[i];
      
    } else {

      console.log(players[i] + " is being added to playersLeft.")
      playersLeft.push(players[i]);
      console.log(playersLeft);
      
    }
    setting("#userAttacks", dummyOBJ);  
    setting("#enemiesSelect", playersLeft);
      
  
      console.log("This is who's left" + playersLeft);
      
     
  }
}
 //sets the board of players
function reset(target) {
  $(target).children().remove();

   for (var i = 0; i < players.length; i++) { 
            $(target).append("<div />");
            $(target + " div:last-child").addClass("card text-center yourChar");
            $(target + " div:last-child").attr("id", players[i].nickname);
            $(target + " div:last-child").append("<p>" + players[i].name + "</p>");
            $(target + " div:last-child").append("<img />");
            $(target + " img:last-child").attr("class", "rounded img-fluid");
            $(target + " img:last-child").attr("src", players[i].cardImg);
            $(target + " img:last-child").attr("width", "160");
            $(target + " div:last-child").append("<p>" + players[i].health + "</p>");
            $(target + " idv:last-child").append();
    }
  }

  

function setting (target,array1) {
  var selection = array1;
  $(target).children().remove();
     console.log("this is the target div ", target);
     console.log("this is the array received ", selection);
     
     for (var i=0; i < selection.length; i++) {  
            
          $(target).append("<div />");
          $(target + " div:last-child").addClass("card text-center yourChar");
          $(target + " div:last-child").attr("id", selection[i].nickname);
          $(target + " div:last-child").append("<p>" + selection[i].name + "</p>");
          $(target + " div:last-child").append("<img />");
          $(target + " img:last-child").attr("class", "rounded img-fluid");
          $(target + " img:last-child").attr("src", selection[i].cardImg);
          $(target + " img:last-child").attr("width", "160");
          $(target + " div:last-child").append("<p>" + selection[i].health + "</p>");
          $(target + " idv:last-child").append();
  }
  }


//TODO: I need a function that will take the id and return a variable equal to the character selected.







function CharSelect () {
  $(".yourChar").on('click', function() {
        console.log("i clicked " + this.id);
        
      setting("#playerSelect",buildChar(this.id));
  });
}

 reset("#playerSelect");
 reset("#enemiesSelect");

 CharSelect()

  

});