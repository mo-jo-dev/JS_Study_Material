// Coercion happens internally, we dont know how its done.
// Abstract Operations are defined for these type conversions





// Four major conversions are:
// ToString()
// ToNumber()
// ToBoolean()
// ToPrimitive()






// We can use these in operations like "+", "-", "*" etc





// "ToNumber" - "-" operator is used to mimic the ToNumber operation
// with - operator, both the operands are converted to numbers and than normal subtraction is done

console.log(12-4);
console.log(undefined -3);  //Will return NaN as undefined converted to number is NaN
console.log(null-5);  //Will return -5 as null converted to number is +0
console.log("121"-21);   //Will return 100 as if string has a numerical data and when it's converted to number is 100
console.log("1fd"-21);    //Will return NaN as 1fd will not be a valid number after conversion but if inside a double quote, we have hexadecimal number, we get the result
console.log("0xaf"-75);     //Valid Hexademal Number inside a string i.e 75, here 0x denoted a hexadecimal number
console.log("0o11"-1);     //For denoting a valid Octal Number, we use 0o and the number is inside a string so it executes under ToNumber abstract op.
console.log(4-true);







// ToPrime
// For mimicing ToPrime, we have "+" Operator
// If one of the operand is string then other will also get converted into string and the result is concatinated string
// If both are of number type then result is addition.
// Similarly we have different rules.

console.log("Mohit"+"Joshi");     //Both are string so, concatination
console.log("Mohit" + undefined);    //undefined -> "undefined" and then concatination
console.log("Mohit" + null);      //null -> "null" and then concatination
console.log("Mohit" + 123);      //123->"123"
console.log("Mohit"+true);      //true->"true"
console.log("Mohit"+false);      //false->"false"
console.log("Mohit"+[]);       //[] -> ""
console.log("Mohit"+[1,2,3]);      // [1,2,3] -> "1,2,3"
console.log("Mohit"+[null,undefined]);    //[null,undefined] -> [,] 






// To Primitive
//This function takes an input arguement and tries to convert it into a non object type(primitive type), if it cant convert, it will throw error.
// It takes one more optional paramenter called the prefered type. If we have two or more than two values that can become the answer, this optional arguement helps us.

let a={"English":90,"maths":100};
console.log(a.toString());
console.log(a.valueOf());





console.log("Mohit" + {"a":10});      //Converts right operand to a string by first using ToPrimitive, here hint will become a number as we have not passed a preferred type
//Then as it is a "number", so valueOf() is called and it returns the sama object, thus tostring() is called resulting in concatination of the string '[object object]' 
//i.e "Mohit" + "[object object]"








console.log(22-{"a":12});
//22 is already a number, so the object is going to get converted into a number, then valueOf is called after toprimitive
// valueOf returns the same object and then we call toString() which converts it into '[object object]'
// gives NaN

