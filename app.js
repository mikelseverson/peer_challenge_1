var value = 103;

if(value > 102) {
	value += 2;
} else {
	value -= 18;
}

var string = "98";

value += string; // 10598

var array = [];

for(var i = 0; i < value.length; i++) {
	array[i] = value.charAt(i);
}
array.pop();
array.shift(); 

// array 059

var newString = "";
	for(i = array.length -1; i >= 0; i--) {
		newString += array[i]
	}
//"950"



value = parseInt(value); // 10598
newString = parseInt(newString); // 950
value += newString; // 10598950

if(value > 8596) {
	value = 12;
}
else if(value = 1111) {
		value = 2;
	}
else {
		value = 14;
	}


var counter = 4;
	while(counter > 0) {
		value++;
		counter--;
	}

var removeFirst = function(val) {
	val = val.toString();
	if(val.length > 1) {
		val = val.slice(1);
		}
	return val;
}

value = removeFirst(value);
console.log(value);
