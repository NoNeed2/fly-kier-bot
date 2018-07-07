// DEPENDANCIES
let Discord = require('discord.js');
let roblox = require('roblox-js');
let bot = new Discord.Client(); // A client that we will use as our bot

// LOGIN INFO
let token = "NDY1MTQ2ODgzMjA0MTg2MTMy.DiJRYg.MicKOdnT4pYHS5ueqJAVvqC6M78"; // Discord login token
let username = "platinummeatball"; // ROBLOX
let password = "omgomgomg"; // ROBLOX

// MISC
let PREFIX = "!" // Prefix used for the command
let GroupId = 3898509; // Group's ID


// LOGIN FUNCTION
function login() {
    return roblox.login(username, password);
}

login() // Log into ROBLOX
    .then(function() { // After the function has been executed
        console.log('Logged in.') // Log to the console that we've logged in
    })
    .catch(function(error) { // This is a catch in the case that there's an error. Not using this will result in an unhandled rejection error.
        console.log(Login error: ${error}) // Log the error to console if there is one.
    });

bot.on("message", async message => { // Event runs when there is a new message
    if (message.author.bot) return; // Here we check if the message sender is the bot, if it is, it returns and does not carry any further.
    if (message.content.indexOf(prefix) !== 0) return; // Checks if the message has the Prefix
// Here we separate our "command" and our "arguments/args" for the command. 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // Checks if the command is matching the provided string

    if (command === "shout") {
        // if(!message.member.roles.some(r=>["ROLE", "ROLE"].includes(r.name)) ) // OPTIONAL - Checks if the sender has the specified roles to carry on further
        //return message.reply("You can't use this command.");
        if (!args) { // Check if there's no arguments to use to shout, and return (stop going further)
            return;
            message.reply('Please specify a message to shout.')
        }
        const shoutMSG = args.join(" "); // Joins the arguments minus prefix to form the message to be shouted

        roblox.shout(GroupId, shoutMSG)
            .then(function() {
                console.log(Shouted ${shoutMSG}); // OPTIONAL - Logs specified string to the console
                // message.channel.send('Shouted to the group!') // OPTIONAL - Sends a message to the channel
            })
            .catch(function(error) { // This is a catch in the case that there's an error. Not using this will result in an unhandled rejection error.
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
