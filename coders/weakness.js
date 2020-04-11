exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    client.setMaxListeners(0)

    client.on('message', message => {
        //Weaknesses
        if(message.content.toLowerCase().startsWith('/wvs')) {

            if(message.content.toLowerCase().includes('heavyinterceptor')){
                message.reply('AmphibiousJet, or Interceptor')
            }

            if(message.content.toLowerCase().includes('grandslam')){
                message.reply('Interceptor, HeavyInterceptor, or T3SamTurret')
            }

            if(message.content.toLowerCase().includes('apache')){
                message.reply('Interceptor, HeavyInterceptor, AmphibiousJet, or SamTurret')
            }

            if(message.content.toLowerCase().includes('amphibiousjet')){
                message.reply('AmphibiousJet, or SamTurret')
            }
        }
    
    });

}
    