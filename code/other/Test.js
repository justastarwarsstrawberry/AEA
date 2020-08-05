
exports.code = function(){
    function catchErr (err, message){
        client.channels.get("738108973651066890").send("ERROR ```" + err + "```")
    }
      
client.on("message", message => {
try{

   if(message.content.toLowerCase().includes('rage') &&  client.users.get("543626502215041025") ){
        if(message.author.bot) return;
        message.reply('someone raged hun?');
    }
    


    
    if (message.content.toLowerCase() === 'press f') {
        if(message.author.bot) return;
        message.reply(f);
    }

 
    if (message.content.toLowerCase() === 'fuck' && client.users.get("689727847379501108") ){
        if(message.author.bot) return;
        Message.channel.relpy('fuck can be a toxic word? Did you not know?')
    }
}
catch(err){
    catchErr(err, message);
   }

    });

}
