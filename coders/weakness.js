exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    client.setMaxListeners(0)

    client.on('message', message => {
        
        if(message.content.toLowerCase().startsWith('/wvs')) {

            if(message.content.toLowerCase().includes('heavyinterceptor')){
                message.reply('Heavy interceptors can be countered with units that shoot lightning such as amphibious jets that have damage multipliers against shields')
            }

            if(message.content.toLowerCase().includes('kirov')){
                message.reply('Kirovs are a very slow but deadly powerful air unit, HeavyInterceptors can counter this unit perfectly. Sam turrets of any type yeild no protection as the kirov ALWAYS gets what it wants')
            }

            if(message.content.toLowerCase().includes('attackjet')){
                message.reply('Attack jets can only attack ground. So any type of anti-air air units can easily take them out, so HeavyInterceptors or even Interceptors will do the trick')
            }

            if(message.content.toLowerCase().includes('grandslam')){
                message.reply('Grand slams are easily countered with a large mass of heavy interceptors, or a line of at least T3 Sam Turrets')
            }

            if(message.content.toLowerCase().includes('apachehelicopter')){
                message.reply('Apache Helicopter are easily counterable from any type of air unit that can attack air, such as the Interceptor')
            }

            if(message.content.toLowerCase().includes('amphibiousjet')){
                message.reply('The Amphibious Jet can be countered easily with t2 sam turrets and other Amphibious Jets, they are not so easily countered while underwater')
            }
            
            if(message.content.toLowerCase().includes('seigetank')){
                message.reply('The seigetank is a powerful land unit and can be countered by large amounts of air, and any long range turrets')
            }

            if(message.content.toLowerCase().includes('achilles')){
                message.reply('The achilles is long ranged tank that can deal large amounts of damage to turret lines. So any air units such as Apachehelicopters or attackjets can take them out as they have no air defence')
            }
            
            if(message.content.toLowerCase().includes('heavyhovertank')){
                message.reply('The heavyhovertank is a medium armored low damage unit that when in large groups can be deadly. Any type of air and long range turret can kill them')
            }
            
            if(message.content.toLowerCase().includes('thunderhead')){
                message.reply('Thunderheads can attack from a far range. Can be countered easily with air unit.')
            }

            if(message.content.toLowerCase().includes('heavymissileship')){
                message.reply('HeavyMissileShip can cause large amounts of damage to air and land, however large amounts of air can counter')
            }
            //Edited counters
        }
    
    });

}
    