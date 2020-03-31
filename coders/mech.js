//Dont touch Zone start
exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    const fs = require("fs");
    let db = require("./databasem.json");
    client.setMaxListeners(0)
    //Dont touch Zone end
    // units
    //mechs
    const basicmech = new Discord.RichEmbed()  
        .setColor('#1500f7')
        .setTitle('Basic Mech')
        .setURL('')
        .attachFiles(['./resources/basicmech.png'])
        .setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png.png')
        .setDescription(" - Attacks land only \n- Stronger but slower than T1 tanks")
        .addBlankField() 
        .addField("Stats", "Price $550 \n Health 500 \n Attack Range 130 \n Move Speed 0.80 \n Build Speed 9.8s")
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://basicmech.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
        
    const artillerymech = new Discord.RichEmbed() 
        .setColor('#1500f7')
        .setTitle('Artillery Mech') 
        .setURL('')
        .attachFiles(['./resources/artillerymech.png'])
        .setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
        .setDescription(" - Ground attack \n- Long range \n- Can move while firing \n- Stronger vs buildings than vs units")
        .addBlankField()
        .addField("Stats", "Price $1,600 \n Health 500 \n Attack Range 290 \n Move Speed 0.60 \n Build Speed 21.7s")
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://artillerymech.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    const mobileturret = new Discord.RichEmbed()
        .setColor('#1500f7')
        .setTitle('Mobile Turret')
        .setURL('')
        .attachFiles(['./resources/mobileturret.png'])
        .setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
        .setDescription(" - Ground attack \n- Deploys for extra range and a shield")
        .addBlankField()
        .addField("Stats", "Price $3,500 \n Health 800 \n Attack Range 200 \n Move Speed 0.50 \n Build Speed 21.7s")
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://mobileturret.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    const antiairmech = new Discord.RichEmbed()
        .setColor('#1500f7')
        .setTitle('Anti Air Mech')
        .setURL('')
        .attachFiles(['./resources/antiairmech.png'])
        .setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
        .setDescription(" - Attacks air only \n- Area affect \n- Can not attack land ")
        .addBlankField()
        .addField("Stats", "Price $850 \n Health 500 \n Attack Range 190 \n Move Speed 0.80 \n Build Speed 9.8s")
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://antiairmech.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    const lightminigunmech = new Discord.RichEmbed()
        .setColor('#1500f7')
        .setTitle('Light Minigun Mech')
        .setURL('')
        .attachFiles(['./resources/lightminigunmech.png'])
        .setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
        .setDescription(" - Can attack air and gorund \n- Burst-fire attack")
        .addBlankField()
        .addField("Stats", "Price $1,000 \n Health 500 \n Attack Range 140 \n Move Speed 0.80 \n Build Speed 9.8s")
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://lightminigunmech.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    const heavymech = new Discord.RichEmbed()
        .setColor('#1500f7')
        .setTitle('Heavy Mech')
        .setURL('')
        .attachFiles(['./resources/heavymech.png'])
        .setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
        .setDescription(" - Ground attack \n- Heavily armored \n- Moderate damage and range \n- Can disable weapon to activate a temporary shield and self-repair")
        .addBlankField()
        .addField("Stats", "Price $5,000 \n Health 2000 \n Attack Range 250 \n Move Speed 0.70 \n Build Speed 18.3s")
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://heavymech.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    const minigunmech = new Discord.RichEmbed()
        .setColor('#1500f7')
        .setTitle('Minigun Mech')
        .setURL('')
        .attachFiles(['./resources/minigunmech.png'])
        .setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
        .setDescription(" - Ground attack \n- Fast firing \n- Speeds up as it fires \n- Has shield (weak against lightning) ")
        .addBlankField()
        .addField("Stats", "Price $5,000 \n Health 800 \n Attack Range 210 \n Move Speed 0.60 \n Build Speed 27.8s")
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://minigunmech.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    const teslamech = new Discord.RichEmbed()
        .setColor('#1500f7')
        .setTitle('Tesla Mech')
        .setURL('')
        .attachFiles(['./resources/teslamech.png'])
        .setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
        .setDescription(" - Land & air lightning attack \n- Decent range and movement speed \n- Very strong vs shields \n- Reduced damage vs grounded buildings \n- Can discharge itself and sacrifice HP to deal area damage")
        .addBlankField()
        .addField("Stats", "Price $6,500 \n Health 2,000 \n Attack Range 250 \n Move Speed 0.60 \n Build Speed 27.8s")
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://teslamech.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

        client.on('message', message => {
            //basicmech
                if (message.content.toLowerCase() === db.A) {
                    message.channel.send(basicmech);
                }
            //artillerymech
                if (message.content.toLowerCase() === db.B) {
                    message.channel.send(artillerymech);
                }
            //mobileturret
                if (message.content.toLowerCase() === db.C) {
                    message.channel.send(mobileturret);
                }
            //antiairmech
                if (message.content.toLowerCase() === db.D) {
                    message.channel.send(antiairmech);
                }
            //lightminigunmech
                if (message.content.toLowerCase() === db.E) {
                    message.channel.send(lightminigunmech);
                } 
            //heavymech
                if(message.content.toLowerCase() === db.F){
                    message.channel.send(heavymech)
                }
            //minigunmech
                if(message.content.toLowerCase() === db.G){
                    message.channel.send(minigunmech)
                }
            //teslamech
                if (message.content.toLowerCase() === db.H) {
                    message.channel.send(teslamech);
                }  
            });
}