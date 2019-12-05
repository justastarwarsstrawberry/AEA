const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, Attachment } = require('discord.js');

client.login(process.env.BOT_TOKEN);
//BOT_TOKEN is the Client Secret

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', (message) => {
if(message.content == '/muteAll' && message.member.roles.some(role => role.name === 'Developer') && client.users.get("242687584373964801")){
        let channel = message.member.voiceChannel;
        for (let member of channel.members) {
            member[1].setMute(true)
           
        }
    }

    else
    {
        // do nothing
    }
});

client.on('message', (message) => {
    if(message.content == '/unmuteAll' && message.member.roles.some(role => role.name === 'Developer')){
            let channel = message.member.voiceChannel;
            for (let member of channel.members) {
                member[1].setMute(false)
               
            }
        }
    
        else
        {
            // do nothing
        }
});

client.on('message', (message) => {
    if (message.content == 'stop' && client.users.get("242687584373964801") && message.member.roles.some(role => role.name === 'Developer')){
    process.exit();
    }
    else{
        // Do notta
    }
});

client.on('message', (message) => {
    if (message.content.startsWith('/kick') && client.users.get("242687584373964801")) {
    const user = message.mentions.users.first();
    if (user){
    const member = message.guild.member(user);
    if (member){
    member.kick('Kicked by Austin').then(() => {
    // We let the message author know we were able to kick the person
    message.reply(`Successfully kicked ${user.tag}`);
                });
            }
        }
    }
});

client.on('message', (message) => {
    if (message.content.startsWith('/kick') && client.users.get("287608141191970817")) {
    const user = message.mentions.users.first();
    if (user){
    const member = message.guild.member(user);
    if (member){
    member.kick('Kicked by Austin').then(() => {
    // We let the message author know we were able to kick the person
    message.reply(`Successfully kicked ${user.tag}`);
                });
            }
        }
    }
});

client.on('message', message => {
    const attachment = new Attachment('./resources/NuclearDrone.png');

    if (message.content === 'bruh') {
    message.channel.send(attachment);
    }
});

client.on('message', message => {
    let voiceChannel = message.member.voiceChannel;
    if (message.content === 'bruh') return voiceChannel.join(true).then(connection => {
        const dispatcher = connection.playFile('./resources/bruh.wav');
    })
});

client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find(ch => ch.name === 'general');
    if (!channel) return;
    channel.send(`Welcome to AEA, ${member}!`);
    //const role = guild.roles.find(role => role.name === 'Member');
    //const member = message.mentions.members.first();
    //member.addRole(role);
});


//#############################Units############################################
client.on('message', message => {
    if (message.content === 'Mothership' ||  message.content === 'mothership') {

        message.reply(`
        Mothership
        - Ultimate Carrier
        - Armed with hellfire cannons and 
          missile launchers
        - Built in fabricator
        - Carries 16 Units
        - Goes nuclear on death
        Price $150,000
        Health 15,000
        Attack Range 320
        Move Speed 0.65
        Build Speed 123.8s`);
    }
});
client.on('message', message => {
    if (message.content === 'Titan' ||  message.content === 'titan') {

        message.reply(`
        Titan
        - Advanced heavy seige mech
        - Strong ground attack with long range
        - Gatling anti-tank cannon
        - Drum-fed grenade launcher
        - Guided missiles
        - Cannot fit in air transports
        - Goes nuclear on death
        Price $65,000
        Health 12,000
        Shield 8,000
        Attack Range 350
        Move Speed 0.4
        Build Speed Varies`);
    }
});
client.on('message', message => {
    if (message.content === 'Naval Carrier' ||  message.content === 'naval carrier' || message.content === 'navalcarrier') {

        message.reply(`
        Naval Carrier
        - Experimental Naval Carrier
        - Can make Air and Naval units
        - Built in fabricator
        - Carries 16 Units
        - Goes nuclear on death
        - Can only have 5 at a time

        Price $ 250,000
        Health 7,500
        Attack Range 350
        Move Speed 0.45
        Build Speed 111.1s`);
    }
});
client.on('message', message => {
    if (message.content === 'King Kriptor' ||  message.content === 'king kriptor' || message.content === 'king Kriptor' || message.content === 'King kriptor' || message.content === 'kriptor King') {

    message.reply(`
        King Kriptor
        - Very heavily armed and armored but slow 
		- Heavy AOE cannons for ground attack 
		- Powerful shoulder mounted A.A turrets
		- Can move over water -Can self-repair 
        - Goes nuclear on death (if nukes are enabled)
        
		Price $175,000
        Health 20,000
		Attack Range 290
        Speed: 0.30
		Build Speed 124.6s`);
    }
});

client.on('message', message => {
    if (message.content === 'Experimental Mech' ||  message.content === 'experimental mech' || message.content === 'Experimental mech' || message.content === 'experimental Mech' || message.content === 'Mech Experimental') {

    message.reply(`
                Experimental Mech
                - Very heavily armed and armored 
		- Can attack ground and light air 
		- Sub attack when over water 
		- Very slow 
		- Can self-repair 
		- Can move over water
		Price $125,000
                Health 15,000
		Attack Range 310
                Speed: 0.30
		Build Speed 92.4s`);
    }
});

client.on('message', message => {
    if (message.content === 'Experimental Spider' ||  message.content === 'experimental spider' || message.content === 'Experimental spider' || message.content === 'experimental Spider' || message.content === 'Spider Experimental') {

        message.reply(`
                Experimental Spider
                - Support unit 
		- Laser defense 
		- Built in fabricator 
		- Can build/repair units and buildings 
		- Cannot fit in transports 
		- Can build powerful experimentals 
		- Can only have 5 built at once 
		- Goes nuclear on death
		Price $70,000
                Health 10,000
		Attack Range 250
                Speed: 0.30
		Build Speed 83.3s`);
    }
});

client.on('message', message => {
    if (message.content === 'Experimental Gunship' ||  message.content === 'experimental gunship' || message.content === 'Experimental gunship' || message.content === 'experimental Spider' || message.content === 'Gunship Experimental') {

          message.reply(`
                Experimental Gunship
                - Very heavily armed and armored 
                - Slow 
                - VERY powerful Ground attack 
                - Decent anti-air 
                - Can self-repair
		Price $250,000
                Health 24,000
		Attack Range 250
                Speed: 0.80
		Build Speed 143.8s`);
    }
});
client.on('message', message => {
    if (message.content === 'Phantom scout' ||  message.content === 'Phantomscout' || message.content === 'phantomScout' || message.content === 'phantom Scout' || message.content === 'phantom scout') {

        message.reply(`
        Phantom Scout
        - Stealthy scouting drone
        - Very light attack
        - Has to be manually ordered to attack
        - Can turn invisible for 13 seconds at a time

        Price $5,000
        Health 540
        Attack Range 110
        Move Speed 2.0
        Build Speed 23.8s`);
    }
});
client.on('message', message => {
    if (message.content === 'Apache Helicopter' || message.content === 'Apachehelicopter' || message.content === 'apacheHelicopter' || message.content === 'apache Helicopter' || message.content === 'Apache helicopter') {

        message.reply(`
        Apache Helicopter
        - Can attack Land and Air
        - Heavily armed, very light armour
        - Unloads hellfire, but slow reload after barrage

        Price $2,750
        Health 220
        Attack Range 200
        Move Speed  1.8
        Build Speed 10.8s`);
    }
});
client.on('message', message => {
    if (message.content === 'Nautilus' ||  message.content === 'nautilus') {

        message.reply(`
        Nautilus
        - Heavily armed and armored
        - Can attack ships
        - Can surface and walk on land
        - Can attack land and air when surfaced
        - Can build a few attack units
        - Can launch a scout builder crab
        - Can transport 10 unit slots

        Price $16,000
        Health 5,000
        Attack Range 240
        Move Speed  0.45
        Build Speed 55.6s`);
    }
});
client.on('message', message => {
    if (message.content === 'Selenium' ||  message.content === 'selenium') {

        message.reply(`
        Selenium
        - Mammoth Submarine
        - Slow but armored, heavily armed
        - Can surface and hit air/land

        Price $21,000
        Health 3,200
        Attack Range 290
        Move Speed  0.8
        Build Speed 55.6s`);
    }
});
client.on('message', message => {
    if (message.content === 'Thunderhead' ||  message.content === 'thunderhead' || message.content === 'Thunder head' || message.content === 'thunder head' || message.content === 'thunder Head' || message.content === 'Thunder head') {

        message.reply(`
        Thunder Head
        - Long range artillery
        - Single shot slow reload
        - Weak armour
        - Light air defense

        Price $6,500
        Health 1,500
        Attack Range 420
        Move Speed  0.8
        Build Speed 55.6s`);
    }
});
client.on('message', message => {
    if (message.content === 'Typhon' ||  message.content === 'Typhoon' || message.content === 'typhoon') {

        message.reply(`
        Typhoon
        - Landing assault craft
        - Fast
        - Very light Mounted machine-guns
        - Carries 4 units

        Price $2,250
        Health 300
        Attack Range 140
        Move Speed  1.6
        Build Speed 33.3s`);
    }
});
client.on('message', message => {
    if (message.content === 'Anti Air Ship' ||  message.content === 'Anti air ship' || message.content === 'anti air ship' || message.content === 'anti air Ship') {

        message.reply(`
        Anti Air Ship
        - Equipped with an Anti Air Gun
        - Weak armour 

        Price $750
        Health 200
        Attack Range 190
        Move Speed  0.9
        Build Speed 6.7s`);
    }
});
client.on('message', message => {
    if (message.content === 'battleship cruiser' ||  message.content === 'Battle cruiser' || message.content === 'battle cruiser' || message.content === 'battlecruiser') {

        message.reply(`
        Battle Cruiser
        - Heavily armoured
        - Can attack attack land, air, and subs
        - Slow firing rate 

        Price $9,000
        Health 7,000
        Attack Range 330
        Move Speed  0.5
        Build Speed 87.7s`);
    }
});
client.on('message', message => {
    if (message.content === 'battleship' ||  message.content === 'Battleship' || message.content === 'battle ship' || message.content === 'battleship' || message.content === 'BattleShip') {

        message.reply(`
        Battleship
        - Medium range land attack
        - Cannot attack air or subs

        Price $1,500
        Health 1,200
        Attack Range 240
        Move Speed  0.8
        Build Speed 41.7s`);
    }
});
client.on('message', message => {
    if (message.content === 'buildership' ||  message.content === 'Buildership' || message.content === 'builderShip' || message.content === 'builder Ship' || message.content === 'Builder ship') {

        message.reply(`
        Builder Ship
        - It builds... 
          while being in the water

        Price $500
        Health 300
        Attack Range 150
        Move Speed  0.7
        Build Speed 6.7s`);
    }
});
