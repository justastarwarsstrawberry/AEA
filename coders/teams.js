//_____________Dont touch Zone start
exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    const fs = require("fs");
    const config = require("./database.json");
    client.setMaxListeners(0)
    
      
    client.on("message", message => {
        client.guilds.get('606586202942079017').channels.get('651205041356537891').fetchMessage('699060018007375935');
        var Team1 = [T1S,T1A,T1B,T1C,T1D];
        var Team2 = [T2S,T2A,T2B,T2C,T2D];
        var T1S = "";
        var T1A = "";
        var T1B = "";
        var T1C = "";
        var T1D = "";
        var T2S = "";
        var T2A = "";
        var T2B = "";
        var T2C = "";
        var T2D = "";

        if (message.content.toLowerCase().startsWith('/team')){

            var counts = 0;
            var counta = 0;
            var countb = 0;
            var countc = 0;
            var countd = 0;
            let sclass = message.guild.roles.find(role => role.name === "S - Class");
            let aclass = message.guild.roles.find(role => role.name === "A - Class");
            let bclass = message.guild.roles.find(role => role.name === "B - Class");
            let cclass = message.guild.roles.find(role => role.name === "C - Class");
            let dclass = message.guild.roles.find(role => role.name === "D - Class");
            const nick = message.author.displayName;
                if (message.member.roles.some(role => role.name === 'S - Class')){
                    if(counts == 2){

                    T2S = message.member.user.tag
                    counts--

                    }else {

                    T1S = message.member.user.tag
                    counts++

                    }

                }
                if(message.member.roles.some(role => role.name === 'A - Class')){
                    if(counta == 2){
                    T2A = message.member.user.tag
                    counta--

                    }else{
                    T1A = message.member.user.tag
                    counta++

                    }


                }
                if(message.member.roles.some(role => role.name === 'B - Class')){
                    if(countb == 2){
                    T2B = message.member.user.tag
                    countb--

                    }else {
                    T1B = message.member.user.tag
                    countb++

                    }
                }
                if(message.member.roles.some(role => role.name === 'C - Class')){
                    if(countc == 2){
                    T2C = message.member.user.tag
                    countc--

                    }else{
                    T1C = message.member.user.tag
                    countc++

                    }
                }
                if(message.member.roles.some(role => role.name === 'D - Class')){
                    if(countd == 2){
                    Team2[4] = message.member.user.tag
                    countd--

                    }else{
                    Team1[4] = message.member.user.tag
                    countd++

                    }
                }
                if(message.content.toLowerCase().endsWith('list')){
                    var chan = voiceChannel.id('606586202942079029');
                    var mems = chan.members;
                    for (var x in mems) {
                    message.channel.send(x.GuildMember.id);
                    }
                    return 'ANYTHING';
                } 
            }


        
});

}
//________________Dont touch Zone end
