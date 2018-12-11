

function dwarfRollCall(dwarves) {
 	var myString = "";
   for (var i = 0; i < dwarves.length; i++) {
    myString += (i+1).toString()+ ". " + dwarves[i] + " ";
   }
   return myString;
 }



function summonCaptainPlanet(planeteerCalls){
  	var calls = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
   calls.push(planeteerCalls[i].toUpperCase() + "!");
  }
  return calls;
}

function longPlaneteerCalls(words) {
  var Word = false;
  for (var i = 0; i < words.length; i++){
    if (words[i].length > 4){
      Word = true;
    
  }

}
return Word;
}



function findTheCheese (foods) {
 	var cheeses = ["cheddar", "gouda", "camembert"];
 	for (var i = 0; i < foods.length; i++) {
 		for (var j = 0; j < cheeses.length; j++) {
 			if ( cheeses[j]=== foods[i] ) {
 				return foods[i]; 
 			}
 		}
 	}
 	return "no cheese!"; 
 }


	