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

client.on('message', (message) => {
    if (message.content.startsWith('/kick') && client.users.get("287608141191970817")) {
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

client.on('message', message => {
    let voiceChannel = message.member.voiceChannel;
    if (message.content === 'bruh') return voiceChannel.join(true).then(connection => {
        const dispatcher = connection.playFile('./resources/bruh.ogg');
    })
});

client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(ch => ch.name === 'general');
    if (!channel) return;
    channel.send(`Welcome to AEA, ${member}!`);
    //const role = guild.roles.find(role => role.name === 'Member>');
    //const member = message.mentions.members.first();
    //member.addRole(role);
});

client.on('message', message => {
    if (message.content === 'Mothership' ||  message.content === 'mothership') {

        message.reply(`
        Mothership
        - Ultimate Carrier
        - Armed with hellfire cannons and missile launchers

        - Built in fabricator
        - Carries 16 Units
        - Goes nuclear on death
        Price $150000
        Health 15000
        Max Attack Range 320
        Build Speed 123.8s`);
    }
});
