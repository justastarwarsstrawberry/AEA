exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    client.setMaxListeners(0)

const amphib = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Amphibious Jet')
	.setURL('')
	.attachFiles(['./resources/amphibious_jet.png'])
	.setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
	.setDescription(" - Shoots lightning while in air or underwater \n- Lightning weak vs grounded buildings")
	.addBlankField()
	.addField("Stats", "Price $1,800 \n Health 530 \n Attack Range 170 \n Move Speed 1.40 \n Build Speed 16.7s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://amphibious_jet.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');




    client.on('message', message => {

        if(message.content.toLowerCase().startsWith('/wvs')) {
            if(message.content.includes('heavyinterceptor')){
                message.channel.send(amphib);
            }
        }
    
    });

}
    