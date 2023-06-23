// Coercion
// Corecion stands for type interconversion

// implicit and explicit - one on its own, another by the user

// Abstract Operations - These could not be performed by us, but these are only for the simplicity purpose, for understanding what happens when JS, does implicit type conversion
// E,g: we couldn't understand why console.log(1 - "1") = 0, but by abstract operations, we get to know how Js is doing it






// 1st Abstract Operation - ToPrimitive - It is a abstract operation, we can't use it but Js understands it
// it takes an input arguement and an optional prefered type arguement
// This operation converts the input to a non object type value
// If an arguement is capable of getting converted into more than 1 primitive type then the function uses prefered type arguement to resolve it







// If hint/preferred type is a number than on our input arguement, we call valueof() function to get a number & if it does not gives a primitive we call tostring()
// otherwise, if hint arguement is string is then we first call tostring() and then valueof()






// for "+" operator, if one operand is string then the other also gets converted to string and they gets concatenated
// else, if both operand are not strings, then both gets converted into number type.







// for "-" operator, convert both the operands to numbers and evaluates





/*
console.log(12 + "3");
console.log(1-"abc");
console.log(1-undefined);
console.log(1-null);
console.log(1-true);
console.log("12 + 3");
console.log('a'-4);
console.log(toString(1234));
*/