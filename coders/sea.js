
//_____________Dont touch Zone start
exports.code = function(){
const { Client, Attachment } = require('discord.js');
const fs = require("fs");
client.setMaxListeners(0)
//_____________Dont touch Zone end
 const e0 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Gunboat')
	.setURL('')
	.attachFiles(['./resources/gunboat.png'])
	.setAuthor('LemonsHQ', 'https://imgur.com/1ir1AqD.png')
	.setDescription(" - Fast \n - Can attack ground")
	.addBlankField()
	.addField("Stats", " Price $300 \n Health 170 \n Attack Range 120 \n Move Speed 1.5 \n Build Speed 3.3s \n InIClass c_gunboat")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://gunboat.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
 const e1 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Underwater Probe')
	.setURL('')
	.attachFiles(['./resources/underwaterprobe.png'])
	.setAuthor('LemonsHQ', 'https://imgur.com/1ir1AqD.png')
	.setDescription(" - Very weak \n - Light torpedo attack only")
	.addBlankField()
	.addField("Stats", " Price $450 \n Health 80 \n Attack Range 100 \n Move Speed 0.70 \n Build Speed 3.3s \n InIClass lightSub")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://underwaterprobe.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
 const e2 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Missile Ship')
	.setURL('')
	.attachFiles(['./resources/missileship.png'])
	.setAuthor('LemonsHQ', 'https://imgur.com/1ir1AqD.png')
	.setDescription(" - Fast \n - Can attack ground and air and subs \n - Weak amour")
	.addBlankField()
	.addField("Stats", " Price $800 \n Health 450 \n Attack Range 200 \n Move Speed 1.2 \n Build Speed 6.7s \n InIClass c_missileShip")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://missileship.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

client.on('message', message => {
	

//Gunboat
if (message.content.toLowerCase() === 'gunboat') {
	if(message.author.bot) return; 
	message.channel.send(e0);
}
//Probe
if (message.content.toLowerCase() === 'underwaterprobe') {
	if(message.author.bot) return;
	message.channel.send(e1);
} 
//Missile Ship
if (message.content.toLowerCase() === 'missileship') {
	if(message.author.bot) return;  
	message.channel.send(e2);
}
});
  
  
  
//_____________Dont touch Zone start
}
//_____________Dont touch Zone end
