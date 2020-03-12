//_____________Dont touch Zone start
exports.code = function(){
const { Client, Attachment } = require('discord.js');
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
let nword = ['nigger','nigga','nibba','nibber','nigg','nibb']

const swearWords = ["darn", "shucks", "frak", "shite"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("Oh no you said a bad word!!!");
  // Or just do message.delete();
}
for(var i in nword){
if(message.content.toLowerCase().includes(nword[i].toLowerCase())) found = true;
}
   
if (found){
 message.reply();
 message.delete();
 message.channel.send(nworde);
}
 });





}
