console.log(null==undefined);
console.log(undefined==null);
console.log(12=="12");
console.log("12"==12);
console.log(false==0);
console.log(false=='0');



let a=5;
if(a)
console.log('My name is mohit');
if(a==true)
console.log('Cool')






// NaN - Not a Number
// typeof NaN is number
// It is a number but it gives notion of invalid number
//It is the only promimitive value that is not equal to itself






console.log(1/0);
console.log(typeof(1/0));




console.log(NaN==NaN);
console.log(0/0==0/0);
console.log(typeof(0/0));
console.log(0/0);




// isNaN function - anything which is not coercible is given as NaN
// This function first coerces the arguement and then chacks whether it is valid or not and gives the result
let x = "10";
let y = "abc";
let z = 10-y;

console.log(isNaN(x));
console.log(isNaN(y));
console.log(isNaN(z));





let m=0/0;
console.log(m); 
console.log((typeof(m)=='number' && isNaN(m)) ? "NaN value" : "Not NaN value"); 
// an alternative of the above logic is Number.isNaN function which will only check for NaN, whether its there or not
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("abc")); //This function is will not do coercion 



function checkdirection(value)
{
    if(value<-0)
    {
        console.log('Left');
    }
    else
    {
        console.log('Right');
    }
}

checkdirection(-5);






//Based on certain properties, we can classify different programming languages

// ON the basis of how the language executes the code we can categorise languages in the following: 

// Compiled - C++ - It reads our code completely and then executes as a whole    
// Interpredted - ShellScript - Executed line by line.
// Hybrid - Phthon, JS, Java(the java file is compiled but the byte code genetared is interpreted) - Both compiled and interpreted






// Boxing - It is a phenomenon in JS where it tries to convert primitives into objects
// Boxing can be manual or automatic


console.log("abc".length);
let o=9;
console.log((9).toString());