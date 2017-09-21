console.log("Hi");




   for(var i = 5; i < 120; i += 10) {
	console.log("Current Value is", i);
}

for(var j = 4096; j  >= 1; j /= 2 ) {
	console.log("Current Value is", j);
}

var presidents = ["George Washington", "John Adams", "Thomas Jefferson", "Abraham Lincoln"];

for(var c = 0; c < presidents.length; c++) {
	console.log("Presidents #" + (c + 1) + " " + presidents[c]);
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var prop in antSpecies) {
	console.log(prop);
}