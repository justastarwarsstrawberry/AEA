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

const heavyinterceptor = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Heavy Interceptor')
	.setURL('')
	.attachFiles(['./resources/heavy_interceptor.png'])
	.setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
	.setDescription(" - Fast \n- Can attack air only \n- Heavily armed with shield \n- Shield weak vs lighnting")
	.addBlankField()
	.addField("Stats", "Price $1,200 \n Health 40 \n Attack Range 170 \n Move Speed 2.50 \n Build Speed 16.7s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://heavy_interceptor.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

const apache = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Apache Helicopter')
	.setURL('')
	.attachFiles(['./resources/apache_helicopter.png'])
	.setAuthor('Anubis#5471', 'https://imgur.com/RYFFWLt.png')
	.setDescription(" - Can attack land and air \n- Heavily armed, very light armor \n- Unloads hellfire, but slow reload after barrage ")
	.addBlankField()
	.addField("Stats", "Price $2,750 \n Health 220 \n Attack Range 200 \n Move Speed 1.80 \n Build Speed 10.8s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://apache_helicopter.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
    client.on('message', message => {

        if(message.content.toLowerCase().startsWith('/wvs')) {
            
            if(message.content.toLowerCase().includes('heavyinterceptor')){
                message.channel.reply('AmphibiousJet, or Interceptor')
            }

            if(message.content.toLowerCase().includes('grandslam')){
                message.channel.reply('Interceptor, or HeavyInterceptor, or T3SamTurret')
            }

            if(message.content.toLowerCase().includes('apache')){
                message.channel.reply('Interceptor, HeavyInterceptor, AmphibiousJet, or SamTurret')
            }

            if(message.content.toLowerCase().includes('amphibiousjet')){
                message.channel.reply('AmphibiousJet, or SamTurret')
            }
        }
    
    });

}
    