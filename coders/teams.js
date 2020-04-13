//_____________Dont touch Zone start
exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    client.setMaxListeners(0)
    
      
    client.on("message", message => {
        client.guilds.get('606586202942079017').channels.get('651205041356537891').fetchMessage('699060018007375935');
        if (message.content.toLowerCase().startsWith('/team')){
            var count = 0;
            var s = message.author.displayName;
            var a = message.author.displayName;
            var b = message.author.displayName;
            var c = message.author.displayName;
            var d = message.author.displayName;

            let sclass = message.guild.roles.find(role => role.name === "S - Class");
            let aclass = message.guild.roles.find(role => role.name === "A - Class");
            let bclass = message.guild.roles.find(role => role.name === "B - Class");
            let cclass = message.guild.roles.find(role => role.name === "C - Class");
            let dclass = message.guild.roles.find(role => role.name === "D - Class");

                if (message.member.roles.some(role => role.name === 'S - Class')){
                    s = 1
                    for(var i = 0; i < s.length; ++i){
                        if(s[i] == s)
                         s++;
                      }
                }
                if(message.member.roles.some(role => role.name === 'A - Class')){
                    a = 1 
                    for(var i = 0; i < a.length; ++i){
                        if(a[i] == a)
                         a++;
                      }
                }
                if(message.member.roles.some(role => role.name === 'B - Class')){
                    b = 1
                    for(var i = 0; i < b.length; ++i){
                        if(b[i] == b)
                         b++;
                      }
                }
                if(message.member.roles.some(role => role.name === 'C - Class')){
                    c = 1
                    for(var i = 0; i < c.length; ++i){
                        if(c[i] == c)
                         c++;
                      }
                }
                if(message.member.roles.some(role => role.name === 'D - Class')){
                    d = 1
                    for(var i = 0; i < d.length; ++i){
                        if(d[i] == d)
                         d++;
                      }
                }
             }
    if(message.content.toLowerCase().startsWith('/teams')){
    message.channel.send('Team 1 | Team 2 | Team 3')
    if(s === 1 || s === 2 || s === 3){
        message.channel.send(s)
    }
    if(a === 1 || a === 2 || a === 3){
        message.channel.send(a)
    }
    if(b === 1 || b === 2 || b === 3){
        message.channel.send(b)
    }
    if(c === 1 || c === 2 || c === 3){
        message.channel.send(c)
    }
    if(d === 1 || d === 2 || d === 3){
        message.channel.send(d)
    }
}
    });

}
//________________Dont touch Zone end
