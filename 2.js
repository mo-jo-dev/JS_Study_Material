// printing hello world

// console.log('Mohit is cool');






// types in JS

// number
// console.log(12);
// console.log(25.425);
// console.log(-12);
// console.log(0);
// console.log(-0);

// string
// console.log("This is a string/text");
// console.log('This is a string/text with single quote');
// console.log(`This is a string/text with backtick`);

//boolean
// console.log(true);
// console.log(false);

// undefined / null
// console.log(undefined);
// console.log(null);

// objects
// console.log({"Mohit":123}); //key:value pair

// symbols
// console.log(Symbol('hello'));






// typeof operator

// console.log(typeof 12);
// console.log(typeof "Mohit");
// console.log(typeof (-0));
// console.log(typeof undefined);
// console.log(typeof null); //corner case as type changes
// console.log(typeof NaN);
// console.log(typeof {"Mohit":1234});





// when we use console.log, we print every data in a new line, for printing in a same line we have to write the data with commas in the same log
// for doing the former, we use process.stdout.write();(Note: it only works on node)

// process.stdout.write("Hello");
// process.stdout.write("World");





// variables in JS -- variables are buckets inside the memory, where we store something.It has a label which can be called whenever required
// there are three ways to initialize, -- let,const and var {these are keyqords-they have special meanings}

// let x = 5;
// var y=20; 
// const z = "abcd";

// console.log(x,y,z);






// operators

// arithematic operators
console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 / 2); //it is a normal division, will not skip any decimal. NOTE- if we need to have floor divisions, we do so by using parseInt(a/b) or using Math.floor(a/b)
console.log(10 % 2);

// assignment operators
let x=10; //assigning 10 to x
x += 2; //x=x+2=12
x -=2;
x *=2;
x/=2
x%=2;

// logical operators 
// AND-&&, OR-||, NOT-!
console.log((10>5)&&(7<6)); 
console.log((10>5)||(7<6)); 
console.log(4 && 0); //0
console.log(4 || 0); //4
console.log(0 && 4); //0
console.log(0 || 4);  //4
