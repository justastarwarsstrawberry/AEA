//Dont touch Zone start
exports.code = function(){
const { Client, Attachment } = require('discord.js');
client.setMaxListeners(0)
//Dont touch Zone end
// units
//test
	const lynx = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Lynx')
	.setURL('')
	.attachFiles(['./resources/lynx.png'])
	.setAuthor('Anubis', 'https://cdn.discordapp.com/avatars/307614504550793226/27efe0ae606e37d871edb9654e460390.png?size=1024')
	.setDescription(" - Very fast \n- Low armor \n- Ground attack")
	.addBlankField()
	.addField("Stats", "Price $275 \n Health 120 \n Attack Range 130 \n Move Speed 1.60 \n Build Speed 3.3s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://lynx.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

const lightgunship = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Light Gun Ship')
	.setURL('')
	.attachFiles(['./resources/light_gunship.png'])
	.setAuthor('Anubis', 'https://cdn.discordapp.com/avatars/307614504550793226/27efe0ae606e37d871edb9654e460390.png?size=1024')
	.setDescription(" - Very weak \n- Light ground attack only \n- Slow")
	.addBlankField()
	.addField("Stats", "Price $250 \n Health 50 \n Attack Range 120 \n Move Speed 1.10 \n Build Speed 5.6s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://light_gunship.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

const heavyinterceptor = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Heavy Interceptor')
	.setURL('')
	.attachFiles(['./resources/heavy_interceptor.png'])
	.setAuthor('Anubis', 'https://cdn.discordapp.com/avatars/307614504550793226/27efe0ae606e37d871edb9654e460390.png?size=1024')
	.setDescription(" - Fast \n- Can attack air only \n- Heavily armed with shield \n- Shield weak vs lighnting")
	.addBlankField()
	.addField("Stats", "Price $1,200 \n Health 40 \n Attack Range 170 \n Move Speed 2.50 \n Build Speed 16.7s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://heavy_interceptor.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const interceptor = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Interceptor')
	.setURL('')
	.attachFiles(['./resources/inteceptor.png'])
	.setAuthor('Anubis', 'https://cdn.discordapp.com/avatars/307614504550793226/27efe0ae606e37d871edb9654e460390.png?size=1024')
	.setDescription(" - Fast \n- Can attack air only")
	.addBlankField()
	.addField("Stats", "Price $600 \n Health 250 \n Attack Range 170 \n Move Speed 2.40 \n Build Speed 8.3s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://inteceptor.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const dropship = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Dropship')
	.setURL('')
	.attachFiles(['./resources/dropship.png'])
	.setAuthor('Anubis', 'https://cdn.discordapp.com/avatars/307614504550793226/27efe0ae606e37d871edb9654e460390.png?size=1024')
	.setDescription(" - Fast \n- Can attack air only")
	.addBlankField()
	.addField("Stats", "Price $800 \n Health 700 \n Move Speed 2.30 \n Build Speed 16.7s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://dropship.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const gunship = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Gunship')
	.setURL('')
	.attachFiles(['./resources/gunship.png'])
	.setAuthor('Anubis', 'https://cdn.discordapp.com/avatars/307614504550793226/27efe0ae606e37d871edb9654e460390.png?size=1024')
	.setDescription(" - Can attack ground only \n- Strong attack \n- Heavily armored")
	.addBlankField()
	.addField("Stats", "Price $800 \n Health 285 \n Move Speed 1.40 \n Build Speed 8.3s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://gunship.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const amphib = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Amphibious Jet')
	.setURL('')
	.attachFiles(['./resources/amphibious_jet.png'])
	.setAuthor('Anubis', 'https://cdn.discordapp.com/avatars/307614504550793226/27efe0ae606e37d871edb9654e460390.png?size=1024')
	.setDescription(" - Shoots lightning while in air or underwater \n- Lightning weak vs grounded buildings")
	.addBlankField()
	.addField("Stats", "Price $1,800 \n Health 530 \n Attack Range 170 \n Move Speed 1.40 \n Build Speed 16.7s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://amphibious_jet.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const attackjet = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Attack Jet')
	.setURL('')
	.attachFiles(['./resources/attack_jet.png'])
	.setAuthor('Anubis', 'https://cdn.discordapp.com/avatars/307614504550793226/27efe0ae606e37d871edb9654e460390.png?size=1024')
	.setDescription(" - Medium armor \n- Ground attack only \n- Armed with 2 missile launchers and a machine gun ")
	.addBlankField()
	.addField("Stats", "Price $2,750 \n Health 480 \n Attack Range 220 \n Move Speed 1.80 \n Build Speed 23.8s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://attack_jet.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const bomber = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Bomber')
	.setURL('')
	.attachFiles(['./resources/bomber.png'])
	.setAuthor('Anubis', 'https://cdn.discordapp.com/avatars/307614504550793226/27efe0ae606e37d871edb9654e460390.png?size=1024')
	.setDescription(" - Medium armor \n- Ground attack only \n- Armed with 2 missile launchers and a machine gun ")
	.addBlankField()
	.addField("Stats", "Price $4,000 \n Health 3000 \n Attack Range 45 \n Move Speed 0.85 \n Build Speed 66.7s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://bomber.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const missileairship = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Missile Airship')
	.setURL('')
	.attachFiles(['./resources/missile_airship.png'])
	.setAuthor('Anubis', 'https://cdn.discordapp.com/avatars/307614504550793226/27efe0ae606e37d871edb9654e460390.png?size=1024')
	.setDescription(" - Attacks land and air \n- Fires missiles that do light splash \n- Has to reload after firing a few shots ")
	.addBlankField()
	.addField("Stats", "Price $4,000 \n Health 3000 \n Attack Range 45 \n Move Speed 0.85 \n Build Speed 66.7s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://missile_airship.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const phantom = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Phantom scout')
	.setURL('')
	.attachFiles(['./resources/phantom_scout.png'])
	.setAuthor('Anubis', 'https://cdn.discordapp.com/avatars/307614504550793226/27efe0ae606e37d871edb9654e460390.png?size=1024')
	.setDescription(" - Stealthy scouting drone \n- Very light attack \n- Has to be manually ordered to attack \n- Can turn invisible for 13 seconds at a time ")
	.addBlankField()
	.addField("Stats", "Price $5,000 \n Health 540 \n Attack Range 110 \n Move Speed 0.85 \n Build Speed 23.8s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://phantom_scout.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const apache = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Apache Helicopter')
	.setURL('')
	.attachFiles(['./resources/apache_helicopter.png'])
	.setAuthor('Anubis', 'https://cdn.discordapp.com/avatars/307614504550793226/27efe0ae606e37d871edb9654e460390.png?size=1024')
	.setDescription(" - Can attack land and air \n- Heavily armed, very light armor \n- Unloads hellfire, but slow reload after barrage ")
	.addBlankField()
	.addField("Stats", "Price $2,750 \n Health 220 \n Attack Range 200 \n Move Speed 1.80 \n Build Speed 10.8s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://apache_helicopter.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const mae1 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('MAE-1')
	.setURL('')
	.attachFiles(['./resources/MAE-1.png'])
	.setAuthor('Anubis', 'https://cdn.discordapp.com/avatars/307614504550793226/27efe0ae606e37d871edb9654e460390.png?size=1024')
	.setDescription(" - Like a builder but better \n- It's very vulnerable, but efficient \n- Can build fast and can repair units/buildings \n- Cannot build anti-air turrets \n-Cannot build more than 6 at a time")
	.addBlankField()
	.addField("Stats", "Price $3,525 \n Health 150 \n Attack Range 170 \n Move Speed 2.25 \n Build Speed 8.3")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://MAE-1.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const s1 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('S-1')
	.setURL('')
	.attachFiles(['./resources/s1.png'])
	.setAuthor('Anubis', 'https://cdn.discordapp.com/avatars/307614504550793226/27efe0ae606e37d871edb9654e460390.png?size=1024')
	.setDescription(" - 1 transport slot \n- Can't attack ")
	.addBlankField()
	.addField("Stats", "Price $1,350 \n Health 100 \n Move Speed 2.25 \n Build Speed 8.3s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://s1.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const S2 = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('S-2')
	.setURL('')
	.attachFiles(['./resources/s2.png'])
	.setAuthor('Anubis', 'https://cdn.discordapp.com/avatars/307614504550793226/27efe0ae606e37d871edb9654e460390.png?size=1024')
	.setDescription(" - 6 pick-up slots \n- Can't attack ")
	.addBlankField()
	.addField("Stats", "Price $3,350 \n Health 575 \n Move Speed 1.50 \n Build Speed 8.3s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://s2.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const swallowtail = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Swallow Tail')
	.setURL('')
	.attachFiles(['./resources/swallowtail.png'])
	.setAuthor('Anubis', 'https://cdn.discordapp.com/avatars/307614504550793226/27efe0ae606e37d871edb9654e460390.png?size=1024')
	.setDescription(" - Fast, glass cannon \n- Good home defence in groups \n- Weak armour but heavy DPS \n- Fucking swallow tails")
	.addBlankField()
	.addField("Stats", "Price $6,700 \n Attack Range 180 \n Health 700 \n Move Speed 1.80 \n Build Speed 23.8")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://swallowtail.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const heavymissileaircraft = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Heavy Missile Aircraft')
	.setURL('')
	.attachFiles(['./resources/heavy_missile_aircraft.png'])
	.setAuthor('Anubis', 'https://cdn.discordapp.com/avatars/307614504550793226/27efe0ae606e37d871edb9654e460390.png?size=1024')
	.setDescription(" - Slow, Powerful, Attacks land and air ")
	.addBlankField()
	.addField("Stats", "Price $9,750 \n Attack Range 200 \n Health 2400 \n Move Speed 0.85 \n Build Speed 55.6")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://heavy_missile_aircraft.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const kirov = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Kirov Bomber')
	.setURL('')
	.attachFiles(['./resources/kirov_bomber.png'])
	.setAuthor('Anubis', 'https://cdn.discordapp.com/avatars/307614504550793226/27efe0ae606e37d871edb9654e460390.png?size=1024')
	.setDescription(" - Heavy aircraft \n- Armed with 30 bombs (slow reload) \n- Heavy armor \n- Can attack only land \n- Slow")
	.addBlankField()
	.addField("Stats", "Price $45,000 \n Attack Range 60 \n Health 24000 \n Move Speed 0.50 \n Build Speed 45.5s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://kirov_bomber.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const grandslam = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Grand Slam Bomber')
	.setURL('')
	.attachFiles(['./resources/grand_slam_bomber.png'])
	.setAuthor('Anubis', 'https://cdn.discordapp.com/avatars/307614504550793226/27efe0ae606e37d871edb9654e460390.png?size=1024')
	.setDescription(" - Very fast but slow turn \n- Heavily armoured \n- Carries 1 50-ton bomb \n- Also has a quantum torpedo to attack subs \n- Takes a long time to recharge \n- Can self-repair \n- Defensless vs air")
	.addBlankField()
	.addField("Stats", "Price $42,000 \n Attack Range 45 \n Health 24000 \n Move Speed 1.70 \n Build Speed 83.3s")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://grand_slam_bomber.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
const helicopter = new Discord.RichEmbed()
	.setColor('#1500f7')
	.setTitle('Helicopter')
	.setURL('')
	.attachFiles(['./resources/helicopter.png'])
	.setAuthor('Anubis', 'https://cdn.discordapp.com/avatars/307614504550793226/27efe0ae606e37d871edb9654e460390.png?size=1024')
	.setDescription(" - Not cost-effective in direct combat \n- Can attack ground and air ")
	.addBlankField()
	.addField("Stats", "Price $700 \n Attack Range 130 \n Health 150 \n Move Speed 1.80 \n Build Speed 13.9")
	.setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
	.setImage('attachment://helicopter.png')
	.setTimestamp()
	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');
	
	client.on('message', message => {
//units
    if (message.content === 'Light gun ship' ||  message.content === 'Light gun ship' || message.content === 'light gun ship') {
	    message.channel.send(lightgunship);
    }
    if (message.content === 'Heavy interceptor' ||  message.content === 'Heavy Interceptor' || message.content === 'heavy interceptor') {
	    message.channel.send(heavyinterceptor);
    }
    if (message.content === 'Interceptor' ||  message.content === 'Interceptor' || message.content === 'interceptor') {
	    message.channel.send(interceptor);
    }
    if (message.content === 'Dropship' ||  message.content === 'Dropship' || message.content === 'dropship') {
	    message.channel.send(dropship);
    }
    if (message.content === 'Gunship' ||  message.content === 'Gunship' || message.content === 'Gunship') {
	    message.channel.send(gunship);
    }
    if (message.content === 'Amphibious jet' ||  message.content === 'Amphibious Jet' || message.content === 'amphibious jet') {
	    message.channel.send(amphib);
    }
    if (message.content === 'Attack jet' ||  message.content === 'Attack Jet' || message.content === 'attack jet') {
	    message.channel.send(attackjet);
    }
    if (message.content === 'Bomber' ||  message.content === 'Bombr' || message.content === 'bomber') {
	    message.channel.send(bomber);
    }
    if (message.content === 'Missile airship' ||  message.content === 'Missile Airship' || message.content === 'missile airship') {
	    message.channel.send(missileairship);
    }
    if (message.content === 'Phantom scout' ||  message.content === 'Phantom Scout' || message.content === 'phantom scout') {
	    message.channel.send(phantom);  
    }
    if (message.content === 'Apache helicopter' ||  message.content === 'Apache' || message.content === 'apache helicopter' || message.content === 'apache') {
	    message.channel.send(apache);  
    }
    if (message.content === 'MAE-1' || message.content === 'mae-1' || message.content === 'Mae 1') {
	    message.channel.send(mae1);  
    }
    if (message.content === 'S-1' ||  message.content === 's-1' || message.content === 'S1') {
	    message.channel.send(s1);  
    }
    if (message.content === 'S-2' ||  message.content === 's-2' || message.content === 'S2') {
	    message.channel.send(S2);  
    }
    if (message.content === 'Swallow tail' ||  message.content === 'Swallow Tail' || message.content === 'swallowtail' || message.content === 'swallowtail') {
	    message.channel.send(swallowtail);  
    }
    if (message.content === 'Heavy missile aircraft' ||  message.content === 'Heavy Missile Aircraft' || message.content === 'heavy missile aircraft' || message.content === 'heavymissileaircraft') {
	    message.channel.send(heavymissileaircraft);  
    }
    if (message.content === 'Kirov bomber' ||  message.content === 'Kirov Bomber' || message.content === 'kirov bomber' || message.content === 'kirov') {
	    message.channel.send(kirov);  
    }
    if (message.content === 'Grand slam bomber' ||  message.content === 'Grand Slam Bomber' || message.content === 'grand slam bomber' || message.content === 'Grand slam') {
	    message.channel.send(grandslam);  
    }
  if (message.content === 'Helicopter' ||  message.content === 'helicopter' || message.content === 'Which unit should I use if I want to stay a virgin?') {
	    message.channel.send(helicopter);  
    }
 // nigger filter
if (message.content.length <= 6){
	if (message.content.startsWith('n')){
		if (message.content.endsWith('a')){
			if(message.content.contains('igg')){
		       		const attachment = new Attachment('./resources/language.png');
        			message.channel.send(attachment);
			}
		
		}
		else if (message.content.endsWith('r')){
			if(message.content.contains('igg')){
		       		const attachment = new Attachment('./resources/language.png');
        			message.channel.send(attachment);
			}
		}
	}
}
 //commands   
    function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    }
    if (message.content.includes('/flipcoin')) {
        var flip = getRandomInt(1, 20);
        if (flip >= 10) {
        message.reply('Tails')
            } 
        if (flip <= 10){
        message.reply('Heads')
            }
    }

    if (!message.content.includes(',') && !message.content.includes('bad') && !message.content.includes('person') && message.content.includes('rape') && message.content.includes('good') ||  message.content.includes('child porn')) {
        const attachment = new Attachment('./resources/download.jpg');
        message.channel.send(attachment);

    }
           if(message.content.includes('/random')) {
           if(message.content.includes('1v1')) {
           var x = getRandomInt(1, 8);
           }
	   if(message.content.includes('2v2')) {
           var x = getRandomInt(9, 20);
           }
           if(message.content.includes('2v3')) {
           var x = getRandomInt(21, 24);
           }
           if(message.content.includes('3v3')) {
           var x = getRandomInt(25, 40);
           }
           if(message.content.includes('4v4')) {
           var x = getRandomInt(41, 49);
           }
	   if(message.content.includes('5v5')) {
           var x = getRandomInt(50, 65);
           }
           
           if (x===1) {
               const attachment = new Attachment('./resources/map/[p2]Beach landing (2p) [by hxyy]_map.png');
               message.channel.send(attachment);
               message.reply('Beach Landing');
           }
	   if (x===2) {
               const attachment = new Attachment('./resources/map/[p2]Big Island (2p)_map.png');
               message.channel.send(attachment);
               message.reply('Big Island');
           }
	   if (x===3) {
               const attachment = new Attachment('./resources/map/[p2]Dire_Straight (2p) [by uber]_map.png');
               message.channel.send(attachment);
               message.reply('Dire Straight');
           }
	   if (x===4) {
               const attachment = new Attachment('./resources/map/[p2]Fire Bridge (2p) [by uber]_map.png');
               message.channel.send(attachment);
               message.reply('Fire Bridge');
           }
	   if (x===5) {
               const attachment = new Attachment('./resources/map/[p2]Ice Island (2p)_map.png');
               message.channel.send(attachment);
               message.reply('Ice Island');
           }
           if (x===6) {
               const attachment = new Attachment('./resources/map/[p2]Lake (2p)_map.png');
               message.channel.send(attachment);
               message.reply('Lake');
           }
	    if (x===7) {
               const attachment = new Attachment('./resources/map/[p2]Small_Island (2p)_map.png');
               message.channel.send(attachment);
               message.reply('Small Island');
           }
	    if (x===8) {
               const attachment = new Attachment('./resources/map/[p2]Two_cold_sides (2p)_map.png');
               message.channel.send(attachment);
               message.reply('Two Cold Sides');
           }   
	    if (x===9) {
               const attachment = new Attachment('./resources/map/[p4]Convergence (4p)_map.png');
               message.channel.send(attachment);
               message.reply('Convergence');
           }
            if (x===10) {
               const attachment = new Attachment('./resources/map/[p4]Desert Battle (4p)_map.PNG');
               message.channel.send(attachment);
                message.reply('Desert Battle');
           }
             if (x===11) {
               const attachment = new Attachment('./resources/map/[p4]Dual Commanders (4p)_map.png');
               message.channel.send(attachment);
                 message.reply('Dual Commanders');
           }
	     if (x===12) {
               const attachment = new Attachment('./resources/map/[p4]Depth charges (4p) [by hxyy]_map.png');
               message.channel.send(attachment);
                 message.reply('Depth Charges');
           }
	     if (x===13) {
               const attachment = new Attachment('./resources/map/[p4]Desert (4p)_map.png');
               message.channel.send(attachment);
                 message.reply('Desert');
           }
	     if (x===14) {
               const attachment = new Attachment('./resources/map/[p4]Ice Lake (4p) [by hxyy]_map.png');
               message.channel.send(attachment);
                 message.reply('Ice Lake');
           }
  	     if (x===15) {
               const attachment = new Attachment('./resources/map/[p4]Island freeze (4p) [by hxyy]_map.png');
               message.channel.send(attachment);
                 message.reply('Island Freeze');
           }
	     if (x===16) {
               const attachment = new Attachment('./resources/map/[p4]Islands (4p)_map.png');
               message.channel.send(attachment);
                 message.reply('Islands');
           }
	     if (x===17) {
               const attachment = new Attachment('./resources/map/[p4]Lava Maze (4p)_map.png');
               message.channel.send(attachment);
                 message.reply('Lava Maze');
           }
	     if (x===18) {
               const attachment = new Attachment('./resources/map/[p4]Lava Vortex (4p)_map.png');
               message.channel.send(attachment);
                 message.reply('Lava Vortex');
           }
	     if (x===19) {
               const attachment = new Attachment('./resources/map/[p4]Magma Island (4p)_map.png');
               message.channel.send(attachment);
                 message.reply('Magma Island');
           }
	      if (x===20) {
               const attachment = new Attachment('./resources/map/[p4]Nuclear war (4p) [by hxyy]_map.png');
               message.channel.send(attachment);
                 message.reply('Nuclear War');
           }
             if (x===21) {
               const attachment = new Attachment('./resources/map/[p5]Bottom Heavy (2v3)_map.png');
               message.channel.send(attachment);
                 message.reply('Bottom Heavy');
           
           }
              if (x===22) {
               const attachment = new Attachment('./resources/map/[p5]Eye of Magma (2v3)_map.PNG');
               message.channel.send(attachment);
                  message.reply('Eye of Magma');
           
           }
              if (x===23) {
               const attachment = new Attachment('./resources/map/[p5]Hourglass (2v3)_map.png');
               message.channel.send(attachment);
                  message.reply('Hourglass');
           
       }
              if (x===24) {
               const attachment = new Attachment('./resources/map/[p5]Kratos and Hercules (2v3)_map.png');
               message.channel.send(attachment);
                  message.reply('Kratos and Hercules');
           
              }
              if (x===25) {
               const attachment = new Attachment('./resources/map/[p6] RoundaBout (6p)_map.PNG');
               message.channel.send(attachment);
                  message.reply('RoundaBout');
           
       }
              if (x===26) {
               const attachment = new Attachment('./resources/map/[p6]Beach Landing mrhidihoEdit (6p)_map.png');
               message.channel.send(attachment);
                  message.reply('Beach Landing');
           
       }
              if (x===27) {
               const attachment = new Attachment('./resources/map/[p6]Bridge of Hell (6p)_map.png');
               message.channel.send(attachment);
                      message.reply('Bridge of Hell');
           
       }
               
              if (x===28) {
               const attachment = new Attachment('./resources/map/[p6]Burning Beaches (6p)_map.png');
               message.channel.send(attachment);
                  message.reply('Burning Beaches');
           
       }
               if (x===29) {
               const attachment = new Attachment('./resources/map/[p6]Crossing (6p) mrhidihoEdit_map.png');
               message.channel.send(attachment);
                   message.reply('Crossing');
           
       }
               if (x===30) {
               const attachment = new Attachment('./resources/map/[p6]Desert Crossing (6p)_map.PNG');
               message.channel.send(attachment);
                   message.reply('Dessert Crossing');
           
       }
               if (x===31) {
               const attachment = new Attachment('./resources/map/[p6]Divided Islands (6p)_map.png');
               message.channel.send(attachment);
                   message.reply('Divided Islands');
           
       }
               if (x===32) {
               const attachment = new Attachment('./resources/map/[p6]Igneous-small (6p)_map.png');
               message.channel.send(attachment);
                   message.reply('Igneous Small');
           
       }
               if (x===33) {
               const attachment = new Attachment('./resources/map/[p6]Magma Island mrhidihoEdit (6p)_map.png');
               message.channel.send(attachment);
                   message.reply('Magma Island');
           
       }
               if (x===34) {
               const attachment = new Attachment('./resources/map/[p6]Serpents Pass (6p)_map.png');
               message.channel.send(attachment);
                   message.reply('Serpents Pass');
           
       }
               if (x===35) {
               const attachment = new Attachment('./resources/map/[p6]Tundra (6p)_map.png');
               message.channel.send(attachment);
                   message.reply('Tundra');
           
       }
               if (x===36) {
               const attachment = new Attachment('./resources/map/[p6]Weddell Isles (6p)_map.png');
               message.channel.send(attachment);
                   message.reply('Weddell Isles');
           
       }
               if (x===37) {
               const attachment = new Attachment('./resources/map/[p6]X-Path (6p)_map.png');
               message.channel.send(attachment);
                   message.reply('X-Path');
           
       }
		if (x===38) {
               const attachment = new Attachment('./resources/map/[p6]Crossing (6p)_map.png');
               message.channel.send(attachment);
                   message.reply('Crossing');
           
       }
		if (x===39) {
               const attachment = new Attachment('./resources/map/[p6]Shore to Shore (6p)_map.png');
               message.channel.send(attachment);
                   message.reply('Shore to Shore');
           
       }
		if (x===40) {
               const attachment = new Attachment('./resources/map/[p6]Valley Pass (6p)_map.png');
               message.channel.send(attachment);
                   message.reply('Valley Pass');
           
       }
               if (x===41) {
               const attachment = new Attachment('./resources/map/[p8]Darklord-Egypt (8p)_map.png');
               message.channel.send(attachment);
                   message.reply('Darklord Egypt');
           
       }
               if (x===42) {
               const attachment = new Attachment('./resources/map/[p8]Igneous (8p)_map.png');
               message.channel.send(attachment);
                   message.reply('Igneous');
           
       }
               if (x===43) {
               const attachment = new Attachment('./resources/map/[p8]Many Islands mrhidihoEdit (8p)_map.PNG');
               message.channel.send(attachment);
                   message.reply('Many Islands');
           
       }
               if (x===44) {
               const attachment = new Attachment('./resources/map/[p8]Bridges Over Lava (8p)_map.png');
               message.channel.send(attachment);
                   message.reply('Bridges Over Lava');
           
       }
		if (x===45) {
               const attachment = new Attachment('./resources/map/[p8]Coastline (8p) [by hxyy]_map.png');
               message.channel.send(attachment);
		message.reply('Coastline');
           
       }  
		if (x===46) {
               const attachment = new Attachment('./resources/map/[p8]Huge Subdivide (8p)_map.png');
               message.channel.send(attachment);
		message.reply('Huge Subdivide');
           
       }  
		if (x===47) {
               const attachment = new Attachment('./resources/map/[p8]Large Ice Outcrop (8p)_map.png');
               message.channel.send(attachment);
		message.reply('Large Ice Outcrop');
           
       }  
		if (x===48) {
               const attachment = new Attachment('./resources/map/[p8]Lava Divide(8p)_map.png');
               message.channel.send(attachment);
		message.reply('Lava Divide');
           
       }  
		if (x===49) {
               const attachment = new Attachment('./resources/map/[p8]Two Sides (8p)_map.png');
               message.channel.send(attachment);
		message.reply('Two Sides');
           
       }  
              if (x===50) {
               const attachment = new Attachment('./resources/map/[z;p10]Crossing Large (10p)_map.png');
               message.channel.send(attachment);
		message.reply('Crossing Large');
           
       }  
	      if (x===51) {
               const attachment = new Attachment('./resources/map/[z;p10]Enclosed Island (10p)_map.png');
               message.channel.send(attachment);
		message.reply('Enclosed Island');
           
       }  
	       if (x===52) {
               const attachment = new Attachment('./resources/map/[z;p10]Kingdoms (10p) [by Vulkan]_map.png');
               message.channel.send(attachment);
		message.reply('Kingdoms');
           
       }  
		if (x===53) {
               const attachment = new Attachment('./resources/map/[z;p10]Large Lava Divide (10p)_map.png');
               message.channel.send(attachment);
		message.reply('Large Lava Divide');
           
       }  
		if (x===54) {
               const attachment = new Attachment('./resources/map/[z;p10]Many Islands Large (10p)_map.png');
               message.channel.send(attachment);
		message.reply('Many Islands Large');
           
       }  
	        if (x===55) {
               const attachment = new Attachment('./resources/map/[z;p10]Two Sides Remake (10p)_map.png');
               message.channel.send(attachment);
		message.reply('Two Sides Remake');
           
       }  
		if (x===56) {
               const attachment = new Attachment('./resources/map/[z;p10]Valley Arena (10p) [by_uber]_map.png');
               message.channel.send(attachment);
		message.reply('Valley Arena');
           
       }  
              if (x===57) {
               const attachment = new Attachment('./resources/map/[p10] Napali Warfare (10p)_map.PNG');
               message.channel.send(attachment);
                   message.reply('Napali Warfare');
           
       }
               if (x===58) {
               const attachment = new Attachment('./resources/map/[p10] Ultimate Crossing (10p)_map.png');
               message.channel.send(attachment);
                   message.reply('Ultimate Crossing');
           
       }
               if (x===59) {
               const attachment = new Attachment('./resources/map/[p10]Crossing Large mrhidihoEdit (10p)_map.png');
               message.channel.send(attachment);
                   message.reply('Crossing Large');
           
       }
               if (x===60) {
               const attachment = new Attachment('./resources/map/[p10]Huge Subdivide mrhidihoEdit(10p)_map.png');
               message.channel.send(attachment);
                   message.reply('Huge Subdivide');
           
       }
               if (x===61) {
               const attachment = new Attachment('./resources/map/[p10]Island Warfare (10p)_map.png');
               message.channel.send(attachment);
                   message.reply('Island Warfare');
           
       }
                if (x===62) {
               const attachment = new Attachment('./resources/map/[p10]Land Mountains (10p)_map.png');
               message.channel.send(attachment);
                    message.reply('Land Mountains');
           
       }
                if (x===63) {
               const attachment = new Attachment('./resources/map/[p10]Lava Bio-grid mrhidihoEdit (10p)_map.png');
               message.channel.send(attachment);
                    message.reply('Lava Bio-Grid');
           
       }
                if (x===64) {
               const attachment = new Attachment('./resources/map/[p10]Setons Clutch (10p)_map.png');
               message.channel.send(attachment);
                    message.reply('Setons Clutch');
           
       }
                if (x===65) {
               const attachment = new Attachment('./resources/map/[p10]The Final Campaign (10p)_map.png');
               message.channel.send(attachment);
                    message.reply('The Final Campaign');
           
       }

    }
});
//Dont touch Zone start
}
//Dont touch Zone end
