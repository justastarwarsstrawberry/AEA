
exports.code = function(){

      
    client.on("message", message => {


   if(message.content.toLowerCase.includes('rage') &&  client.users.get("543626502215041025") ){
        if(message.author.bot) return;
        message.reply('rage? I heard galaxy like to rage like a bitch?');
    }
    


    if (message.content.toLowerCase() === 'host' && client.users.get("428543881978707969") ) {
        if(message.author.bot) return;
        message.channel.send('host? Can I host?');
    }


    });

}
