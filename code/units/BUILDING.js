//Dont touch Zone start
exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    client.setMaxListeners(0)
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
	
    client.on('message', message => {
        if (message.content.toLowerCase() === 'turrets' || message.content.toLowerCase() === 'turret') {
            message.channel.send(tlist);
        }














    });



}