const { Client, Attachment, RichEmbed } = require('discord.js');
global.Discord = require('discord.js');
global.client = new Discord.Client();
//test deployment
const Sea = require('./coders/sea.js');
const Anubis = require('./coders/anubis.js');
const Darkest = require('./coders/land.js');
const N = require('./coders/Nword.js');
const Timer = require('./coders/timer.js');
client.setMaxListeners(0)
if(Timer && Client){
   		 Timer.code();
    		console.log('Timer loaded');
}

if(Anubis && Client){
   		 Anubis.code();
    		console.log('Anubis loaded');
}

if(Darkest && Client){
   		Darkest.code();
    		console.log('Land loaded');
}
if(Sea && Client){
   		Sea.code();
    		console.log('Sea loaded');
}
client.login(process.env.BOT_TOKEN);
//BOT_TOKEN is the Client Secret

client.once('ready', () => {
	console.log('Ready!');
});

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'AEA, Type /list',
	    type: "Listening"
        }
    });
});

client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(ch => ch.name === 'general');
    if (!channel) return;
    channel.send(`Welcome to AEA, ${member}!`);
    //const role = guild.roles.find(role => role.name === 'Member');
    //const member = message.mentions.members.first();
    //member.addRole(role);
});

const talkedRecently = new Set();
// Land units
const clist = new RichEmbed()
	.setColor('#1500f7')
	.setTitle('Commands')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.addField('/random', '1v1, 2v2, 2v3, 3v3, 4v4, 5v5', false)
	.addField('/flipcoin', 'Heads or Tails?', false)
	.addField('/list', 'Land, Air, Water, Exp', false)
	.addField('<unit>', 'name of the unit', false)
	.addField('<time>', 'amount of time max: 10m', false)
	.setDescription('Lists all comands \nassociated with the bot')
	.setTimestamp()
	.setFooter('More Soon!', 'https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128');
const llist = new RichEmbed()
	.setColor('#1500f7')
	.setTitle('Land Units List')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.addField('Land Units', 'Artillery \n Buffalo \n CombatEngineer  \n Comet \n DemoTruck \n HeavyTank \n HoundAPC \n HeavyArtillery \n HoverTank \n HeavyHoverTank \n LaserTank \n Lynx \n MissileTank \n PlasmaSniper \n SiegeTank \n Scout \n Saber \n Tank \n Typhoon \n TeslaTank \n Zephyr', false)
	.setDescription('Lists all land units')
	.setTimestamp()
	.setFooter('More Soon!', 'https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128');
const alist = new RichEmbed()
	.setColor('#1500f7')
	.setTitle('Air Units List')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.addField('Air Units', 'Apache Helicopter \n Amphibious Jet \n Attack Jet \n Bomber \n Dropship \n Gunship \n Grand Slam Bomber \n Heavy Interceptor \n Heavy Missile Aircraft \n Helicopter \n Interceptor \n Kirov \n Light Gunship \n Missile Airship \n MAE-1 \n Phantom Scout \n S1 \n S2 \n Swallow Tail', false)
	.setDescription('Lists all air units')
	.setTimestamp()
	.setFooter('More Soon!', 'https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128');
const wlist = new RichEmbed()
	.setColor('#1500f7')
	.setTitle('Sea Units List')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.addField('Sea Units', 'Anti Air Boat \nBattle Cruiser \nBuilder Ship \nCorvette \nDestroyer \nDreadnought \nFrigate \nGunboat \nHeavy Missile Ship \nLRS \nThunder Head', false)
	.setDescription('Lists all sea units')
	.setTimestamp()
	.setFooter('More Soon!', 'https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128');
const EXlist = new RichEmbed()
	.setColor('#1500f7')
	.setTitle('Experimental Units List')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.addField('Experimental Units', 'Experimental Spider \nExperimental Mech \nMothership \nNaval Carrier', false)
	.setDescription('Lists all experimental units')
	.setTimestamp()
	.setFooter('More Soon!', 'https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128');
const mlist = new RichEmbed()
	.setColor('#1500f7')
	.setTitle('Mech Units List')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.addField('Mech Units', 'Mechs Mechs and more', false)
	.setDescription('Lists all mech units')
	.setTimestamp()
	.setFooter('More Soon!', 'https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128');



client.on('message', (message, user) => {


if(message.content == '/muteall' && message.member.roles.some(role => role.name === 'Developer')){
        let channel = message.member.voiceChannel;
        for (let member of channel.members) {
            member[1].setMute(true)
           
        }
    }

    else
    {
        // do nothing
    }

    if(message.content == '/unmuteall' && message.member.roles.some(role => role.name === 'Developer')){
            let channel = message.member.voiceChannel;
            for (let member of channel.members) {
                member[1].setMute(false)
               
            }
        }
    
        else
        {
            // do nothing
        }
    if(message.content == '/list'){
	message.channel.send(clist);
    	}
        else
        {
            // do nothing
        }
    if(message.content == '/list Land' || message.content == '/list land'){
	message.channel.send(llist);
    	}
        else
        {
            // do nothing
        }
    if(message.content == '/list Mech' || message.content == '/list mech'){
	message.channel.send(mlist);
    	}
        else
        {
            // do nothing
        }
    if(message.content == '/list Air' || message.content == '/list air'){
	message.channel.send(alist);
    	}
        else
        {
            // do nothing
        }
    if(message.content == '/list Water' || message.content == '/list water'){
	message.channel.send(wlist);
    	}
        else
        {
            // do nothing
        }
    if(message.content == '/list Exp' || message.content == '/list exp'){
	message.channel.send(EXlist);
    	}
        else
        {
            // do nothing
        }



    if (message.content == 'stop' && client.users.get("242687584373964801") && message.member.roles.some(role => role.name === 'Developer')){
    //process.exit();
    }
    else{
        // Do notta
    }


    const attachment = new Attachment('./resources/NuclearDrone.png');

    if (message.content.includes('bruh') || message.content.includes('Bruh')) {
   	message.channel.send(attachment);
    }




});
