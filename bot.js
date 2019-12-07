const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, Attachment } = require('discord.js');
client.setMaxListeners(0)

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
    message.reply(`Successfully kicked ${user.tag}`);
                });
            }
        }
    }
});

client.on('message', message => {
    const attachment = new Attachment('./resources/NuclearDrone.png');

    if (message.content.includes('bruh')) {
    message.channel.send(attachment);
    }
});

client.on('message', message => {
    let voiceChannel = message.member.voiceChannel;
    if (message.content.includes('bruh')) return voiceChannel.join(true).then(connection => {
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

        Price $250,000
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

        Price $65,000
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
    if (message.content === 'experimental sam tank' ||  message.content === 'Experimental SAM Tank') {

        message.reply(`
        Experimental SAM Tank
        - Very heavily armored
        - Armed with anti-air missles and flak turret
        - Can attack air only

        Price $24,000
        Health 6,000
        Attack Range 350
        Move Speed 0.4
        Build Speed 60s`);
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
client.on('message', message => {
    if (message.content === 'combat engineer' ||  message.content === 'Combatengineer' || message.content === 'combat Engineer' || message.content === 'combatEngineer' || message.content === 'Combat Engineer') {

        message.reply(`
        Combat Engineer
        - Can build units and some T2 Buildings
        - Can attack land, air and subs
        - Can repair units
        - Can build Sub-Turrets
        - Can only have 12 built at once

        Price $7,400
        Health 1,500
        Attack Range 200
        Move Speed  1.2
        Build Speed 33.3s`);
    }
});
client.on('message', message => {
    if (message.content === 'corvette' ||  message.content === 'Corvette' || message.content === 'corvet' || message.content === 'Corvet') {

        message.reply(`
        Corvette
        - Equipped with a Long Range Cannon
        - Strong Anti-sub torpedos
        - Cannot hit air

        Price $1,250
        Health 1,500
        Attack Range 275
        Move Speed  0.8
        Build Speed 10.6s`);
    }
});
client.on('message', message => {
    if (message.content === 'demo truck' ||  message.content === 'Demo truck' || message.content === 'demoTruck' || message.content === 'demo Truck') {

        message.reply(`
        Demolition Truck
        - Blows itself up on enemies
        - High damage and area of effect
        - Lower damage if killed before detonation
        - Light armor
        - Fast, but accelerates slowly
        - Cannot enter transports

        Price $2,500
        Health 420
        Attack Range 9
        Move Speed  1.5
        Build Speed 41.7s`);
    }
});
client.on('message', message => {
    if (message.content === 'Destroyer' ||  message.content === 'destroyer' || message.content === 'Destroyer ship' || message.content === 'destroyer Ship') {

        message.reply(`
        Destroyer
        - Powerful land attack
        - Anti-sub torpedoes
        - Cannot attack air

        Price $5,000
        Health 3,500
        Attack Range 290
        Move Speed  0.6
        Build Speed 24.8s`);
    }
});
client.on('message', message => {
    if (message.content === 'Dreadnought' ||  message.content === 'dreadnought') {

        message.reply(`
        Dreadnought
        - Equipped with Long range cannons
        - No Defences while in Cannon mode
        - Area damage only
        - Cannot attack air
        - Strong Anti-sub torpedoes
        - Can build builder ship and Missile ship 

        Price $58,000
        Health 12,000
        Attack Range 350
        Attack Range Deployed 630
        Move Speed  0.5
        Build Speed 87.7s`);
    }
});
client.on('message', message => {
    if (message.content === 'Dropship' ||  message.content === 'dropship') {

        message.reply(`
        Dropship
        - Transports up to 4 units
        - Cannot attack

        Price $800
        Health 700
        Attack Range 0
        Move Speed  2.3
        Build Speed 16.7s`);
    }
});
client.on('message', message => {
    if (message.content === 'Frigate' ||  message.content === 'frigate') {

        message.reply(`
        Frigate
        - Equipped with a Long Range Cannon
        - Cannot hit subs
        - Anti Air Turret 

        Price $3,500
        Health 2,000
        Attack Range 350
        Move Speed 0.75
        Build Speed 15.2s`);
    }
});
client.on('message', message => {
    if (message.content === 'Gunboat' ||  message.content === 'gunboat' || message.content === 'gun boat' || message.content === 'Gun boat') {

        message.reply(`
        Gunboat
        - Fast
        - Can attack ground

        Price $300
        Health 170
        Attack Range 120
        Move Speed 1.5
        Build Speed 3.3s`);
    }
});
client.on('message', message => {
    if (message.content === 'Gunship' ||  message.content === 'gunship' || message.content === 'gun ship' || message.content === 'Gun ship') {

        message.reply(`
        Gunship
        - Can attack ground only
        - trong attack
        - Heavily armored

        Price $800
        Health 285
        Attack Range 140
        Move Speed 1.5
        Build Speed 8.3s`);
    }
});
client.on('message', message => {
    if (message.content === 'heavy hover tank' ||  message.content === 'heavyhovertank' || message.content === 'Heavy Hover Tank' || message.content === 'HeavyHoverTank') {

        message.reply(`
        Heavy Hover Tank
        - Heavy armor
        - Able to move over water
        - Can attack subs, air and ground
        - Great for killing heavy subs

        Price $1,100
        Health 420
        Attack Range 160
        Move Speed 1.0
        Build Speed 16.7s`);
    }
});
client.on('message', message => {
    if (message.content === 'heavy tank' ||  message.content === 'heavytank' || message.content === 'Heavy Tank' || message.content === 'HeavyTank') {

        message.reply(`
        Heavy Tank
        - Heavily armed
        - Can attack ground
        - Light air attack


        Price $800
        Health 600
        Attack Range 160
        Move Speed 0.8
        Build Speed 10.7s`);
    }
});
client.on('message', message => {
    if (message.content === 'heavy interceptor' ||  message.content === 'heavyinterceptor' || message.content === 'Heavy Interceptor' || message.content === 'HeavyInterceptor' || message.content === 'Heavy Intercept' || message.content === 'heavy intercept' || message.content === 'heavyintercept' || message.content === 'HeavyIntercept') {

        message.reply(`
        Heavy Interceptor
        - Fast
        - Can attack air only
        - Heavily armed with shield
        - Shield weak vs lightning

        Price $1,200
        Health 40
        Shield 560
        Attack Range 170
        Move Speed 2.5
        Build Speed 16.7s`);
    }
});
client.on('message', message => {
    if (message.content === 'heavy missle ship' ||  message.content === 'heavymissleship' || message.content === 'Heavy Missle Ship' || message.content === 'HeavyMissleShip' || message.content === 'heavy missle ship' || message.content === 'heavymissleship' || message.content === 'Heavy Missle S' || message.content === 'HeavyMissleS') {

        message.reply(`
        Heavy Missle Ship
        - Can attack land & air
        - Long range

        Price $16,000
        Health 3,000
        Attack Range 170
        Move Speed 0.5
        Build Speed 41.7s`);
    }
});
client.on('message', message => {
    if (message.content === 'hover tank' ||  message.content === 'hovertank' || message.content === 'Hover Tank' || message.content === 'HoverTank' || message.content === 'Hover tank' || message.content === 'hover Tank') {

        message.reply(`
        Hover Tank
        - Light armor
        - Able to move over water
        - Can attack air and ground

        Price $450
        Health 150
        Attack Range 140
        Move Speed 1.2
        Build Speed 8.3s`);
    }
});
// Ubers Mechs
client.on('message', message => {
    if (message.content === 'Assault Mech' ||  message.content === 'AssaultMech' || message.content === 'assault mech' || message.content === 'assaultmech') {

        const attachment = new Attachment('./resources/assaultmech.png');

        if (message.content === 'Assault Mech' ||  message.content === 'AssaultMech' || message.content === 'assault mech' || message.content === 'assaultmech') {
        message.channel.send(attachment);
        }
        message.reply(`
        Assault Mech
        - Heavily armed and armored
        - Can attack ground
        - Light air attack
        - Can build and buff nearby small T1 mechs
        - Can self-repair

        Price $20,000
        Health 4,800
        Attack Range 250
        Move Speed 0.4
        Build Speed 52.1s`);
    }
});
client.on('message', message => {
    if (message.content === 'heavy artillery mech' ||  message.content === 'heavyartillerymech' || message.content === 'Heavy Artillery Mech' || message.content === 'HeavyArtilleryMech') {

        const attachment = new Attachment('./resources/hvyartmech.png');

        if (message.content === 'heavy artillery mech' ||  message.content === 'heavyartillerymech' || message.content === 'Heavy Artillery Mech' || message.content === 'HeavyArtilleryMech') {
        message.channel.send(attachment);
        }
        message.reply(`
        Heavy Artillery Mech
        - Ground attack
        - Needs to deploy to fire
        - Very long range, but slow reload
        - Regenerates shield when deployed
        - Stronger vs. buildings than vs. units

        Price $9,000
        Health 750
        Attack Range 410
        Move Speed 0.6
        Build Speed 33.3s

        Heavy Artillery Mech Deployed

        Shield 500
        Move Speed 0
        Build Speed 2s`);
    }
});
client.on('message', message => {
    if (message.content === 'Heavy Mech' ||  message.content === 'HeavyMech' || message.content === 'heavy mech' || message.content === 'heavymech') {

        const attachment = new Attachment('./resources/hvymech.png');

        if (message.content === 'Heavy Mech' ||  message.content === 'HeavyMech' || message.content === 'heavy mech' || message.content === 'heavymech') {
        message.channel.send(attachment);
        }
        message.reply(`
        Heavy Mech
        - Heavily armored
        - Ground attack
        - Moderate damage and range
        - Can disable weapon to activate 
        a temporary shield and self-repair

        Price $5,000
        Health 2,000
        Attack Range 250
        Move Speed 0.7
        Build Speed 18.3s

        Activate Shield
        - Adds a 900HP shield for 8 seconds
        - Regenerates 400HP
        - Slightly increases movement speed
        - Unable to attack while shield is active
        
        Shield 900
        Move Speed 0.85
        Build Speed 0s`);
    }
});
client.on('message', message => {
    if (message.content === 'Heavy Mobile Turret' ||  message.content === 'HeavyMobileTurret' || message.content === 'heavy mobile turret' || message.content === 'heavymobileturret') {

        const attachment = new Attachment('./resources/hvymobileturret.png');

        if (message.content === 'Heavy Mobile Turret' ||  message.content === 'HeavyMobileTurret' || message.content === 'heavy mobile turret' || message.content === 'heavymobileturret') {
        message.channel.send(attachment);
        }
        message.reply(`
        Heavy Mobile Turret
        -Heavily armored
        -Ground attack when undeployed
        -Deploys for extra range, anti-air and shield regen
        -Cannot attack while undeploying
        -Can release a repairing nano-burst when deployed

        Price $8,000
        Health 1,400
        Attack Range 220
        Move Speed 0.5
        Build Speed 33.3s`);
    }
});

// house f f r , senate j
//foreigh Affairs, finance, rules, judicary [names]
// rules [my committee]
// two paragraph describing committees
// what do you hope to accomplish and why do I want to server on the following committee
