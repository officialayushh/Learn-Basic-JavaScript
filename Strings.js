// simple String
var name = "Ayush";
var age = "23";
var message = "good Boy";

console.log(name+" "+age +" "+ message);

// Matched Things
var temp = `${name} is a ${message}`;
console.log(temp);

// Finding length
var len = name.length;
console.log(`length of name is ${len}`);

// STRING FUNCTIONS
// for given formating in string.
var y = new String("Ayush");
console.log(y);

// for finding index like(0,1,2,3) :-
var str = "this is an string";
var position = str.indexOf('this');
console.log(position);


// for word wise find a index;
position = str.lastIndexOf('is');
console.log(position);

// sub string from a string. - slice m jitne denge uske according print kara dega values.
var substr = str.slice(1,7); // Get negative values
// OR
var substr = str.substring(1,7); // Dont get negative values
console.log(substr);

// Changed string by yourself,
var replaced = str.replace('string', 'Ayush');
console.log(replaced);

// For upper and lower case;
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// For adding an string method of concatination.
var newstring = str.concat('New');
console.log(newstring);

//for Blankspaces trim,
var Blankspaces = "   This contains         spaces    ";
console.log(Blankspaces);
console.log(Blankspaces.trim());