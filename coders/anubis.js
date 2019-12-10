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
 
  
         client.on('message', message => {
             function getRandomInt(min, max) {
                  min = Math.ceil(min);
                  max = Math.floor(max);
                 return Math.floor(Math.random() * (max - min)) + min;
             }
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
               const attachment = new Attachment('./resources/[p4]Desert Battle (4p)_map.PNG');
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
               const attachment = new Attachment('./resources/[p5]Eye of Magma (2v3)_map.PNG');
               message.channel.send(attachment);
           
           }
              if (x===7) {
               const attachment = new Attachment('./resources/[p5]Hourglass (2v3)_map.png');
               message.channel.send(attachment);
           
       }
              if (x===8) {
               const attachment = new Attachment('./resources/[p5]Kratos and Hercules (2v3)_map.png');
               message.channel.send(attachment);
           
       }
              if (x===9) {
               const attachment = new Attachment('./resources/[p5]Kratos and Hercules (2v3)_map.png');
               message.channel.send(attachment);
           
       }
              if (x===10) {
               const attachment = new Attachment('./resources/[p6] RoundaBout (6p)_map.PNG');
               message.channel.send(attachment);
           
       }
              if (x===11) {
               const attachment = new Attachment('./resources/[p6]Beach Landing mrhidihoEdit (6p)_map.png');
               message.channel.send(attachment);
           
       }
              if (x===12) {
               const attachment = new Attachment('./resources/[p6]Beach Landing mrhidihoEdit (6p)_map.png');
               message.channel.send(attachment);
           
       }
              if (x===13) {
               const attachment = new Attachment('./resources/[p6]Bridge of Hell (6p)_map.png');
               message.channel.send(attachment);
           
       }
               
              if (x===14) {
               const attachment = new Attachment('./resources/[p6]Burning Beaches (6p)_map.png');
               message.channel.send(attachment);
           
       }
               if (x===15) {
               const attachment = new Attachment('./resources/[p6]Crossing (6p) mrhidihoEdit_map.png');
               message.channel.send(attachment);
           
       }
               if (x===16) {
               const attachment = new Attachment('./resources/[p6]Desert Crossing (6p)_map.PNG');
               message.channel.send(attachment);
           
       }
               if (x===17) {
               const attachment = new Attachment('./resources/[p6]Divided Islands (6p)_map.png');
               message.channel.send(attachment);
           
       }
               if (x===18) {
               const attachment = new Attachment('./resources/[p6]Igneous-small (6p)_map.png');
               message.channel.send(attachment);
           
       }
               if (x===19) {
               const attachment = new Attachment('./resources/[p6]Magma Island mrhidihoEdit (6p)_map.png');
               message.channel.send(attachment);
           
       }
               if (x===20) {
               const attachment = new Attachment('./resources/[p6]Serpent's Pass (6p)_map.png');
               message.channel.send(attachment);
           
       }
               if (x===21) {
               const attachment = new Attachment('./resources/[p6]Tundra (6p)_map.png');
               message.channel.send(attachment);
           
       }
               if (x===22) {
               const attachment = new Attachment('./resources/[p6]Weddell Isles (6p)_map.png');
               message.channel.send(attachment);
           
       }
               if (x===23) {
               const attachment = new Attachment('./resources/[p6]X-Path (6p)_map.png');
               message.channel.send(attachment);
           
       }
               if (x===24) {
               const attachment = new Attachment('./resources/[p8]Darklord-Egypt (8p)_map.png');
               message.channel.send(attachment);
           
       }
               if (x===25) {
               const attachment = new Attachment('./resources/[p8]Igneous (8p)_map.png');
               message.channel.send(attachment);
           
       }
               if (x===26) {
               const attachment = new Attachment('./resources/[p8]Many Islands mrhidihoEdit (8p)_map.PNG');
               message.channel.send(attachment);
           
       }
               if (x===27) {
               const attachment = new Attachment('./resources/[p9]Coliding Powers (4v5)_map.png');
               message.channel.send(attachment);
           
       }
               if (x===28) {
               const attachment = new Attachment('./resources/[p9]Kings of the Hills (9p)_map.png');
               message.channel.send(attachment);
           
       }
               if (x===29) {
               const attachment = new Attachment('./resources/[p9]No-Mans Valley (3v4)_map.png');
               message.channel.send(attachment);
           
       }
               if (x===30) {
               const attachment = new Attachment('./resources/[p10] Napali Warfare (10p)_map.PNG');
               message.channel.send(attachment);
           
       }
               if (x===31) {
               const attachment = new Attachment('./resources/[p10] Ultimate Crossing (10p)_map.png');
               message.channel.send(attachment);
           
       }
});
});
});
    
//Dont touch Zone start
}
//Dont touch Zone end
