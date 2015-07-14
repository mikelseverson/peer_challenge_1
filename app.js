var value = 103;

if(value > 102) {
	value += 2;
} else {
	value -= 18;
}

var string = "98";

value += string;

var array = [];

for(var i = 0; i < value.length; i++) {
	array[i] = value.charAt(i);
}



console.log(array);