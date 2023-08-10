const axios = require('axios');
// import axios from 'axios';  '// will give error as the module is common js module and import doesnt work in common js moduling.

// console.log(axios); -> will print the contents of the axios object   

// axios.get('http://www.omdbapi.com/?t=harry&apikey=a7918266')
// .then((response) => {
//     console.log(response.data);
// });

async function fetch()
{
    const response = await axios.get('http://www.omdbapi.com/?t=mohit&apikey=a7918266')
    console.log(response.data);
} 
fetch();