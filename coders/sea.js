
//_____________Dont touch Zone start
exports.code = function(){
const { Client, Attachment } = require('discord.js');
const fs = require("fs");
let db = require("./databasel.json");
client.setMaxListeners(0)
//_____________Dont touch Zone end
 
 const e0 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Gunboat')
	.setURL('')
	.attachFiles(['./resources/gunboat.jpg'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Fast \n - Can attack ground")
	.addBlankField()
	.addField("Stats", " Price $300 \n Health 170 \n Attack Range 120 \n Move Speed 1.5 \n Build Speed 33.3s \n InIClass c_gunboat")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://gunboat.jpg')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

client.on('message', message => {
	

//tank
if (message.content.toLowerCase() === db.A) {
	message.channel.send(e0);
}
  
});
  
  
  
//_____________Dont touch Zone start
}
//_____________Dont touch Zone end
