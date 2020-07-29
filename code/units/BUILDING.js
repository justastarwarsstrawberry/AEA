//Dont touch zone start
exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    client.setMaxListeners(0)
//Dont touch zone end










    const tlist = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Turret List')
	.setURL('')
	.setAuthor('Lemons#5444', 'https://i.imgur.com/9wxw0Sg.png')
	.setDescription("A list of all turrets to be typed and displayed (not case sensitive)")
	.addBlankField()
	.addField("Turrets", "T1Turret \n T2Turret \n T3Turret \n ArtilleryTurret")
    .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setTimestamp()
    .setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    

// \n Start a new line
    
    //T1turret
    const a1 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Turret T1')
	.setURL('')
	.attachFiles(['./resources/turrett1.png'])
	.setAuthor('justasweetstrawberry[🇵🇭]#5774', 'https://imgur.com/TlX2rnJ.png')
	.setDescription(" -long range and long reload")
	.addBlankField()
	.addField("Stats", "Price $500 \n Health 120 \n Attack Range 130 \n Move Speed 0 \n Build Speed 3.3s \n InIclass t1turretLand")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://turrett1.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');


     //T2turret
    const a2 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Turret T2')
	.setURL('')
	.attachFiles(['./resources/turrett2.png'])
	.setAuthor('justasweetstrawberry[🇵🇭]#5774', 'https://imgur.com/TlX2rnJ.png')
	.setDescription(" -Can only target ground units\n-Multiple upgrades available")
	.addBlankField()
	.addField("Stats", "Price $2000 \n Health 1100 \n Attack Range 250 \n Move Speed 0 \n Build Speed 32s \n InIclass t2gunLand")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://turrett2.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');





    //T3turret
    const a3 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Turret T3')
	.setURL('')
	.attachFiles(['./resources/turrett3.png'])
	.setAuthor('justasweetstrawberry[🇵🇭]#5774', 'https://imgur.com/TlX2rnJ.png')
	.setDescription(" -Can only target ground units\n-Multiple upgrades available")
	.addBlankField()
	.addField("Stats", "Price $12500 \n Health 3200 \n Attack Range 305 \n Move Speed 0 \n Build Speed 32s \n InIclass t3gunLand")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://turrett3.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');







         //Artyturret
     const a4 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Artillery turret')
	.setURL('')
	.attachFiles(['./resources/artilleryturret.png'])
	.setAuthor('justasweetstrawberry[🇵🇭]#5774', 'https://imgur.com/TlX2rnJ.png')
	.setDescription(" -Can only target ground units\n-Multiple upgrades available")
	.addBlankField()
	.addField("Stats", "Price $2500 \n Health 1100 \n Attack Range 360 \n Move Speed 0s \n Build Speed 32s \n InIclass t1arty")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://artilleryturret.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');








    const a5 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Turret flame')
	.setURL('')
	.attachFiles(['./resources/flameturret.png'])
	.setAuthor('justasweetstrawberry[🇵🇭]#5774', 'https://imgur.com/TlX2rnJ.png')
	.setDescription(" -Can only target ground units\n-Multiple upgrades available")
	.addBlankField()
	.addField("Stats", "Price $2000 \n Health 1100 \n Attack Range 250 \n Move Speed 3.3s \n Build Speed 32s \n InIclass t1flameLand")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://flameturret.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');













	//Dont touch zone start
    client.on('message', message => {
    //Dont touch zone end







    if (message.content.toLowerCase() === 't1turret') {
        if(message.author.bot) return;
        message.channel.send(a1);
    }


    if (message.content.toLowerCase() === 't2turret') {
        if(message.author.bot) return;
        message.channel.send(a2);
    }


    if (message.content.toLowerCase() === 't3turret') {
        if(message.author.bot) return;
        message.channel.send(a3);
    }


if (message.content.toLowerCase() === 'artilleryturret') {
        if(message.author.bot) return;
        message.channel.send(a4);
    }


    if (message.content.toLowerCase() === 'turrets' || message.content.toLowerCase() === 'turret') {
        message.channel.send(tlist);
    }








	//Dont touch zone start
        
    });
}
    //Dont touch zone end
