//_____________Dont touch Zone start
exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    const fs = require("fs");
    const config = require("./database.json");
    client.setMaxListeners(0)
    
      
    client.on("message", message => {
        client.guilds.get('606586202942079017').channels.get('651205041356537891').fetchMessage('699060018007375935');
        
        if (message.content.toLowerCase().startsWith('/team')){
            var Team1 = ["bob","bob","bob","bob","bob"];
            var Team2 = ["bob","bob","bob","bob","bob"];
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
                    if(counts == 1){

                    Team2[0] = message.member.user.tag
                    counts--
                    fs.writeFile('./teams/team2.txt', Team2, function (err) {
                        if (err) return console.log(err);
                        console.log('Hello World > team2.txt');
                      });
                    }else {

                    Team1[0] = message.member.user.tag
                    counts++
                    fs.writeFile('./teams/team1.txt', Team1, function (err) {
                        if (err) return console.log(err);
                        console.log('Hello World > team1.txt');
                    });
                    }

                }
                if(message.member.roles.some(role => role.name === 'A - Class')){
                    if(counta == 1){
                    Team2[1] = message.member.user.tag
                    counta--
                    fs.writeFile('./teams/team2.txt', Team2, function (err) {
                        if (err) return console.log(err);
                        console.log('Hello World > team2.txt');
                    });
                    }else{
                    Team1[1] = message.member.user.tag
                    counta++
                    fs.writeFile('./teams/team1.txt', Team1, function (err) {
                        if (err) return console.log(err);
                        console.log('Hello World > team1.txt');
                    });
                    }


                }
                if(message.member.roles.some(role => role.name === 'B - Class')){
                    if(countb == 1){
                    Team2[2] = message.member.user.tag
                    countb--
                    fs.writeFile('./teams/team2.txt', Team2, function (err) {
                        if (err) return console.log(err);
                        console.log('Hello World > team2.txt');
                    });
                    }else {
                    Team1[2] = message.member.user.tag
                    countb++
                    fs.writeFile('./teams/team1.txt', Team2, function (err) {
                        if (err) return console.log(err);
                        console.log('Hello World > team1.txt');
                    });
                    }
                }
                if(message.member.roles.some(role => role.name === 'C - Class')){
                    if(countc == 1){
                    Team2[3] = message.member.user.tag
                    countc--
                    fs.writeFile('./teams/team2.txt', Team2, function (err) {
                        if (err) return console.log(err);
                        console.log('Hello World > team2.txt');
                    });
                    }else{
                    Team1[3] = message.member.user.tag
                    countc++
                    fs.writeFile('./teams/team1.txt', Team2, function (err) {
                        if (err) return console.log(err);
                        console.log('Hello World > team1.txt');
                    });
                    }
                }
                if(message.member.roles.some(role => role.name === 'D - Class')){
                    if(countd == 1){
                    Team2[4] = message.member.user.tag
                    countd--
                    fs.writeFile('./teams/team2.txt', Team2, function (err) {
                        if (err) return console.log(err);
                        console.log('Hello World > team2.txt');
                    });
                    }else{
                    Team1[4] = message.member.user.tag
                    countd++
                    fs.writeFile('./teams/team1.txt', Team2, function (err) {
                        if (err) return console.log(err);
                        console.log('Hello World > team1.txt');
                    });
                    }
                }

                if(message.content.toLowerCase.startsWith('/teams')){
                    fs.unlink('./teams/team1.txt', function (err) {
                    if (err) throw err;
                    console.log('team1 reset');
                    }); 
                    fs.unlink('./teams/team2.txt', function (err) {
                        if (err) throw err;
                        console.log('Team2 reset');
                    }); 
                }
            }

        
});

}
//________________Dont touch Zone end
