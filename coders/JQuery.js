exports.code = function(){
const { Client, Attachment } = require('discord.js');
client.setMaxListeners(0)




client.on('message', message => {

    let guild = client.guilds.get('606586202942079017');
    let member = guild.member(message.author);
    let nickname = member ? member.displayName : null;
    let avatar = member ? member.avatarURL : null;
    let image = message.Attachment
       const taco = message.content
             const a1 = new Discord.RichEmbed()
                .setColor('#1500f7')
                .setAuthor(nickname, avatar)
                .setTitle(taco)
                .setImage(image)
               // .setImage('attachment://tank.png')
                .addBlankField()
                .setURL('https://challonge.com/wgamhen5.svg')
                .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
                .setTimestamp()
                .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
   

if(message.content.toLowerCase().startsWith('>')){
    if(message.author.bot) return;  
    if(message.member.roles.some(role => role.name === 'Bot Developer')){
       let channel = message.guild.channels.find(channel => channel.name === "bracket")
       if(!channel){
           message.reply('The "annoucements" channel must exist')
       }else {
           message.guild.channels.find(channel => channel.name === "bracket").send(a1)
       }
       
    }
}

});
  
  
  
  
//________________Dont touch Zone start
}
//________________Dont touch Zone end
