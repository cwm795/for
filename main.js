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