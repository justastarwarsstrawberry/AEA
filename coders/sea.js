
//_____________Dont touch Zone start
exports.code = function(){
const { Client, Attachment } = require('discord.js');
const fs = require("fs");
let db = require("./databasel.json");
client.setMaxListeners(0)
//_____________Dont touch Zone end
 
 const e20 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Combat Engineer')
	.setURL('')
	.attachFiles(['./resources/cengineer.jpg'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Can build units and some T2 buildings \n- Can attack land, air, and subs \n- Can repair units \n- Can build Sub-turrets \n- Can only have 12 built at once")
	.addBlankField()
	.addField("Stats", " Price $7400 \n Health 1500 \n Attack Range 200 \n Move Speed 1.20 \n Build Speed 33.3s \n Income generation +$1 \n InIClass combatEngineerX")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://cengineer.jpg')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

client.on('message', message => {
	

//tank
if (message.content.toLowerCase() === db.A) {
	message.channel.send(e1);
}
  
});
  
  
  
//_____________Dont touch Zone start
}
//_____________Dont touch Zone end
