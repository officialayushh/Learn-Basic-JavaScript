/* We using Let - dont be overwrite as var and also this use in particular object.
If you come outside the object then this doesn't use.
Tab use karenge jab lagta h aane wae time me any value we can changed. */
// example:-
let a = "v";
{
    let a = "v6"
    console.log(a);
}
console.log(a);

//use of var ex:-
var name = "Ayush";
var age = "23";
var message = "good Boy";

console.log(name+" "+age +" "+ message);

// use of const ex:-
// THis will be Constant
const b = "This cannot be changed";
console.log(b);