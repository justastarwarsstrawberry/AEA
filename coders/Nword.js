//_____________Dont touch Zone start
exports.code = function(){
const { Client, Attachment } = require('discord.js');
const fs = require("fs");
let db = require("./nwords.json");
client.setMaxListeners(0)
//_____________Dont touch Zone end

  
const nworde = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('The N Word has been spoken')
	.attachFiles(['./resources/nwordmechs.jpg'])
	.setDescription("May the rath of god banish them...")
	.addBlankField()
	.setImage('attachment://nwordmechs.jpg')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

client.on('message', (message, user) => {
    if (message.content.toLowerCase().includes(db.A) ) {
	if (message.content.toLowerCase().endsWith(db.B)){
	message.channel.send(nworde);
	}
    }	
    if (message.content.toLowerCase().includes(db.A) && message.content.toLowerCase().includes(db.C) ) {
	message.channel.send(nworde);
    }	
 });

// Giving Up



}
