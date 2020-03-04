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
const m1 = message.content.includes('n') || message.content.includes('N')
if (m1.startsWith('n') || m1.startsWith('N')) { 
    if (m1.endsWith('a') || m1.endsWith('r') || m1.endsWith('A') || m1.endsWith('R')) {
		if(m1.includes('i') || m1.includes('g') || m1.includes('I') || m1.includes('G')){
	message.delete(); 
	const attachment = new Attachment('./resources/nwordmechs.jpg');
	      message.reply('');
              message.channel.send(nword);
             
    }
  }
}
   
 });





}
