const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);
//BOT_TOKEN is the Client Secret

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
client.on('message', (message) => {
    if(message.content == '/join' && client.users.get("242687584373964801")){
            let channel = message.member.voiceChannel;
            for (let member of channel.members) {
                client.voiceChannel.join(true)
               
            }
        }
    
        else
        {
            // do nothing
        }

