//_____________Dont touch Zone start
exports.code = function(){
const { Client, Attachment } = require('discord.js');
const fs = require("fs");
let db = require("../other/nwords.json");
client.setMaxListeners(0)

//_____________Dont touch Zone end

  
const nworde = new Discord.MessageEmbed()
	.setColor('#1500f7')
	.setTitle('The N Word has been spoken')
	.attachFiles(['./resources/nwordmechs.jpg'])
	.setDescription("May the wrath of god banish them...")
	.addBlankField()
	.setImage('attachment://nwordmechs.jpg')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

client.on('message', (message, user) => {
try{
    if (message.content.toLowerCase().includes(db.A) || message.content.toLowerCase().includes(db.B) || message.content.toLowerCase().includes(db.H) || message.content.toLowerCase().includes(db.C) || message.content.toLowerCase().includes(db.D) || message.content.toLowerCase().includes(db.E) || message.content.toLowerCase().includes(db.F) || message.content.toLowerCase().includes(db.G) || message.content.toLowerCase().includes(db.H) || message.content.toLowerCase().includes(db.I) || message.content.toLowerCase().includes(db.K) ) {
		if(message.author.bot) return;
		message.delete(); 
               message.channel.send(nworde);
		
	}
}
catch(err){
	catchErr(err, message);
   }
 });


}
