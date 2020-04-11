exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    client.setMaxListeners(0)

    client.on('message', message => {
        //Weaknesses
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
    