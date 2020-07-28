
exports.code = function(){

      
    client.on("message", message => {


   if(message.content.toLowerCase().includes('rage') &&  client.users.get("543626502215041025") ){
        if(message.author.bot) return;
        message.reply('rage? I heard galaxy like to rage like a bitch?');
    }
    


    if (message.content.toLowerCase() === 'host' && client.users.get("428543881978707969") ) {
        if(message.author.bot) return;
        message.channel.reply('host? Can I host?');
    }

 
    if (message.content.toLowercase() === 'fuck' && client.users.get("543626502215041025") ) {
        If(message.author.bot) return;
        Message.channel.relpy('fuck can be a toxic word? Did you not know?')
    }
    

    });

}
