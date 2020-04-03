exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    client.setMaxListeners(0)

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
        }
        if(Message.content.toLowerCase() === "/tip") {
            var flip = getRandomInt(1, 100);
            if (flip = 1) {
            message.reply('There’s 5 main aspects to RTS. Those are Speed, resources, map control, intel, and preparation.')
            } 
            if (flip = 2){
            message.reply('For most maps, resources are spread across the map, so having those mid points gives you a financial advantage.')
            }
            if (flip = 3){
            message.reply('It’s common for most players to rush the middle as soon as the match starts to conquer the middle, where usually most resource pools can be found.')
            }
            if (flip = 4){
                message.reply('Turrets are very helpful, but it would be unwise to rely solely on them. It’s best to have both turrets and units.')
            }
            if (flip = 5){
                message.reply('If you can afford it, it would be a big advantage to rush a T2 factory.')
            }
            if (flip = 6){
                message.reply('Paladin mechs are very good at fighting rocket turrets, and are fast enough to retreat if they are catching heavy fire.')
            }
            if (flip = 7){
                message.reply('Be aggressive, as constant pressure can fluster the enemy, and cause them to make mistakes.')
            }
            if (flip = 8){
                message.reply('Best way to find balance is to scout your enemy to see what they have, and make proper judgment calls to attack or defend.')
            }
            if (flip = 9){
                message.reply('Players love to drop ship units in your back door away from your front line, where there are minimal defenses.')
            }
            if (flip = 10){
                message.reply('The best defence is an air defense (Attack Jets/Heavy interceptors).')
            }    
            if (flip = 11){
                message.reply('If you don’t have +300 to +500 income by midgame, and it’s been a suspiciously quiet game so far... YOU. WILL. LOSE.')
            }    
            if (flip = 12){
                message.reply('The early mid game is usually where the most fighting for ground takes place.')
            }    
            if (flip = 13){
                message.reply('Credit factories are built from the Mech Engineer, and are like advanced power plants, but for money!(You are limited to 8)')
            }  
            if (flip = 14){
                message.reply('Credit factories dont nuke other team members stuff!')
            }  
            if (flip = 15){
                message.reply('It would be a good idea for someone in your team to build a “fuck pit” - Loaf™️ (a large mass of repair bays) to quickly build units that use nano.')
            }  
            if (flip = 16){
                message.reply('It would be a good idea for someone in your team to build a “fuck pit” - Loaf™️ (a large mass of repair bays) to quickly build units that use nano.')
            }  
        }
    


 
}
    