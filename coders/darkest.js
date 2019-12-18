//Dont touch Zone start
exports.code = function(){
const { Client, Attachment } = require('discord.js');
client.setMaxListeners(0)
//Dont touch Zone end
  
  
client.on('message', message => {
//units code
    if (message.content === 'Unitex' ||  message.content === 'Exunit' || message.content === 'unitex') {
	    message.channel.send(unitex);
    }
  
});
  
  
  
  
//Dont touch Zone start
}
//Dont touch Zone end
