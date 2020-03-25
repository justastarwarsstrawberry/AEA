//_____________Dont touch Zone start
exports.code = function(){
const { Client, Attachment } = require('discord.js');
client.setMaxListeners(0)
//_____________Dont touch Zone end
  
module.exports.run = async (bot, message, args) => {
  
  if(!message.member.roles.find(r => r.name === "Admin") || !message.member.roles.find(r => r.name === "Developer") || !message.member.roles.find(r => r.name === "Bot Developer")) return message.channel.send("Thoust are not able")
  let argsresult;
  message.delete()
  let mChannel = message.mentioned.channels.first()
  if(mChannel) {
  argsresult = args.slice(1).join(" ")
  mChannel.send(argsresult)
  } else {
  
  argsresult = args.join(" ")
  argsresult.channel.send(argsresult)
  }
}

module.exports.config = {
  name: "a",
  description: "Make an announcement to the server",
  usage:"/a",
  accessableby:"Developer, Bot Devs, Admins",
  aliases:["acc", "announcement"]
}
