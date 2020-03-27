exports.code = function(){

const Discord = require('discord.js');
// Start a new Client from Discord.js. You can name this to whatever you like.
const client = new Discord.Client();
client.music = require("discord.js-musicbot-addon");
var options = {
  606586202942079017: {
    id: 606586202942079017,
    djRole: "DJ",
    prefix: "/"
  }
}
// Now we start the music module.
client.music.start(client, {
 youtubeKey: process.env.API_KEY,

  play: {
    // Usage text for the help command.
    usage: "{{prefix}}play some tunes",
    // Whether or not to exclude the command from the help command.
    exclude: true 
  },

  // Make it so anyone in the voice channel can skip the
  // currently playing song.
  anyoneCanSkip: false,

  // Make it so the owner (you) bypass permissions for music.
  ownerOverMember: true,
  ownerID: 242687584373964801,

  // The cooldown Object.
  cooldown: {
    // This disables the cooldown. Not recommended.
    enabled: false
  }
});

}
