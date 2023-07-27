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

function binarySearch(arr,key)
{
    // LOGIC
}

module.exports = {
    linear : linearSearch,
    binary:binarySearch
}