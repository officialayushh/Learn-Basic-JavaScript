  let a = 34.64;
  let b = 89;
  console.log("The Value of A & B is", a,b);
  console.log("The Value of A & B of rounded is", Math.round(a),Math.round(b)); // Rounded menans exit of number like approx final.
  // SqrRoot With two different Methods
  console.log(Math.pow(3,3)); 
  console.log("Square root of 36 is",Math.sqrt(36)); 
  // Approx number
  console.log("5.6 rounded up of ",Math.ceil(5.6));  
  console.log("5.6 rounded down of ",Math.floor(5.6)); 
  // Absolute function
  console.log("5.6 rounded down of ",Math.abs(5.6)); // abs both print positive.
  console.log("5.6 rounded down of ",Math.abs(-5.6));
  // Trignometric function
  console.log("The value of sin(pi) is ", Math.sin(Math.PI/2));
  console.log("The value of tan(pi) is ", Math.tan(Math.PI/2));
  console.log("The value of cos(pi) is ", Math.cos(Math.PI/2));
  // Min and max
  console.log("Minimum value of 4, 5, 6 is ", Math.min(4,5, 6));
  console.log("Maximum value of 4, 5, 6 is ", Math.max(4,5, 6));
  // Generating a random number
  let r = Math.random();
  console.log("The Random number is:", r); // 0-1 ka any random number find,
  // for particular choosing a number for random range;
  let a1 = 50;
  let b1 = 60;
  let r1 = a1 + (b1-a1)*Math.random();
  console.log("The random number is ", r1);
  