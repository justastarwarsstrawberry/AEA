//_____________Dont touch Zone start
// Fixed Offline
exports.code = function(){
const { Client, Attachment } = require('discord.js');

client.setMaxListeners(0)
//_____________Dont touch Zone end
const config = require("./prefix.json");

 
 
 client.on("message", message => {

   const taco = message.content
         const a1 = new Discord.RichEmbed()
         	.setColor('#1500f7')
	        .setTitle('Announcement')
         	.setAuthor(message.author.user.tag, message.author.avatar_url)
         	.setDescription(taco)
         	.addBlankField()
         	.setURL('')
	        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
         	.setTimestamp()
         	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

//https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128
 if(message.author.bot) return;  

 if(message.content.toLowerCase().endsWith('.')){

 if(message.member.roles.some(role => role.name === 'Bot Developer') || message.member.roles.some(role => role.name === 'Developer')){
	let channel = message.guild.channels.find(channel => channel.name === "announcements")
	if(!channel){
    	message.reply('The "annoucements" channel must exist')
	}else {
		message.guild.channels.find(channel => channel.name === "announcements").send(a1)
	}
	
     }
    }
  });
}

