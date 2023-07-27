function linearSearch(arr, key)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]===key)
        {
            return i;
        }
    }
    return NaN;
}
console.log("Ending");
function binarySearch(arr,key)
{
    // LOGIC
}

/* 
module.exports = {  //This type of export we can use in commonjs moduling and the file name with .mjs extension
    linear : linearSearch,
    binary:binarySearch
}*/
// For the ES Moduling using packets, we dont use module.exports, instead we use default keyword.

// Here, we have two types of exports, viz. Named Export and default export
// Named Export
export{linearSearch};

// Default Export!!
export default linearSearch;