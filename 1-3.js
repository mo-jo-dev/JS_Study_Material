// Comparision Operators
// > - greater than
// < - less than 
// >= - greater than or equal to
// <= - less than or equal to
// != - Abstract Not equal to 
// == - Abstract Equals to
// !== - Strict not equals to
// === - Strict Equals to







//String Based Operator
//  + is a string based operator that is used to concatenate two string & return a new one
// E.g - "abc" + "mohit" = abcmohit
// console.log("Mohit" + "Joshi");




// bitwise operators
// these dont directly operate on numbers, but instead operate on binary representation of number.
// bitwise AND -> &
// bitwise OR -> |
// bitwise NOT -> ~
// bitwise XOR -> ^
// left shift -> <<
// right shift -> >>

// console.log(2<<1);
// console.log(4|2);
// console.log(4&2);
// console.log(4&(2<<1));






// Ternary Operator
// (condition)?(expression1):(expression2) {If exp1 is true, it gets executed else expression 2 gets executed}

// console.log((2>13) ? "True" : "False"); 







// conditions
// if, else and else if

// if - if(condition)
//      {
//             block
//      }   

// if the condition is not true, we use else

// else{
//          block
//     }

// we use else if when we have more than two conditions

// if(10>20)
// {
//     console.log(5);
// }
// else if(10==20)
// {
//     console.log(4);
// }
// else{
//     console.log(6);
// }







// power operator/exponetiation operator

// a**b gives us a rais to the power b.
// console.log(2**3);







// loops
// for, while, do while, foreach

/*let i=0;
while(i<10)
{
    console.log(i);
    i++;
}


for(let i=0;i<10;i++)
{
    console.log(i);
}

let j=0;
do{
    console.log(j);
    j++;
}while(j<10)*/








// break and continue keyword
/*for(let i=1;i<20;i++)
{
    if(i%7==0)
    {
        console.log("Breaking Now!!");
        break;                                    if break is executed, the command comes out of the nearest loop!! 
    }
    console.log(i);
}*/

/*for(let i=0;i<10;i++)
{
    str="";
    for(let j=0;true;j++)
    {
        str += "*";
        if(j==i)
        {
            break;
        }
    }
    console.log(str);
}*/

/*for(let i=0;i<10;i++)
{
    if(i%3==0)
    {
        continue;   //It terminates the conditions that are scheduled after it and it directly goes to the point where nearer for loop is there.
    }
    console.log(i);
}*/







// Switch Case

/*let exp = "+";                          //Key and Value Pair, here exp is the key and + is the value
let a=5;
let b=5;

switch (exp) {
    case "+":
        console.log(a+b);
        break;
    case "-":
        console.log(a-b);
        break;
    case "*":
        console.log(a*b);
        break;
    case "/":
        console.log(a/b);
        break;    
    default:
        console.log("Invalid");
        break;
}*/







// functions - reusable peice of code

// syntax
/*function name(params) {
   block 
}*/
/*
function fun(x)
{
    console.log(x+10);
    return x*10;
}

console.log(fun(10));
*/

// return Keyword returns an output out of the function and immediately stops the function execution 
// console.log is also a function, its return type is undefined

// console.log(console.log(10)); //It returns undefined as stated above!!.
// document.write is also a function








// unary operator
// x++ and ++x