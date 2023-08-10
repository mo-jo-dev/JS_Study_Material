const { Telegraf } = require('telegraf');
const { message } =require ('telegraf/filters');
const axios = require('axios');

/*
How to get the secret token for creating a bot?
-> Open Telegram and search for botfather
-> To read instructions type /start and press enter 
-> To create a new bot type /newbot and press enter
-> It will ask for a bot name, give it a bot name without / and press enter. Example - Coding_adda 
-> then it will ask for a username ending with bot. Example - coding_karo_bot
-> //t.me/coding_karo_bot
*/

const bot = new Telegraf('6349811245:AAFZgMXdEA_3TkiBgfy1SQTYkJcFP54w1Xg'); //Secret Token is similar to a API Key. //In production level code, we dont show this as someone might access it 
// So, for hiding, we use package called ___dotenv___ which is used.

bot.start((ctx) => ctx.reply('Welcome to your Coding Bot!!  Here You can either search the codes for DSA concepts or you can search for Soution of any Leet Code Problem.'));

bot.command('bubblesort', async function (ctx) {
    const response = await axios.get('https://raw.githubusercontent.com/Shubham56-droid/DataStruture-and-algroithms-program/main/C/BubbleSort.c');
    return ctx.reply(response.data);
});  //This kind of event basd programming is done using __PubSub Pattern__

bot.command('hash', async function (ctx) {
    const response = await axios.get('https://raw.githubusercontent.com/Shubham56-droid/DataStruture-and-algroithms-program/main/C/Hash%20Table.c');
    return ctx.reply(response.data);
})

bot.command('insertionsort', async function (ctx) {
    const response = await axios.get('https://raw.githubusercontent.com/Shubham56-droid/DataStruture-and-algroithms-program/main/C/Insertion_Sort.c');
    return ctx.reply(response.data);
})

bot.command('linkedlistdeletion', async function (ctx) {
    const response = await axios.get('https://raw.githubusercontent.com/Shubham56-droid/DataStruture-and-algroithms-program/main/C/LinklistDeletion.c');
    return ctx.reply(response.data);
})

// bot.command('quote', async (ctx) => {
//     const api_url = "https://zenquotes.io/api/random";

//     async function getapi(url) {
//         const response = await fetch(url);
//         var data = await response.json();
//     }

//     ctx.reply(response.getapi(api_url));
//   });



bot.command('author', (ctx) => ctx.reply('Mohit Joshi'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));

bot.on('sticker', (ctx) => ctx.reply('❤️'));
bot.launch();