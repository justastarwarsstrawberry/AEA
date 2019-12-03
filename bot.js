const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

const process = require('process');
const bot = new Eris(process.env.DISCORD_TOKEN);

bot.connect();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', (message) => {
if(message.content == '/muteAll' && message.member.roles.some(role => role.name === 'Developer')){
        let channel = message.member.voiceChannel;
        for (let member of channel.members) {
            member[1].setMute(true)
           
        }
    }

    else
    {
        // do nothing
    }
});

client.on('message', (message) => {
    if(message.content == '/unmuteAll' && message.member.roles.some(role => role.name === 'Developer')){
            let channel = message.member.voiceChannel;
            for (let member of channel.members) {
                member[1].setMute(false)
               
            }
        }
    
        else
        {
            // do nothing
        }
    });
