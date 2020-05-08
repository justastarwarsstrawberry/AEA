exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    const fs = require("fs");
    client.setMaxListeners(0)
    /* Embeds go here
    */

    //Xan Commander
   const xancommander = new Discord.RichEmbed()  
   .setColor('#1500f7')
   .setTitle('Xan Commander')
   .setURL('')
   .attachFiles(['./resources/xancommander.png'])
   .setAuthor('Vox777#2661', 'https://i.imgur.com/kFsKZrD.png')
   .setDescription(" - Heavily armed \n - Can attack ground \n - Medium air attack \n - Needs to reload after firing \n - Self repair")
   .addBlankField() 
   .addField("Stats", "Price $21,000 \n Health 1,500 \n Attack Range 280 \n Move Speed 1.40 \n Build Speed 165.9s \n PrimaryDamage 22 \n SecondaryAreaDamage/Radius 83/20 \n InIclass  c_xancommander")
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .setImage('attachment://xancommander.png')
   .setTimestamp()
   .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

   //Ghost
   const ghost = new Discord.RichEmbed()  
   .setColor('#1500f7')
   .setTitle('Ghost')
   .setURL('')
   .attachFiles(['./resources/ghost.png'])
   .setAuthor('Vox777#2661', 'https://i.imgur.com/kFsKZrD.png')
   .setDescription("-Advanced armored infantry\n-Light plasma Rifles\n- Can attack ground & air\n-Advanced stealth technology\n- Renegerates health quickly")
   .addBlankField() 
   .addField("Stats", "Price $1,800 \n Health 150 \n Attack Range 230 \n Move Speed 1.10 \n Build Speed 16.7s \n PrimaryDamage 45 \n SecondaryAreaDamage/Radius 0/0 \n InIclass  c_ghost")
   .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
   .setImage('attachment://ghost.png')
   .setTimestamp()
   .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');



    client.on('message', message => {
    
    // If statements go here


    client.on('message', message => {
        //Xan commander
        if (message.content.toLowerCase() === 'xancommander') {
            if(message.author.bot) return; 
            message.channel.send(xancommander);
        }

        client.on('message', message => {
            //Ghost
            if (message.content.toLowerCase() === 'ghost') {
                if(message.author.bot) return; 
                message.channel.send(ghost);
            }
    
    });

}