//ToBoolean - Abstract Operation
// It converts the given type to a boolean value. ToBoolean works a bit differently when compared to ToString or ToNumber. 
//It maintains a list of values which when received as an arguement returns false.
// And everything, apart from the list returns true.





// List of values

// Undefined - False
// NULL - False
// Boolean - Returns Arguement 
// Number - If {+0,-0 or NaN} then false else true
// String - For empty string false else true
// Symbol - True
// Object - True







// List of falsy values
// NULL,NaN,+0,-0,false,"",undefined 
// else everything is true









// For testing the ToBoolean operation, we use Logical NOT Operator i.e. (!)
// Working of Logical NOT

//(!a)
//oldValue = ToBoolean(a)
// if(oldValue is True)
// {return false}
// else
// {return True}






let a=true;
console.log(!a);
/*
true
ToBoolean(true) -> true
!false=true
*/  

// For checking the output, check the list where the nature of different values is given






// Comparision between == and === i.e between abstract equality and strict equality     

//"==" first checks the type and if its equal, it goes for strict equality check else values are checked
// "===" also first checks the type is same or different. If different, it returns false else follows a algorithm





// The main difference between these two is that 
// Abstract equality (==) does coercion if types are not same
// While strict equality(===) never does coercion






// Imp --- In JS, NaN is the only primitive value not equal to itself.
console.log(10 === 10);





// If the left operand is a number, then an algorithm is followed, else another algorithm is followed.






console.log(NaN === NaN);
console.log(NaN == NaN);
console.log(33 == 33);
console.log(33 === 33);
console.log(0 == -0);
console.log(-0 == 0);
console.log(null === null);
console.log(undefined === undefined);
console.log("MJ" === "MJ");
console.log({} === {});
let b = {};
console.log(b === b);
console.log(typeof({}));
console.log(typeof(typeof({})));







// REPL - READ EVALUATE PRINT LOOP E.g- Browser Console
// Boxing - Forcefully tries to convert a primitive to a object.