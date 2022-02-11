// for loop
for(let i=0;i<3;i++){
    console.log(i);
}

let friends = ["Ayush","Bharat", "Raj"];
// for (let i = 0; i < friends.length; i++) {
//     console.log("Good morning"+" "+ friends[i]);
// }

// for in loop use in object;
let employee = {
    name : "Ayush",
    company: "Infosys",
    Salary: 1000000,
}
for (key in employee) { //for particular object 
    console.log(`The ${key} of employee is ${employee[key]}`);
}

// forEach Loops
friends.forEach(function f(element){
    console.log("Hello"+" "+element+",are you good." );
}) // Har ek array ke element k liy particular hum isse chala sakte hai,

//for of loop
for(element of friends){
    console.log("Hallow" + element);
}

// While loop 
let i = 0; // IF code is wrong then its wrong. 
while(i<4){
    console.log(`${i} is less then 4`);
    i++
}

//Do While loop
let j = 34; // Atleast one time run.
do{
    console.log(`${j} is less then 4`);
    j++
}while(j<4);