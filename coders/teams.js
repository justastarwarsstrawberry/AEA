//_____________Dont touch Zone start
exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    const fs = require("fs");
    const config = require("./database.json");
    client.setMaxListeners(1000)
    
      
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
            // `m` is a message object that will be passed through the filter function
            var Team1 = [];
            var team2 = [];
            var s = 0;
            var a = 0;
            var b = 0;
            var c = 0;
            var d = 0;

            const filter = m => m.content.startsWith('/t');
            const collector = message.channel.createMessageCollector(filter, { time: 20000 });

                collector.on('collect', m => {
                    console.log(`Collected ${m.content}`);
                    
                //S CLASS
                if (m.member.roles.some(role => role.name === "S - Class"){
                    if(s == 1){
                        var s2 = m.member.user.tag;
                        team2.push(s2)
                        s--;

                    }else{
                    var s1 = m.member.user.tag;
                    Team1.push(s1)
                    s++;
                    }

                }
                // A CLASS
                if (m.member.roles.some(role => role.name === "A - Class"){
                    if(a == 1){
                        var a2 = m.member.user.tag;
                        team2.push(a2)
                        a--
                    }
                    else{
                    var a1 = m.member.user.tag;
                    Team1.push(a1)
                    a++;
                    }
                }

                //B CLASS
                if ( m.member.roles.some(role => role.name === "B - Class")){
                    if(b == 1){
                        var b2 = m.member.user.tag;
                        team2.push(b2)
                        b--;
                        console.log('dec')
                    }else {
                    var b1 = m.member.user.tag;
                    Team1.push(b1)
                    b++;
                    console.log('inc')
                    }
                }

                
                // C CLASS
                if (m.member.roles.some(role => role.name === "C - Class"){
                    if(c == 1){
                        var c2 = m.member.user.tag;
                        team2.push(c2)
                        c--;
                    }
                    else{
                    var c1 = m.member.user.tag;
                    Team1.push(c1)
                    c++;
                    }
                    
                }
                // D CLASS
                if (m.member.roles.some(role => role.name === "D - Class"){
                    if(d == 1){
                        var d2 = m.member.user.tag;
                        team2.push(d2)
                        d--;
                    }
                    else{
                    var d1 = m.member.user.tag;
                    Team1.push(d1)
                    d++;
                    }
                }
                
            });

                collector.on('end', collected => {
                    console.log(`Collected ${collected.size} items`);
                    message.channel.send('Team A: ' + Team1 + '\nTeam B: ' + team2)
            });
            /*
           
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
                */
            }
        
});

}
//________________Dont touch Zone end
