exports.code = function(){
const { Client, Attachment } = require('discord.js');
client.setMaxListeners(0)




client.on('message', message => {

    let guild = client.guilds.get('606586202942079017');
    let member = guild.member(message.author);
    let nickname = member ? member.displayName : null;
    // let avatar = message.member.avatarURL;
    let image = message.Attachment
       const taco = message.content
             const a1 = new Discord.RichEmbed()
                .setColor('#1500f7')
               .setTitle('Update')
               //.setAuthor(nickname, avatar)
                .setDescription(taco)
               // .setImage(image)
               // .setImage('attachment://tank.png')
               // .addBlankField()
                .setURL('https://github.com/LemonsHQ/AEA')
                .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
                .setTimestamp()
               // .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
   

if(message.content.toLowerCase().startsWith('->')){

    
    if(message.member.roles.some(role => role.name === 'Bot Developer')){
        if(message.author.bot) return;  
        
       let channel = message.guild.channels.find(channel => channel.name === "bot-updates")
       if(!channel){
           message.reply('The target channel _bot-updates_ must exist')
       }else {
           channel.send(a1)
       }
       
       
    }
}

});
  
  
  
  
//________________Dont touch Zone start
}
//________________Dont touch Zone end
