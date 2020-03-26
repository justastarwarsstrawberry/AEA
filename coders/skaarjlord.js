//_____________Dont touch Zone start
exports.code = function(){
const { Client, Attachment } = require('discord.js');
client.setMaxListeners(0)
//_____________Dont touch Zone end
 client.on("message", message => {
    if(message.author.bot) return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(message.channel.type === "dm") return;

    if(!message.content.startsWith('+')) return;

    if(command === '+ann') {
        let channel = message.mentions.channels();
        let announcement = args.slice(1).join(" ");

        channel.send(announcement);
    }
  });
}

