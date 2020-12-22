exports.code = function(){
    const { Client, MessageAttachment } = require('discord.js');
    const fs = require("fs");
    client.setMaxListeners(1000)

client.on("message", message => {

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    }

	if(message.content.startsWith('/')){
        if(message.content.includes('2v3')) {
        var x = getRandomInt(1, 5);
        }
    }

    if (x=== 1) {
        const attachment = new MessageAttachment('./resources/map/[p5]Bottom Heavy (2v3)_map.png');
        message.channel.send(attachment);
          message.reply('Bottom Heavy');
    
    }

    if (x=== 2) {
        const attachment = new MessageAttachment('./resources/map/[p5]Eye of Magma (2v3)_map.PNG');
        message.channel.send(attachment);
           message.reply('Eye of Magma');
    
    }
    if (x===3) {
        const attachment = new MessageAttachment('./resources/map/[p5]Hourglass (2v3)_map.png');
        message.channel.send(attachment);
           message.reply('Hourglass');
    
    }
    if (x===4) {
        const attachment = new MessageAttachment('./resources/map/[p5]Kratos and Hercules (2v3)_map.png');
        message.channel.send(attachment);
           message.reply('Kratos and Hercules');
    
    }
    if (x===5) {
        const attachment = new MessageAttachment('./resources/map/p5Lake_AssaultV2_2v3_map.png');
        message.channel.send(attachment);
           message.reply('Lake Assault');
    
    }

});

}