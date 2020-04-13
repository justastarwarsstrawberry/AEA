//_____________Dont touch Zone start
exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    client.setMaxListeners(0)
    
      
    client.on("message", message => {
        client.guilds.get('606586202942079017').channels.get('651205041356537891').fetchMessage('699060018007375935');
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

                if (message.member.roles.some(role => role.name === 'S - Class')){
                    
                    counts++
                }
                if(message.member.roles.some(role => role.name === 'A - Class')){
                  
                    counta++
                }
                if(message.member.roles.some(role => role.name === 'B - Class')){
                    B = message.author.displayName;
                    countb++
                }
                if(message.member.roles.some(role => role.name === 'C - Class')){
                   
                    countc++
                }
                if(message.member.roles.some(role => role.name === 'D - Class')){
                    
                    countd++
                }
            }
    if(message.content.toLowerCase().startsWith('/teams')){
        var Team1 = [S,A,B,C,D];
        if(counts < 0){
            S = message.author.displayName;
            Team1[0] = S;
        }
        if(counta < 0){
            A = message.author.displayName;
            Team1[1] = A;
        }
        if(countb < 0){
            B = message.author.displayName;
            Team1[2] = B;
        }
        if(countc < 0){
           C = message.author.displayName;
           Team1[3] = C;
        }
        if(countd < 0){
           D = message.author.displayName;
           Team1[4] = D;
        }
        message.channel.send(Team1)
    }

        
});

}
//________________Dont touch Zone end
