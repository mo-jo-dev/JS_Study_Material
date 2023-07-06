// var teacher="mohit";
// function fun()
// {
//     var teacher = "abhay";
//     console.log(teacher,teachingAssistant);    // This is the case where teachingAssistant is undeclared. as it is not yet set
//     teachingAssistant="Monk";
// }

var teacher="mohit";
function fun()
{
    var teacher = "abhay";
    teachingAssistant="Monk";
    console.log(teacher,teachingAssistant);
}
function gun()
{
    console.log(subject);
    var subject = "Javascript";
}

console.log(teacher);
fun();
gun();

// Undefined vs Undeclared
// Undefined is a variable state when the scopes already know about it but in the execution phase we have not allocated it a value. 
// Undeclared is a variable state when we never formally declare a variable and before assigning a value so that it has chance to become auto global, we try to use it.




function mun()
{
    var ta;
    console.log(ta);
    var ta="od";
    console.log(ta);
}
mun();




// Different type of error - i.e. type error

/*var fun=10;
function gun()
{
    console.log("Hello wordl!!");
}

gun();
fun(); //Because of this, we get a type error. 

// As in Parsing phase, we have target fun=10, at the execution phase we have a function. So type is different  
*/





// Executing a function without declaring it - This is called Hoisting - Hoisting is the result of Lexical Scoping
// or
// Hoisting is a direct consequence of lexical parsing that happens in JS due to which we are able to access some functions & variables before declaring which gives us a notion that they are moved up.

/*
gun()
function gun()
{
    console.log("Hello World!!");
}
*/



// *****NOTE****** - If we want that our functions dont do autoglobal, then we have to write the following before that function or in that particular functioon:
// ________"use strict"_________ //in strict mode auto globals are prohibited




// Sometimes we or our team member assigns the value in the same variable twice. We can prevent it by using blocks i.e putting a variable inside a block or we can use:
// IIFE - Immedietly Invoked Function exptression - Way which helps us in long long codes.

// ____Function Expressions____ - If the code do not starts with a function rather it starts with sometihing else but including a function.
// Then its called function expression


function fn()
{
    //Normal Function
}
let gn = function()
{
    // Function Expression
} 
(function() {/*Function Expression*/})