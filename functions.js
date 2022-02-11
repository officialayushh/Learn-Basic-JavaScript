function greet(name) {
    console.log(name + " " + "is a good boy") // Simple fuction dekar print karaya only,
}

function greet(name, greetText){
    console.log(greetText + " "+ name);
    console.log(name + " " + "is a good boy") // Function ko Call karke print karaya,
}

let name = "Ayush";
let name1 = "Shubham";
let greetText = "Good Morning"
greet(name, greetText);
greet(name1, greetText);

// Adding through a function.
function sum(a,b,c){
    let d = a+b+c;
    return d;
}
let returnVal = sum(1,2,3);
console.log(returnVal);
