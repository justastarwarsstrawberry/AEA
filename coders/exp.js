exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    const fs = require("fs");
    client.setMaxListeners(0)

    const e1 = new Discord.RichEmbed()  
        .setColor('#1500f7')
        .setTitle('Fire bee')
        .setURL('')
        .attachFiles(['./resources/firebee.png'])
        .setAuthor('Lemons#5444', 'https://imgur.com/1ir1AqD.png')
        .setDescription(" - Heavily armed \n - Can attack ground \n - Medium air attack \n - Needs to reload after firing \n - Self repair")
        .addBlankField() 
        .addField("Stats", "Price $12,000 \n Health 4,900 \n Attack Range 210 \n Move Speed 1.10 \n Build Speed 24.7s \n PrimaryDamage 22 \n SecondaryAreaDamage/Radius 45/40 \n InIclass  c_fireBee")
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://firebee.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
        
    const e2 = new Discord.RichEmbed()  
        .setColor('#1500f7')
        .setTitle('X-66 Mammoth Tank')
        .setURL('')
        .attachFiles(['./resources/expmam.png'])
        .setAuthor('Lemons#5444', 'https://imgur.com/1ir1AqD.png')
        .setDescription(" - Very heavily armored \n - Armed with twin cannons and rocket launchers \n - Can attack ground and air \n - Can self repair")
        .addBlankField() 
        .addField("Stats", "Price $7,500 \n Health 2,800 \n Attack Range 220 \n Move Speed 0.50 \n Build Speed 20.8s \n PrimaryAreaDamage/Radius 60/50 \n SecondaryAreaDamage/Radius 20/65 \n InIclass specMammothTank")
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://expmam.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
        
    const e3 = new Discord.RichEmbed()  
        .setColor('#1500f7')
        .setTitle('Experimental Tank')
        .setURL('')
        .attachFiles(['./resources/exptank.png'])
        .setAuthor('Lemons#5444', 'https://imgur.com/1ir1AqD.png')
        .setDescription(" - Very heavily armored \n - Armed with quad cannons \n - Can attack ground \n - Light air attack")
        .addBlankField() 
        .addField("Stats", "Price $16,800 \n Health 6,000 \n Attack Range 310 \n Move Speed 0.40 \n Build Speed 60.0s \n PrimaryAreaDamage/Radius 60/65 \n SecondaryDamage 75 \n InIclass cc_experimentalTank")
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://exptank.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    
    const e4 = new Discord.RichEmbed()  
        .setColor('#1500f7')
        .setTitle('Experimental Sam Tank')
        .setURL('')
        .attachFiles(['./resources/expsamtank.png'])
        .setAuthor('Lemons#5444', 'https://imgur.com/1ir1AqD.png')
        .setDescription(" - Very heavily armed and armored\n - Armed with anti-air missles and flak turret\n - Can attack air only")
        .addBlankField() 
        .addField("Stats", "Price $28,000 \n Health 6,000 \n Max Attack Range 350 \n Move Speed 0.40 \n Build Speed 60.0s \n PrimaryDamage 110 \n SecondaryAreaDamage/Radius 160/120 \n InIclass experimentalSamTank")
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://expsamtank.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
        
    const e5 = new Discord.RichEmbed()  
        .setColor('#1500f7')
        .setTitle('Science Vessel')
        .setURL('')
        .attachFiles(['./resources/scienceves.png'])
        .setAuthor('Lemons#5444', 'https://imgur.com/1ir1AqD.png')
        .setDescription(" - Constructs and repairs experimental units\n - Can shoot a quantum torpedo when energy is full \n - Builds expensive quantum turrets \n - Goes nuclear on death (if nukes are enabled) \n - Consumes credits")
        .addBlankField() 
        .addField("Stats", "Price $35,000 \n Health 1,000 \n Max Attack Range 250 \n Move Speed 1.20 \n Build Speed 83.3s \n PrimaryAreaDamage/Radius 400/180 \n InIclass scienceVessel")
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://scienceves.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

    const e6 = new Discord.RichEmbed()  
        .setColor('#1500f7')
        .setTitle('Shielded Hovertank')
        .setURL('')
        .attachFiles(['./resources/exphovertank.png'])
        .setAuthor('Lemons#5444', 'https://imgur.com/1ir1AqD.png')
        .setDescription(" - Very heavily armed with shield\n - Can attack ground and air \n - Able to move over water")
        .addBlankField() 
        .addField("Stats", "Price $21,000 \n Health 3,500 \n Shield 5,000 \n Attack Range 180 \n Move Speed 0.60 \n Build Speed 83.3s \n PrimaryDamage Unknown \n InIclass Unknown")
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://exphovertank.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
        
    const e7 = new Discord.RichEmbed()  
        .setColor('#1500f7')
        .setTitle('Nuclear Drone')
        .setURL('')
        .attachFiles(['./resources/NuclearDrone.png'])
        .setAuthor('Lemons#5444', 'https://imgur.com/1ir1AqD.png')
        .setDescription(" - Nuclear drone, an unmanned shuttle that has 50T nuclear warhead inside of it's hull.\n - Easy to destroy\n- Good for air spam control\n - Can only have 2 built at a time.\n- Bruh.")
        .addBlankField() 
        .addField("Stats", "Price $28,000 \n Health 2500 \n Attack Range 9 \n Move Speed 1.75 \n Build Speed 21.3s \n PrimaryAreaDamage/Radius 2500/225 \n InIclass NuclearDrone")
        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
        .setImage('attachment://NuclearDrone.png')
        .setTimestamp()
        .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
        





    client.on('message', message => {
            //firebee
            if (message.content.toLowerCase() === 'firebee') {
                if(message.author.bot) return; 
                message.channel.send(e1);
            }
            //mammoth tank
            if (message.content.toLowerCase() === 'mammothtank') {
                if(message.author.bot) return; 
                message.channel.send(e2);
            }
            //Experimental Tank
            if (message.content.toLowerCase() === 'experimentaltank' || message.content.toLowerCase() === 'exptank') {
                if(message.author.bot) return; 
                message.channel.send(e3);
            }
             //Experimental Sam Tank
             if (message.content.toLowerCase() === 'experimentalsamtank' || message.content.toLowerCase() === 'expsamtank') {
                if(message.author.bot) return; 
                message.channel.send(e4);
            }   
             //Science Vessel
             if (message.content.toLowerCase() === 'sciencevessel') {
                if(message.author.bot) return; 
                message.channel.send(e5);
            } 
             //Exp hovertank
             if (message.content.toLowerCase() === 'shieldedhovertank' ) {
                if(message.author.bot) return; 
                message.channel.send(e6);
            }      
             //Exp hovertank
             if (message.content.toLowerCase() === 'nucleardrone') {
                if(message.author.bot) return; 
                message.channel.send(e7);
            }        
});
  
  
  
  
//________________Dont touch Zone start
}
//________________Dont touch Zone end
