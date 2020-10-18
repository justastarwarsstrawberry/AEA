const { WSAEISCONN } = require('constants');

exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    const fs = require("fs");
    const Enmap = require("enmap");
    let db = require("./nwords.json");
    client.setMaxListeners(0)

    client.points = new Enmap({name: "wlr"});


    
    client.on('message', (message, user) => {
        if (message.author.bot) return;
        if (message.guild) {
          // Let's simplify the `key` part of this.
          const key = `${message.guild.id}-${message.author.id}`;
          client.points.ensure(key, {
            user: message.author.id,
            guild: message.guild.id,
            wins: 0,
            loses: 0
          });
          client.points.inc(key, "wlr");
        }
        // Rest of message handler




















        let member = guild.member(message.author);
        let nickname = member ? member.displayName : null;
        let userava = message.author;
          
            const wlr = new Discord.RichEmbed()
                .setColor('#1500f7')
                .setTitle('Win to Lose Ratio')
                .setURL('')
                //.attachFiles(['./resources/assaultmech.png'])
                .setAuthor(nickname, userava.avatarURL)
                .setDescription("Shows the number of games won compared to lost")
                .addBlankField()
                .addField("Wins", `${win}`)
                .addField("Lost", `${lose}`)
                .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
                //.setImage('attachment://assaultmech.png')
                .setTimestamp()
                .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
       
        if(message.content.toLowerCaser() === '/wlr'){
            
            message.send(wlr)
            
        }
        
    });

}
