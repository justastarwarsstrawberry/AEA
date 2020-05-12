exports.code = function(){


    const ms = require('ms');
    const { Client, Attachment } = require('discord.js');
    client.setMaxListeners(0)
    
      
client.on("message", message => {
    



if(message.content.toLowerCase().startsWith('/mute')){
    let member = message.mentions.users;
    if (!member) return message.reply('You have not mentioned a user!')
    let muteRole = message.guild.roles.find('name', 'Muted');
    if (!muteRole) return message.reply('You dont have a "Muted" role!')
    let params = message.content.split(" ").slice(1);
    let time = params[1];
    if(!time) return message.reply('There is no specified time!')

    member.addRole('709296636609953792');
    message.channel.send(`${member.user.tag} has been muted for ${ms(ms(time), {long:true})}...`);

setTimeout(function() {
    member.removeRole('709296636609953792');
    message.channel.send(`${member.user.tag} is unmuted, mute time was ${ms(ms(time), {long:true})}...`);
}, ms(time));
    }
});
}