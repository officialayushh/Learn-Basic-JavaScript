// SetTimeout Function.
function greet(name, byeText){
    console.log("Good morning" + " " +name + " " + byeText);
}
//  timeOut = setTimeout(greet, 5000, "Ayush" , "Take Care"); // Dont call setTiomeout function inside function it,s showing error;

// ClearTimeout Function.
// console.log(timeOut);
// clearTimeout(timeOut);// Timeout clear means not run setTimeout again after run setTimeoout,
setInterval(greet, 5000,"Ayush", "Care"); // Every 5 seconds run that;