//_____________Dont touch Zone start
exports.code = function(){
const { Client, Attachment } = require('discord.js');
client.setMaxListeners(0)
//_____________Dont touch Zone end

  
 client.on('message', (message, user) => {
  
	if (message.content.startswith('n') || message.content.startswith('N')) { 
    if (message.content.endswith('a') || message.content.endswith('r') || message.content.endswith('A') || message.content.endswith('R')) {
		
		message.delete(); 
		 const attachment = new Attachment('./resources/nwordmechs.jpg');
               message.channel.send(attachment);
               message.reply('is racist');
	}
 }
   
 });





}
