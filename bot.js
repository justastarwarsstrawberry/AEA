const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, Attachment } = require('discord.js');

client.login(process.env.BOT_TOKEN);
//BOT_TOKEN is the Client Secret

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', (message) => {
if(message.content == '/muteAll' && message.member.roles.some(role => role.name === 'Developer') && client.users.get("242687584373964801")){
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
    if (message.content == 'stop' && client.users.get("242687584373964801") && message.member.roles.some(role => role.name === 'Developer')){
    process.exit();
    }
    else{
        // Do notta
    }
});
client.on('message', (message) => {
    let voiceChannel = message.member.voiceChannel;
    if(message.content == '/join' && client.users.get("242687584373964801")) return voiceChannel.join(true).then(connection => {
     const dispatcher = connection.playFile('C:/Users/Lemon/OneDrive/Documents/Music/Desktop/discord bots/Austins/resources/bruh.ogg');
    });

});
client.on('message', (message) => {
    if (message.content.startsWith('/kick') && client.users.get("242687584373964801")) {
    const user = message.mentions.users.first();
    if (user){
    const member = message.guild.member(user);
    if (member){
    member.kick('Kicked by Austin').then(() => {
    // We let the message author know we were able to kick the person
    message.reply(`Successfully kicked ${user.tag}`);
                });
            }
        }
    }
});
client.on('message', message => {
    const attachment = new Attachment('./resources/NuclearDrone.png');
    if (message.content === 'bruh') {

        message.channel.send(attachment);
        
    }
});
