exports.code = function(){
client.music = require("discord.js-musicbot-addon");
client.on("message", (message, user) => {
  if (message.author.bot) return; // Good practice to do this.

  // I set the Client to this just for ease.
  // You'll probably have access to it another
  // way, but this still works.
  const client = message.client;

  // Get the command from the message.
  const command = (message.length).split(/[ \n]/)[0].trim();

  // Get the suffix, the String after the command.
  const suffix = (message.length + command.length).trim();

  // Set the prefix to "!". This is a horrible way to set
  // one, but it will do for now.
  let prefix = "/"

  // Now we check if the message starts with the prefix,
  // and asks for the PLAY command.
  if (message.content.startsWith(prefix) && command == "play") {
    // Now we pass the Message Object (msg) and
    // the suffix. It will then proceed as it would
    // with the bot normally.
    client.music.playFunction(message, suffix);
  }
  
  
  
});
  
}
