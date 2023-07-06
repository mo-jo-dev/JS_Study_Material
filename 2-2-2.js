function fetchcallcustom(url,fn)
{
    console.log("Starting Download from: ",url);
    setTimeout(function proc()
    {
        console.log("Download Completed");
        let response="Dummy data";
        fn(response);
        data=response;
    },3000);
}

function writefile(data,fn)
{
    console.log("Started writing data: ");
    setTimeout(function process()
    {
        console.log("Writing Completed!!");
        let filename = "output.text";
        fn(filename);
    },4000);
}

function uploadfile(filename,newurl,fn)
{
    console.log("Uploading Started");
    setTimeout(function process()
    {
        console.log("File",filename, "Uplaoded Successfully on",newurl);
        let uploadResponse="SUCCESS";
        fn(uploadResponse);
        console.log("Upload Ended");
    },2000);
}

fetchcallcustom("www.google.com",function downloadcallback(resp)
{
    console.log("Downloaded Content: ",resp);
    writefile(resp,function writecallback(filename)
    {
        console.log("new file written is: ",filename);
        uploadfile(filename,"www.yahoo.com",function uploadcallback(uploadResponse)
        {
            console.log("Successfully uploaded",uploadResponse);
        })
    })
});





// PROMISES - are special JS objects


// We have to learn:
// -> How to create these promises?
// -> How to consume them?
// -> What are the properties involved?



// How promises work behind the scenes?
// -> The promise object we create have 4 major properties:
//    -Status/state
//    -Value
//    -on Fulfillment
//    -on Reject




// Status/state - It shows current promise status - pending(Still going on), fulfilled(Success) or a rejected(Error) state

// Value - when status of the promise is pending, this value property is undefined.The momment promise is resolved(fulfillment state), the value property is updated from undefined to the new value(actual value/returned value/resolved value that was expected)
// So, the value property acts like a placeholder till the time promise finishes.

// onfulfillment - This is an array which contains functions that we attach to our promise object
// (to a promise object, we can attach some functions using .then() method). When the value property is updated from undefined to the new value, JS gives chance to these attached function one by one with the value property as their arguement
// (if there is no piece of code in the call stack & global code left). 