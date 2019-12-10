//Dont touch Zone start
exports.code = function(){
const { Client, Attachment } = require('discord.js');
client.setMaxListeners(0)
//Dont touch Zone end

client.on('message', message => {
    if (message.content === 'Lynx' ||  message.content === 'Lynx' || message.content === 'lynx') {
        const attachment = new Attachment('./resources/lynx.png');

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
    if (message.content.includes('fuck') ||  message.content.includes('shit') || message.content.includes('nigger')) {
        const attachment = new Attachment('./resources/language.png');
        message.channel.send(attachment);

    }
});
    client.on('message', message => {
    if (!message.content.includes(',') && !message.content.includes('bad') && !message.content.includes('person') && message.content.includes('rape') && message.content.includes('good') ||  message.content.includes('child porn')) {
        const attachment = new Attachment('./resources/download.jpg');
        message.channel.send(attachment);

    }
});
   function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
   } 
       client.on('message', message => {
           if(message.content === '/random') {
           var x = getRandomInt(1, 36)
           if (x===1) {
               const attachment = new Attachment('./resources/[p4]Cold Corners (4p)_map.png');
               message.channel.send(attachment);
           }
           if (x===2) {
               const attachment = new Attachment('./resources/[p4]Convergence (4p)_map.png');
               message.channel.send(attachment);
           }
            if (x===3) {
               const attachment = new Attachment('./resources/[p4]Desert Battle (4p)_map.png');
               message.channel.send(attachment);
           }
             if (x===4) {
               const attachment = new Attachment('./resources/[p4]Dual Commanders (4p)_map.png');
               message.channel.send(attachment);
           }
             if (x===5) {
               const attachment = new Attachment('./resources/[p5]Bottom Heavy (2v3)_map.png');
               message.channel.send(attachment);
           
           }
              if (x===6) {
               const attachment = new Attachment('./resources/[p5]Eye of Magma (2v3)_map.png');
               message.channel.send(attachment);
           
           }
              if (x===7) {
               const attachment = new Attachment('./resources/[p5]Eye of Magma (2v3)_map.png');
               message.channel.send(attachment);
           
       }
           
});
    
//Dont touch Zone start
}
//Dont touch Zone end
