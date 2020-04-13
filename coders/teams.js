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
                    S = message.author.displayName;
                    counts++
                }
                if(message.member.roles.some(role => role.name === 'A - Class')){
                    A = message.author.displayName;
                    counta++
                }
                if(message.member.roles.some(role => role.name === 'B - Class')){
                    B = message.author.displayName;
                    countb++
                }
                if(message.member.roles.some(role => role.name === 'C - Class')){
                    C = message.author.displayName;
                    countc++
                }
                if(message.member.roles.some(role => role.name === 'D - Class')){
                    D = message.author.displayName;
                    countd++
                }
    if(message.content.toLowerCase().startsWith('/teams')){

        if(counts === 1){
            let Team1 = S
        }
        if(counta === 1){
            let Team1 = A
        }
        if(countb === 1){
            let Team1 = B
        }
        if(countc === 1){
            let Team1 = C
        }
        if(countd === 1){
            let Team1 = D
        }
        message.channel.send(Team1)
    }

});

}
//________________Dont touch Zone end
