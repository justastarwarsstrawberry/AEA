exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    const fs = require("fs");
    client.setMaxListeners(0)
    /* Embeds go here
    */

   const i1 = new Discord.RichEmbed()  
   .setColor('#1500f7')
   .setTitle('Xan Commander')
   .setURL('')
   .attachFiles(['./resources/xancommander.png'])
   .setAuthor('Vox777#2661', 'https://i.imgur.com/kFsKZrD.png')
   .setDescription(" - Heavily armed \n - Can attack ground \n - Medium air attack \n - Needs to reload after firing \n - Self repair")
   .addBlankField() 
   .addField("Stats", "Price $21,000 \n Health 1,500 \n Attack Range 280 \n Move Speed 1.40 \n Build Speed 165.9s \n PrimaryDamage 22 \n SecondaryAreaDamage/Radius 83/20 \n InIclass  c_cyborg")
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .setImage('attachment://xancommander.png')
   .setTimestamp()
   .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');


    client.on('message', message => {
    
    // If statements go here


    client.on('message', message => {
        //Cyborg
        if (message.content.toLowerCase() === 'xancommander') {
            if(message.author.bot) return; 
            message.channel.send(i1);
        }

    });

}