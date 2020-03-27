exports.code = function(){
const { Client, Attachment } = require('discord.js');
const ytdl = require("ytdl-core");
const PREFIX = "/";
var server = {},
client.once('message', message => {
  
  let args = message.content.substring(PREFIX.length).split(" ");
  
        switch(args[0]){
          case 'play':
            
            function play(connection,message){
              var server = servers [message.guild.id]
              server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}))
              
              server.queue.shift();
              
              server.dispatcher.on("end", function(){
                if(server.queue[0]){
                  play(connection, message)
                }else {
                  connection.disconnect();
                }
              });
            }
            
            
            if(!args[1]){
              message.channel.send("provide a link")
              return;
            }
            
            
            if(!message.member.voiceChannel){
              message.channel.send("You must be in a Voice chat")
              return;
            }
            if(!servers[message.guild.id])servers[mesage.guild.id] = {
              queue:[]
            }
            
            var server = server[message.guild.id];
            
            server.queue.push(args[1]);
            
            if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
              play(connection, message);
            })
            break;
        }

});
}
