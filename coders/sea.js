
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
const e3 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('AntiAirBoat')
	.setURL('')
	.attachFiles(['./resources/antiairboat.png'])
	.setAuthor('LemonsHQ', 'https://imgur.com/1ir1AqD.png')
	.setDescription(" - Equipped with an Anti Air Gun \n - Weak armour ")
	.addBlankField()
	.addField("Stats", " Price $750 \n Health 270 \n Attack Range 190 \n Move Speed 0.90 \n Build Speed 6.7s \n InIClass  antiAirTurretBoat")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://antiairboat.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e4 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Corvette')
	.setURL('')
	.attachFiles(['./resources/corvette.png'])
	.setAuthor('LemonsHQ', 'https://imgur.com/1ir1AqD.png')
	.setDescription(" - Equipped with an Anti Air Gun \n - Weak armour ")
	.addBlankField()
	.addField("Stats", " Price $1,250 \n Health 1,500 \n Attack Range 275 \n Move Speed 0.80 \n Build Speed 10.6s \n InIClass Corvette")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://corvette.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e5 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Frigate')
	.setURL('')
	.attachFiles(['./resources/frigate.png'])
	.setAuthor('LemonsHQ', 'https://imgur.com/1ir1AqD.png')
	.setDescription(" - Equipped with an Anti Air Gun \n - Weak armour ")
	.addBlankField()
	.addField("Stats", " Price $3,500 \n Health 2,000 \n Attack Range 290 \n Move Speed 0.75 \n Build Speed 15.2s \n InIClass Frigate")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://frigate.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e6 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Battleship')
	.setURL('')
	.attachFiles(['./resources/battleship.png'])
	.setAuthor('LemonsHQ', 'https://imgur.com/1ir1AqD.png')
	.setDescription(" - Medium range land attack \n - Cannot attack air or subs")
	.addBlankField()
	.addField("Stats", " Price $1,500 \n Health 1,200 \n Attack Range 240 \n Move Speed 0.80 \n Build Speed 24.8s \n InIClass c_battleShip")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://battleship.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e7 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Heavy Battleship')
	.setURL('')
	.attachFiles(['./resources/hvybattleship.png'])
	.setAuthor('LemonsHQ', 'https://imgur.com/1ir1AqD.png')
	.setDescription(" - Long range land attack \n - Anti-air \n - Light anti-sub torpedos")
	.addBlankField()
	.addField("Stats", " Price $6,000 \n Health 4,000 \n Attack Range 290 \n Move Speed 0.70 \n Build Speed 41.7s \n PrimaryDamage 65 \n SecondaryDamage 50 \n InIClass heavyBattleship")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://hvybattleship.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e8 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Destroyer')
	.setURL('')
	.attachFiles(['./resources/destroyer.png'])
	.setAuthor('LemonsHQ', 'https://imgur.com/1ir1AqD.png')
	.setDescription(" - Powerful land attack \n - Anti-sub torpedoes \n - Cannot attack air")
	.addBlankField()
	.addField("Stats", " Price $5,000 \n Health 3,500 \n SelfRegen 0.003 \n Attack Range 280 \n Move Speed 0.50 \n Build Speed 24.8s \n PrimaryDamage 100 \n InIClass Destroyer")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://destroyer.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e9 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Battle Cruiser')
	.setURL('')
	.attachFiles(['./resources/battlecruiser.png'])
	.setAuthor('LemonsHQ', 'https://imgur.com/1ir1AqD.png')
	.setDescription(" - Powerful land attack \n - Anti-sub torpedoes \n - Cannot attack air")
	.addBlankField()
	.addField("Stats", " Price $9,000 \n Health 7,000 \n SelfRegen 0.003 \n Attack Range 330 \n Move Speed 0.50 \n Build Speed 87.7s \n PrimaryDamage 100 \n InIClass Destroyer")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://battlecruiser.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

client.on('message', message => {
	
//
//Gunboat
if (message.content.toLowerCase() === 'gunboat' && !message.author.bot) {
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
//Anti Air Boat
if (message.content.toLowerCase() === 'antiairboat') {
	if(message.author.bot) return;  
	message.channel.send(e3);
}
//Corvette
if (message.content.toLowerCase() === 'corvette') {
	if(message.author.bot) return;  
	message.channel.send(e4);
}
//Frigate
if (message.content.toLowerCase() === 'frigate') {
	if(message.author.bot) return;  
	message.channel.send(e5);
}
//battleship
if (message.content.toLowerCase() === 'battleship') {
	if(message.author.bot) return;  
	message.channel.send(e6);
}
//Heavybattleship
if (message.content.toLowerCase() === 'heavybattleship') {
	if(message.author.bot) return;  
	message.channel.send(e7);
}
//Destroyer
if (message.content.toLowerCase() === 'destroyer') {
	if(message.author.bot) return;  
	message.channel.send(e8);
}
//BattleCruiser
//if (message.content.toLowerCase() === 'battlecruiser') {
//	if(message.author.bot) return;  
//	message.channel.send(e9);
//}
});
  
  
  
//_____________Dont touch Zone start
}
//_____________Dont touch Zone end
