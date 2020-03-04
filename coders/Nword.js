//_____________Dont touch Zone start
exports.code = function(){
const { Client, Attachment } = require('discord.js');
client.setMaxListeners(0)
//_____________Dont touch Zone end

  
const nword = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('The N Word has been spoken')
	.attachFiles(['./resources/nwordmechs.jpg'])
	.setDescription("May the rath of god banish them...")
	.addBlankField()
	.setImage('attachment://nwordmechs.jpg')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

 client.on('message', (message, user) => {
  
if (message.content.startsWith('n') || message.content.startsWith('N')) { 
    if (message.content.endsWith('a') || message.content.endsWith('r') || message.content.endsWith('A') || message.content.endsWith('R')) {
		if(message.content.includes('i') || message.content.includes('g') || message.content.includes('I') || message.content.includes('G')){
	message.delete(); 
	const attachment = new Attachment('./resources/nwordmechs.jpg');
	      message.reply('');
              message.channel.send(nword);
             
    }
  }
}
   
 });





}
