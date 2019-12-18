//_____________Dont touch Zone start
exports.code = function(){
const { Client, Attachment } = require('discord.js');
client.setMaxListeners(0)
//_____________Dont touch Zone end
  
	
// /n for new line
// Only include picture if you have one
// Keep the footer the same
// Keep author as you
// Keep timestamp there
// Units Description 
// Note: The description has to be outside client.on({});

const unitex = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setURL('')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.attachFiles(['./resources/lynx.png'])
	.setImage('attachment://lynx.png')

	.setAuthor('DarkestHero', 'https://cdn.discordapp.com/avatars/356130618020593667/1d470fea1df7589c7ede6c906deec660.png?size=1024')

	.setTitle('unitex')
	.setDescription(" - Very fast \n- Low armor \n- Ground attack")
	.addBlankField()
	.addField("Stats", "Price $275 \n Health 120 \n Attack Range 130 \n Move Speed 1.60 \n Build Speed 3.3s")

	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

  
client.on('message', message => {
//units code
    if (message.content === 'Unitex' ||  message.content === 'Exunit' || message.content === 'unitex') {
	    message.channel.send(unitex);
    }
  
});
  
  
  
  
//________________Dont touch Zone start
}
//________________Dont touch Zone end
