


const { Client, Attachment, RichEmbed } = require('discord.js');
const { ErelaClient } = require("erela.js");
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
	client.channels.get("738108973651066890").send("ERROR ```" + err + "```")
}




const nodes = [{
    host: "localhost",
    port: 2333,
    password: "youshallnotpass",
}]
 
// Ready event fires when the Discord.js client is ready.
// Use once so it only fires once.
client.once("ready", () => {
    console.log("Ready!")
    // Initializes an Erela client with the Discord.js client and nodes.
    client.music = new ErelaClient(client, nodes);
    // Listens to events.
    client.music.on("nodeConnect", node => console.log("New node connected"));
    client.music.on("nodeError", (node, error) => console.log(`Node error: ${error.message}`));
    client.music.on("trackStart", (player, track) => player.textChannel.send(`Now playing: ${track.title}`));
    client.music.on("queueEnd", player => {
        player.textChannel.send("Queue has ended.")
        client.music.players.destroy(player.guild.id);
    });
});
 



client.on("message", async message => {
    if (message.content.toLowerCase().startsWith("/play")) {
        const {
            voiceChannel 
        } = message.member;
        // Note: for discord.js master you need to use
        // const { channel } = message.member.voice;
 
        // Spawns a player and joins the voice channel.
        const player = client.music.players.spawn({
            guild: message.guild,
            voiceChannel: voiceChannel,
            textChannel: message.channel,
        });
 
        // Searches Youtube with your query and the requester of the track(s).
        // Returns a SearchResult with tracks property.
        const res = await client.music.search(message.content.slice(6), message.author);
 
        // Adds the first track to the queue.
        player.queue.add(res.tracks[0]);
        message.channel.send(`Enqueuing track ${res.tracks[0].title}.`)
 
        // Plays the player (plays the first track in the queue).
        // The if statement is needed else it will play the current track again
        if (!player.playing) player.play();
    }
});



//status
client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'AEA, Type /list',
	    type: "Listening"
        }
    });
});




//welcome message
client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(ch => ch.name === 'general');
    if (!channel) return;
    channel.send(`Welcome to AEA, ${member}!`);
});






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
        .addField('/how to beat 101', 'gives list of the players on how to beat them (wip) \n (ex /horseman)', false)
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
const mlist = new RichEmbed()
	.setColor('#1500f7')
	.setTitle('Land Units List')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.addField('Mech Units', 'ArtilleryMech \n AntiAirMech \n AssaultMech \nBasicMech \n FlameMech \n HeavyMech \n HeavyArtilleryMech \n HeavyMobileTurret \n LightMinigunMech \n MobileTurret \n MinigunMech\n PaladinMech \n PlasmaMech \n RocketMech \n TelsaMech', false)
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
	.addField('Experimental Units', 'Firebee \n Apocolypse Tank \nExperimentalTank \nExperimentalSamTank \n ScienceVessel \n ShieldedHovertank \n Nukedrone \n Mothership \n ExperimentalMech \n ExperimentalSpider \n NavalCarrier \n FlyingFortress', false)
	.setDescription('Lists all experimental units')
	.setTimestamp()
	.setFooter('More Soon!', 'https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128');
const blist = new RichEmbed()
	.setColor('#1500f7')
	.setTitle('Building Lists')
	.setURL('')
	.setAuthor('SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.addField('Building List Commands', '/list turrets', false)
	.setDescription('Lists all Building command lists')
	.setTimestamp()
	.setFooter('More Soon!', 'https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128');


client.on('message', (message, user) => {
try{
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



/*
Not necessary
if(message.content == "/give" && client.users.get("242687584373964801") ){
	message.guild.fetchMember('242687584373964801').then(member => {
		member.addRole('692034330108887123');	
	});
}
*/

//If anything
if(message.content){
	if(message.author.bot) return;  
			message.member.addRole('620321947737260063');	
}


if(message.content == '/muteall' && message.member.roles.some(role => role.id === '620321354977247272')){
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

    if(message.content == '/unmuteall' && message.member.roles.some(role => role.id === '620321354977247272')){
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
    if(message.content.toLowerCase() == '/list mech' || message.content.toLowerCase() == '/list mechs'){
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

	}
	catch(err){
		catchErr(err, message);
	   }
	});

