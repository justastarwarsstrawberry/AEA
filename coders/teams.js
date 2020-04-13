//_____________Dont touch Zone start
exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    client.setMaxListeners(0)
    
      
    client.on("message", message => {
        client.guilds.get('606586202942079017').channels.get('651205041356537891').fetchMessage('699060018007375935');
        if (message.content.toLowerCase.startsWith('/team')){
        message.guild.fetchMember(user.id).then(member => {
            var count = 0;
            let sclass = message.guild.roles.find(role => role.name === "S - Class");
            let aclass = message.guild.roles.find(role => role.name === "A - Class");
            let bclass = message.guild.roles.find(role => role.name === "B - Class");
            let cclass = message.guild.roles.find(role => role.name === "C - Class");
            let dclass = message.guild.roles.find(role => role.name === "D - Class");

                if (member.roles.some(role => role.name === 'S - Class')){
                    s = member.user.id();
                    for(var i = 0; i < array.length; ++i){
                        if(array[i] == s)
                         count++;
                      }
                }
                if(member.roles.some(role => role.name === 'A - Class')){
                    a = member.user.id();
                    for(var i = 0; i < array.length; ++i){
                        if(array[i] == a)
                         count++;
                      }
                }
                if(member.roles.some(role => role.name === 'B - Class')){
                    b = member.user.id();
                    for(var i = 0; i < array.length; ++i){
                        if(array[i] == b)
                         count++;
                      }
                }
                if(member.roles.some(role => role.name === 'C - Class')){
                    c = member.user.id();
                    for(var i = 0; i < array.length; ++i){
                        if(array[i] == c)
                         count++;
                      }
                }
                if(member.roles.some(role => role.name === 'D - Class')){
                    d = member.user.id();
                    for(var i = 0; i < array.length; ++i){
                        if(array[i] == d)
                         count++;
                      }
                }
        });
        message.channel.send('Team 1 | Team 2 | Team 3')
        if(s === 2 || s === 3){
            message.channel.send(s)
        }
        if(a === 2 || a === 3){
            message.channel.send(a)
        }
        if(b === 2 || b === 3){
            message.channel.send(b)
        }
        if(c === 2 || c === 3){
            message.channel.send(c)
        }
        if(d === 2 || d === 3){
            message.channel.send(d)
        }

    }
    });

}
//________________Dont touch Zone end
