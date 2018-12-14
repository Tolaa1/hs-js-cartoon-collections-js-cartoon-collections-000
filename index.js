

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

function longPlaneteerCalls(calls) {
  var Word = false;
  for (var i = 0; i < calls.length; i++){
    if (calls[i].length > 4){
      Word = true;
    
  }

}
return Word;
}



function findTheCheese (foods) {
 	var cheeses = ["cheddar", "gouda", "camembert"];
 	for (var i = 0; i < foods.length; i++) {
 		for (var x = 0; x < cheeses.length; x++) {
 			if ( cheeses[x]=== foods[i] ) {
 				return foods[i]; 
 			}
 		}
 		}
 	return "no cheese!"; 
 }


	