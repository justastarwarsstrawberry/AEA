//_____________Dont touch Zone start
// Fixed Offline
exports.code = function(){
const { Client, Attachment } = require('discord.js');

client.setMaxListeners(0)
//_____________Dont touch Zone end
const config = require("./prefix.json");
//lol
client.on('ready', () => {
        client.guilds.get('606586202942079017').channels.get('693704540561604608').fetchMessage('694317573583536148');
        /* We could use .then() here but we don't need the returning promise in this case
           This will just cache the specified message, to make sure
           that 'messageReactionAdd' will always get called */
});

client.on("message", message => {
        if (message.content.toLowerCase() === '/aeaelite') {
                        message.member.addRole('694316498553929778');

        }
});
 
client.on("message", message => {
let guild = client.guilds.get('606586202942079017');
let member = guild.member(message.author);
let nickname = member ? member.displayName : null;
   const taco = message.content
         const a1 = new Discord.RichEmbed()
         	.setColor('#1500f7')
	        .setTitle('Announcement')
         	.setAuthor(nickname, 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128')
         	.setDescription(taco)
         	.addBlankField()
         	.setURL('')
	        .setThumbnail('https://cdn.discordapp.com/icons/606586202942079017/7eafb97b0aa80cecb8e4a9f0a7f87c21.webp?size=128')
         	.setTimestamp()
         	.setFooter('Edited by: SkaarjLord', 'https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128');

//https://cdn.discordapp.com/avatars/287608141191970817/6d82a2d09c9b2323f453abf5bfaaa588.png?size=128
 if(message.author.bot) return;  

 if(message.content.toLowerCase().endsWith('#')){

 if(message.member.roles.some(role => role.name === 'Bot Developer')){
	let channel = message.guild.channels.find(channel => channel.name === "announcements")
	if(!channel){
    	message.reply('The "annoucements" channel must exist')
	}else {
		message.guild.channels.find(channel => channel.name === "announcements").send(a1)
	}
	
     }
    }
  });
}

