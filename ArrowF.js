let greet = () => {
    console.log('GM');
}
greet();

setTimeout(() => {
    console.log("Hallow World");
}, 3000);

// let sum = (a,b) =>{  // With arrow such along;
//     return a+b;
// }
let sum = (a,b) => a+b; // Shortcut
let half = a => a/2;

let val = sum(1,2);
console.log(val);
let start = half(8);
console.log(start);

// For Object
let obj1 = {
    names:["Ayush", "Hero","Hai"],
    speak(){
        this.names.forEach((stud)=>{
            console.log(stud+" "+"hi bro");
        })
    }
}
obj1.speak();