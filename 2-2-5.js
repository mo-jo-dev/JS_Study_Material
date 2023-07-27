/*
function fun()
{
    return new Promise(function f(resolve,reject)
    {
        setTimeout(function process(){
            console.log("Resolved");
            resolve(123);
            },5000);
    });
}


// async function processdown()
// {
//     let x = await fun();
//     console.log("The answer is:", x);
//     return x;
// }

// processdown();

let x = fun();
x.then(function exec(value)
{
    console.log("The value using 1st .then() is: ",value);
    for(let i=0;i<100000000;i++){}
    return 100;
})
// .then(function exec1(value)               //The second .then() is chained to the above function, not with the fun(). || For putting the functions in on fullfilment array, we can directly use .then() with function fun()
// {
// console.log("he value using 2nd .then() is: ",value);
// })

x.then(function exec3(value)
{
    console.log("yo the value is: ", value);
    return 200;
})
*/


// NOTE - await can return a promise and a non promise too, for non promise, await will convert into promise.

/*
async function funn()
{
    console.log("Entered");
    let x = await 20;                             //here, 20 is not a promise, but it is converted in it
    console.log("exiting");
    return x;
}

console.log("Start");
let val = funn();
val.then(function f(value)
{
    console.log("value is", value);
})
console.log("End");
*/


// Sometimes, a lot of await functions are there in a code, this is called ____await hell____, we have different
// functions to resolve this issue.
// One such is Promise.all(), it takes array of promises and returns a single promise.Promise.all() waits for all the promises to get executed, if any is not executed, the overall do not resolves
// Implementation::::

/*
function fetchData(url)
{
    return new Promise(function(resolve,reject){
        console.log("Download Started from: ",url);
        setTimeout(function process()
        {
            let data="Important Data!!!";
            console.log("Download Completed from", url);
            resolve(data);        
        },5000);
    })
}

function writefile(data)
{
    return new Promise(function(resolve,reject)
    {
        console.log("Started Writing ",data," in a file");
        setTimeout(function process(){
            let file="result/return.txt";
            console.log(data ,"written Successfully on", file);
            resolve(file);
        },3000);
    });
}

function uploadData(file,url)
{
    return new Promise(function(resolve,reject){
        console.log("Uploading Files Started in ",url, "and filename is ",file);
        setTimeout(function process(){
            let result="SUCCESS";
            console.log(file ,"Uploading SuccessFully in ",url);
            resolve(result);
        },5000);
    });
}

let downloadPromise = fetchData("www.google.com");
let writePromise = writefile("dummy data");
let uploadPromise = uploadData("test.txt","www.drive.google.com");
console.log("Start");
Promise.all([downloadPromise,writePromise,uploadPromise])       //It wraps their response inside another promise, that we can catch using .then(); 
.then(function process(value)
{
    console.log(value);
})*/


// to chain th functions, we can put different self linked await functions to different functions and then use Promises.all()

// One another function is function.any(), the difference from the previous is that it executes when any of the one gets executed.



// Till Now, whatever we have learnt is with respect to Success, but now let us take the case of Failures/errors.
// So, How do we handle those Errors?
// We have a throw keyword which throws a user defined exception.


// Naya Khulasa!! - .then() function takes two parameters, one is the success callback and one is the error callback.

function fetchData(url)
{
    return new Promise(function(resolve,reject){
        console.log("Download Started from: ",url);
        setTimeout(function process()
        {
            let data="Important Data!!!";
            console.log("Download Completed from", url);
            reject(data);        
        },5000);
    })
}

// let x = fetchData("www.google.com");
// x.then(function success(value){
//     console.log("value is ",value);
// }, function err(err){
//     console.log('error is ',err);
// });


let x = fetchData("www.google.com");
x.then(function success(v)
{
    console.log("Value is ",v);
    return 10;
})
.then(function success1(v)
{
    console.log("value again is ",v);   
})
.catch(function errorHandle(err)
{
    console.log("Error is ", err);
})

// We can implement both the methods to implement error handling. Either by passing two callback functions in .then()
// or by chaining the .catch() function after .then() function.


// For catching the error in async await, we can use the following syntex: 
/*
async function processing()
{
    try{
        let download = await writefile("www.google.com");
        return download;
    }
    catch(err){
        console.log("Error is: ",err);
    }
}
*/


// Error First Callback: When we have a callback and the first arguement of that callbakc is an error.
// E.g: 
/*
    fetchCustom("www.google.com", function(err,response)
    {
        if(err)
        {
            console.log("Download Completed!!", err);
            return;
        }
        console.log("response is ",response)
    })
*/