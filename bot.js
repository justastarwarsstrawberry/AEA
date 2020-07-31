

try{
const { Client, Attachment, RichEmbed } = require('discord.js');
global.Discord = require('discord.js');
global.client = new Discord.Client();
client.setMaxListeners(0)








const Imports = require('./code/imports.js');
  if(Imports && Client){
   		Imports.code();
    		console.log('Loaded imports');
  }

client.login(process.env.BOT_TOKEN);
//BOT_TOKEN is the Client Secret


function catchErr (err, message){
	client.channels.get("738627399658504255").send("ERROR ```" + err + "```")
}





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


//test


function resetBot(channel) {
    channel.send('Restarting...')
    .then(msg => client.destroy())
    .then(() => client.login(process.env.BOT_TOKEN));
}

const talkedRecently = new Set();
const clist = new RichEmbed()
	.setColor('#1500f7')
	.setTitle('Commands')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.addField('/AEAElite', 'Assigns the AEAElites Role for anyone who wishes it... \n Check #📣-announcements-📣 for more details', false)
	.addField('+<Suggestion>', 'Puts a suggestion up for a vote in ❌-votes-✅', false)
	.addField('/list', 'Land, Air, Water, Buildings or Exp \n Lists all the units In a specified category', false)
	.addField('<unit>', 'name of the unit (no spaces, capitals dont matter) \n Lists the stats of a specified unit ', false)
	.addField('/wvs <unit>', 'Gives weaknesses of a specified unit (no spaces, capitals dont matter)', false)
	.addField('/tipme', 'Gives Tips For AEA', false)
	//.addField('/teams2', 'A team organizer (still needs testing)', false)
	.addField('/', '1v1, 2v2, 2v3, 3v3, 4v4, 5v5 \n Gives a random map based on map type', false)
	.addField('/flipcoin', 'Heads or Tails?', false)
	.addField('<time>', 'Set a timer for an amount of time \n (Max: 10m)', false)
const aelist = new RichEmbed()
	.setColor('#1500f7')
	.setTitle('Admin Commands')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.addField('/muteall', ' - Dev Team Alpha Only', false)
	.addField('/unmuteall', '- Dev Team Alpha Only', false)
	.addField('/purge', ' - Deletes 100 messages in the past', false)
	.addField('/stop', ' - Stops the bot, Lemons Only', false)

	//.addField('a', '<announcementtext>', false)
	.setDescription('Lists all comands associated with the bot')
	.setTimestamp()
	.setFooter('More Soon!', 'https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128');
const llist = new RichEmbed()
	.setColor('#1500f7')
	.setTitle('Land Units List')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.addField('Land Units', 'Artillery \n Achilles \n Buffalo \n CombatEngineer  \n Comet \n DemoTruck \n HeavyTank \n HeavyArtillery \n HoverTank \n HeavyHoverTank \n LaserTank \n MissileTank \n PlasmaSniper \n SiegeTank \n Scout \n Saber \n Tank \n Typhoon \n TeslaTank \n Zephyr', false)
	.setDescription('Lists all land units')
	.setTimestamp()
	.setFooter('More Soon!', 'https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128');
const alist = new RichEmbed()
	.setColor('#1500f7')
	.setTitle('Air Units List')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.addField('Air Units', 'ApacheHelicopter \n Amphibious Jet \n AttackJet \n Bomber \n Dropship \n Gunship \n GrandSlamBomber \n HeavyInterceptor \n HeavyMissileAircraft \n Helicopter \n Interceptor \n Kirov \n LightGunship \n MissileAirship \n MAE-1 \n PhantomScout \n S-1 \n S-2 \n SwallowTail', false)
	.setDescription('Lists all air units')
	.setTimestamp()
	.setFooter('More Soon!', 'https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128');
const wlist = new RichEmbed()
	.setColor('#1500f7')
	.setTitle('Sea Units List')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.addField('Sea Units', 'AntiAirBoat \nAmphibiousWarship \nAttackSubmarine \nBattleCruiser\nBattleship \nCorvette \nDestroyer \nDreadnought \nFrigate \nGunboat \nHeavyMissileShip \nHeavyBattleship \nHeavysub \nLRS \nMissileship \nNautilus \nNavalCarrier \nReconsub \nSelenium \nTargetsub \nThunderHead', false)
	.setDescription('Lists all sea units')
	.setTimestamp()
	.setFooter('More Soon!', 'https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128');
const EXlist = new RichEmbed()
	.setColor('#1500f7')
	.setTitle('Experimental Units List')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.addField('Experimental Units', 'Firebee \n Mammothtank \nExperimentalTank \nExperimentalSamTank \n ScienceVessel \n ShieldedHovertank \n Nukedrone \n Mothership \n ExperimentalMech \n ExperimentalSpider \n NavalCarrier \n FlyingFortress', false)
	.setDescription('Lists all experimental units')
	.setTimestamp()
	.setFooter('More Soon!', 'https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128');
const blist = new RichEmbed()
	.setColor('#1500f7')
	.setTitle('Building Lists')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.addField('Building List Commands', '/list', false)
	.setDescription('Lists all Building command lists')
	.setTimestamp()
	.setFooter('More Soon!', 'https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128');


client.on('message', (message, user) => {
if(message.content === '/purge' && message.member.roles.some(role => role.name === 'Developer')){

	var numberofmessages = 100;
	let messagecount = parseInt(numberofmessages);
	message.channel.fetchMessages({ limit: messagecount })
	  .then(messages => message.channel.bulkDelete(messages));

	}
	if(message.content === '/purge' && message.member.roles.some(role => role.name === 'Dev Team Alpha')){

		var numberofmessages = 100;
		let messagecount = parseInt(numberofmessages);
		message.channel.fetchMessages({ limit: messagecount })
		  .then(messages => message.channel.bulkDelete(messages));
	
		}
		if(message.content === '/purge' && message.member.roles.some(role => role.name === 'Admin')){

			var numberofmessages = 100;
			let messagecount = parseInt(numberofmessages);
			message.channel.fetchMessages({ limit: messagecount })
			  .then(messages => message.channel.bulkDelete(messages));
		
			}
if(message.content == "/give" && client.users.get("242687584373964801") ){
	message.guild.fetchMember('242687584373964801').then(member => {
		member.addRole('692034330108887123');	
	});
}



//If anything
if(message.content){
	if(message.author.bot) return;  
			message.member.addRole('620321947737260063');	
}




//no fix?
if(message.content == '/muteall' && message.member.roles.some(role => role.name === 'Dev Team Alpha')){
		let channel = message.member.voiceChannel;
		if(!channel){
        for (let member of channel.members) {
            member[1].setMute(true)
           
		}
	}
}

else
    {
        // do nothing
    }

    if(message.content == '/unmuteall' && message.member.roles.some(role => role.name === 'Dev Team Alpha')){
			let channel = message.member.voiceChannel;
			if(!channel){
            for (let member of channel.members) {

                member[1].setMute(false)
				
			}
		}
    }

	else
        {
            // do nothing
        }
    if(message.content == '/stop' && client.users.get("242687584373964801")){
		message.channel.send('Shutting down...');
		resetBot(message.channel);

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
	if(message.content == '/list Admin' || message.content == '/list admin'){
			message.channel.send(aelist);
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
	if(message.content == '/list Buildings' || message.content == '/list buildings'){
			message.channel.send(blist);
		}
		else
		{
			// do nothing
		}
/*
		const logger = require('discord-chat-logger');
		const fs = require("fs");
		logger.connect("Logging...", process.env.BOT_TOKEN );
		//logger.logPm("./logs/", true,"587367764474462210");
		//logger.logGroup("./logs/", false,"587367764474462210");
		logger.logServer("./logs/", false,"587367764474462210");
*/

    const attachment = new Attachment('./resources/NuclearDrone.png');

    if (message.content.includes('bruh') || message.content.includes('Bruh')) {
   	message.channel.send(attachment);
    }

Error


});
}
catch(err){
 catchErr(err, message);
}