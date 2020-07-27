exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    client.setMaxListeners(0)
    const ReactionRole = require("reaction-role");
    const system = new ReactionRole(process.env.BOT_TOKEN);
    





    client.on("message", async(message) => {

        
        if(message.content.toLowerCase().startsWith('}') && client.users.get("242687584373964801")){
            let guild = client.guilds.get('606586202942079017');
            let member = guild.member(message.author);
            let nickname = member ? member.displayName : null;
            let userava = message.author;
               const taco = message.content
                     const a1 = new Discord.RichEmbed()
                         .setColor('#1500f7')
                        .setTitle('Auto Roles')
                         .setAuthor(nickname, userava.avatarURL)
                         .setDescription(taco)
                        //.addField('Vote Options:','✅ or ❌')
                         .addBlankField()
                         .setURL('')
                        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
                         .setTimestamp()
                         .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
            
            let chan = message.guild.channels.find(channel => channel.name === "bot-testing")
            let option1 = system.createOption("aea:737107148533792829", "697809380137107478");
            let option2 = system.createOption("hosts:737107269300256857", "711766395817558067" );
            let option3 = system.createOption("nukedrone:737107875117400114", "694316498553929778");
            const resend = system.createMessage(a1, chan, 9999, null, option1, option2, option3);

            chan.send(resend)
            system.init();
        }
 
    });


}