//Dont touch Zone start
exports.code = function(){
const { Client, Attachment } = require('discord.js');
//Dont touch Zone end

client.on('message', message => {
    if (message.content === 'Lynx' ||  message.content === 'Lynx' || message.content === 'lynx') {
        const attachment = new Attachment('./resources/typhoon.png');

        if (message.content === 'Lynx' ||  message.content === 'Lynx' || message.content === 'lynx') {
        message.channel.send(attachment);
        }
        message.reply(`
        Lynx
        -Very fast
        -Low armor
        -Ground attack

        Price $275
        Health 120
        Attack Range 130
        Move Speed  1.60
        Build Speed 3.3s`);
    }
 });
    client.on('message', message => {
    if (message.content === 'fuck' ||  message.content === 'shit' || message.content === 'nigga') {
        const attachment = new Attachment('./resources/language.png');

        if (message.content === 'fuck' ||  message.content === 'shit' || message.content === 'nigga') {
        message.channel.send(attachment);
        }
    }
});
    
    
//Dont touch Zone start
}
//Dont touch Zone end
