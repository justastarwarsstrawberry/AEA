const Discord = require('discord.js');
const client = new Discord.Client();

//client.login(process.env.BOT_TOKEN);
//BOT_TOKEN is the Client Secret
client.login('NTg3MzY3NzY0NDc0NDYyMjEw.XeaKRw.jcYp9DEld3GVFFpyb5uTEtdMbMQ')
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