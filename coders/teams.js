//_____________Dont touch Zone start
exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    const fs = require("fs");
    const config = require("./database.json");
    client.setMaxListeners(0)
    
      
    client.on("message", message => {
        client.guilds.get('606586202942079017').channels.get('651205041356537891').fetchMessage('699060018007375935');
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
            }

        if (message.content.toLowerCase().startsWith('/team')){
            var A = getRandomInt(1, 10);
            if(A >= 5){
                message.reply('Team A')
            }
            if(A <= 5){
                message.reply('Team B')
            }
        }
        if (message.content.toLowerCase().startsWith('/test')){
            let channel = message.member.voiceChannel.members;
            let A = channel.map(m=>m.name).join('\n') 
            message.channel.send(A);
            
            let sclass = message.guild.roles.find(role => role.name === "S - Class");
            let aclass = message.guild.roles.find(role => role.name === "A - Class");
            let bclass = message.guild.roles.find(role => role.name === "B - Class");
            let cclass = message.guild.roles.find(role => role.name === "C - Class");
            let dclass = message.guild.roles.find(role => role.name === "D - Class");
            const nick = message.author.displayName;
                //S CLASS
                if (message.member.roles.some(sclass) && !counts == 1){
                    message.reply('Team A')
                    counts + 1;
                    
                }else{
                    message.reply('Team B')
                    counts - 1;
                }
                // A CLASS
                if (message.member.roles.some(aclass) && !counta == 1){
                    message.reply('Team A')
                    counta + 1;
                    
                }else{
                    message.reply('Team B')
                    counta - 1;
                }

                //B CLASS
                if (message.member.roles.some(bclass) && !countb == 1){
                    message.reply('Team A')
                    countb + 1;
                    
                }else{
                    message.reply('Team B')
                    countb - 1;
                }
                // C CLASS
                if (message.member.roles.some(cclass) && !countc == 1){
                    message.reply('Team A')
                    countc + 1;
                    
                }else{
                    message.reply('Team B')
                    countc - 1;
                }
                // D CLASS
                if (message.member.roles.some(dclass) && !countd == 1){
                    message.reply('Team A')
                    countd + 1;
                    
                }else{
                    message.reply('Team B')
                    countd - 1;
                }
            }
        
});

}
//________________Dont touch Zone end
