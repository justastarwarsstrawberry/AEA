//_____________Dont touch Zone start
exports.code = function(){
const { Client, Attachment } = require('discord.js');
const fs = require("fs");
let db = require("./databasel.json");
client.setMaxListeners(0)
//_____________Dont touch Zone end
  
	
// /n for new line
// Only include picture if you have one
// Keep the footer the same
// Keep author as you
// Keep timestamp there
// Units Description 
// Note: The description has to be outside client.on({});

const e1 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Tank')
	.setURL('')
	.attachFiles(['./resources/tank.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Can attack ground only \n- Fast but low health")
	.addBlankField()
	.addField("Stats", "Price $350 \n Health 230 \n Attack Range 130 \n Move Speed 1.10 \n Build Speed 4.8s \n InIClass c_tank")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://tank.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e2 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('AA Missile Tank')
	.setURL('')
	.attachFiles(['./resources/aamissiletank.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Long range anti-air only missile \n- Light Shield")
	.addBlankField()
	.addField("Stats", "Price $2,500 \n Health 1,100 \n Attack Range 340 \n Shield 700 \n Move Speed 0.6 \n Build Speed 24.8s \n InIClass missileTankFix")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://aamissiletank.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e3 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Typhoon')
	.setURL('')
	.attachFiles(['./resources/typhoon.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Landing assault craft \n- Fast \n- Very light Mounted machine-guns \n- Carries 4 units")
	.addBlankField()
	.addField("Stats", "Price $2,500 \n Health 300 \n Attack Range 140 \n Move Speed 1.6 \n Build Speed 33.3s \n InIClass EkTyphoon")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://typhoon.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e4 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Zephyr')
	.setURL('')
	.attachFiles(['./resources/z.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Medium \n- Armed with a prototype flamethrower \n- Short range ground attack \n- Can auto-repair")
	.addBlankField()
	.addField("Stats", "Price $1,750 \n Health 900 \n Attack Range 140 \n Move Speed 1.0 \n Build Speed 19.6s \n InIClass zephyrTank")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://z.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e5 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Plasma Sniper')
	.setURL('')
	.attachFiles(['./resources/plasmasniper.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Long range ground attack \n- Very weak armour with light shield \n- Can only hit ground")
	.addBlankField()
	.addField("Stats", "Price $1,600 \n Health 100 \n Shield 300 \n Attack Range 300 \n Move Speed 0.8 \n Build Speed 18.5s \n InIClass plasmaSniper")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://plasmasniper.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e6 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Comet') 
	.setURL('')
	.attachFiles(['./resources/comet.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Fast \n- Can attack ground only \n- Light armor \n- High spread, weak vs. single targets")
	.addBlankField()
	.addField("Stats", "Price $950 \n Health 450 \n Attack Range 150 \n Move Speed 1 \n Build Speed 11.1s \n InIClass cometTank")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://comet.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e7 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Hound APC')
	.setURL('')
	.attachFiles(['./resources/houndapc.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Long Range Attack \n- Powerful in groups, but glass cannons \n- Can only attack ground")
	.addBlankField()
	.addField("Stats", "Price $350 \n Health 100 \n Attack Range 130 \n Move Speed 1.4 \n Build Speed 3.3s \n InIClass Hound APC")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://houndapc.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e8 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Heavy Tank')
	.setURL('')
	.attachFiles(['./resources/hvytank.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Heavily armed \n- Can attack ground \n- Light air attack")
	.addBlankField()
	.addField("Stats", "Price $800 \n Health 600 \n Attack Range 160 \n Move Speed 0.8 \n Build Speed 10.7s \n InIClass c_heavyTank")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://hvytank.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e9 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Laser Tank')
	.setURL('')
	.attachFiles(['./resources/lasertank.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Can attack ground and air \n- Weak vs. multiple units \n- Powerful single shot, slow recharge")
	.addBlankField()
	.addField("Stats", "Price $1,300 \n Health 400 \n Attack Range 220 \n Move Speed 0.7 \n Build Speed 12.8s \n InIClass cc_laserTank")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://lasertank.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e10 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Heavy Artillery')
	.setURL('')
	.attachFiles(['./resources/hvyartillery.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Can attack ground only \n- Long range \n- Limited Laser defence")
	.addBlankField()
	.addField("Stats", "Price $3,200 \n Health 600 \n Attack Range 310 \n Move Speed 0.7 \n Build Speed 24.8s \n InIClass heavyArtillery")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://hvyartillery.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e11 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Demo Truck')
	.setURL('')
	.attachFiles(['./resources/demotruck.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Blows itself up on enemies \n- High damage and area of effect \n- Lower damage if killed before detonation \n- Light armor \n- Fast, but accelerates slowly \n- Cannot enter transports")
	.addBlankField()
	.addField("Stats", "Price $2,500 \n Health 420 \n Attack Range 9 \n Move Speed 1.5 \n Build Speed 41.7s \n InIClass demo_truck")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://demotruck.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e12 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Hover Tank')
	.setURL('')
	.attachFiles(['./resources/hovertank.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Light armor \n- Able to move over water \n- Can attack air and ground")
	.addBlankField()
	.addField("Stats", "Price $450 \n Health 150 \n Attack Range 140 \n Move Speed 1.2 \n Build Speed 8.3s \n InIClass c_hovertank")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://hovertank.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

const e13 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Saber')
	.setURL('')
	.attachFiles(['./resources/saber.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Can attack air only \n- Armed with 2 small flak cannons \n- Medium armor")
	.addBlankField()
	.addField("Stats", "Price $900 \n Health 600 \n Attack Range 200 \n Move Speed 0.6 \n Build Speed 12.8s \n InIClass saberTank")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://saber.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

const e14 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Buffalo')
	.setURL('')
	.attachFiles(['./resources/buffalo.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Minigun tank \n- Can attack land & air \n- Speeds up as it fires")
	.addBlankField()
	.addField("Stats", "Price $2500 \n Health 550 \n Attack Range 200 \n Move Speed 0.85 \n Build Speed 20.8s \n InIClass buffaloTank")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://buffalo.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

const e15 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Heavy Hover Tank')
	.setURL('')
	.attachFiles(['./resources/hvyhovertank.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Minigun tank \n- Can attack land & air \n- Speeds up as it fires")
	.addBlankField()
	.addField("Stats", "Price $1100 \n Health 420 \n Attack Range 160 \n Move Speed 1 \n Build Speed 16.7s \n InIClass c_heavyHovertank")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://hvyhovertank.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e16 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Tesla Tank')
	.setURL('')
	.attachFiles(['./resources/teslatank.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Heavy Armour \n- Tesla tech, good against shields \n- Can attack land and air \n- Reduced damage to buildings")
	.addBlankField()
	.addField("Stats", " Price $3900 \n Health 2600 \n Attack Range 170 \n Move Speed 0.6 \n Build Speed 27.8s \n InIClass Tesla Tank")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://teslatank.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e17 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Scout')
	.setURL('')
	.attachFiles(['./resources/scout.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Mid armor - Not cost-effective for combat \n- Can see further through fog \n- Able to move over water \n- Can attack air and ground")
	.addBlankField()
	.addField("Stats", " Price $500 \n Health 350 \n Attack Range 110 \n Move Speed 1.3 \n Build Speed 8.3s \n InIClass c_scout")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://scout.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e18 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Duster')
	.setURL('')
	.attachFiles(['./resources/duster.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Medium armor \n- Ground attack \n- Armed with twin autocannons")
	.addBlankField()
	.addField("Stats", " Price $3500 \n Health 1100 \n Attack Range 210 \n Move Speed 0.60 \n Build Speed 20.8s \n InIClass dusterTank")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://duster.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e19 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Artillery')
	.setURL('')
	.attachFiles(['./resources/artillery.png'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Can attack ground only \n- Long range")
	.addBlankField()
	.addField("Stats", " Price $900 \n Health 140 \n Attack Range 290 \n Move Speed 0.90 \n Build Speed 8.3s \n InIClass c_artillery")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://artillery.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const e20 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Combat Engineer')
	.setURL('')
	.attachFiles(['./resources/cengineer.jpg'])
	.setAuthor('LemonsHQ', 'https://cdn.discordapp.com/avatars/242687584373964801/4b20eb44bfff0b11f7447ed582fedbb2.png?size=128')
	.setDescription(" - Can build units and some T2 buildings \n- Can attack land, air, and subs \n- Can repair units \n- Can build Sub-turrets \n- Can only have 12 built at once")
	.addBlankField()
	.addField("Stats", " Price $7400 \n Health 1500 \n Attack Range 200 \n Move Speed 1.20 \n Build Speed 33.3s \n Income generation +$1 \n InIClass combatEngineerX")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://cengineer.jpg')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

client.on('message', message => {
	

//tank
    if (message.content.toLowerCase() === 'tank') {
	message.channel.send(e1);
    }
//missiletank
    if (message.content.toLowerCase() === db.K) {
	message.channel.send(e2);
    }
//typhoon
    if (message.content.toLowerCase() === db.G) {
	message.channel.send(e3);
    }
//Zephyr
    if (message.content.toLowerCase() === db.L) {
    	message.channel.send(e4);
    }
//plasmasniper 
    if (message.content.toLowerCase() === db.E) {
        message.channel.send(e5);
    }
//comet
    if (message.content.toLowerCase() === db.C) {
	message.channel.send(e6);
    }
//houndapc
    if (message.content.toLowerCase() === db.D) {
	message.channel.send(e7);
    }
//Heavytank
    if (message.content.toLowerCase() === db.B) {
	message.channel.send(e8);
    }
//Lasertank
    if (message.content.toLowerCase() === db.M) {
	message.channel.send(e9);
    }  
//heavyartillery
    if (message.content.toLowerCase() === db.O) {
	message.channel.send(e10);
    }
//Demotruck
    if (message.content.toLowerCase() === db.J) {
	message.channel.send(e11);
    }
//hovertank
    if (message.content.toLowerCase() === db.N) {
	message.channel.send(e12);
    }		
//saber
    if (message.content.toLowerCase() === db.F) {
	message.channel.send(e13);
    }	
//buffalo
    if (message.content.toLowerCase() === db.H) {
	message.channel.send(e14);
    }	
//Heavy hover tank	
    if (message.content.toLowerCase() === db.I) {
	message.channel.send(e15);
    }	
//tesla tank
    if (message.content.toLowerCase() === db.R) {
	message.channel.send(e16);
    }		
//scout
    if (message.content.toLowerCase() === db.Q) {
	message.channel.send(e17);
    }
//duster
    if (message.content.toLowerCase() === db.P) {
	message.channel.send(e18);
    }	
//artillery
    if (message.content.toLowerCase() === db.T) {
	message.channel.send(e19);
    }	
//combat engineer
    if (message.content.toLowerCase() === db.S) {
	message.channel.send(e20);
    }	
//Siegetank
    if (message.content.toLowerCase() === db.V) {
	message.channel.send(e20);
    }	
});
  
  
  
  
//________________Dont touch Zone start
}
//________________Dont touch Zone end
