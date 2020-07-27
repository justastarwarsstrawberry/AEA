
exports.code = function(){

      
    client.on("message", message => {

    if (message.content.toLowerCase() === 'rage') {
        if(message.author.bot) return;
        message.channel.send();
    }
    client.users.get("543626502215041025")
    message.content.includes('rage? I heard galaxy like to rage like a bitch?') &&
  
    }


    if (message.content.toLowerCase() === 'host') {
        if(message.author.bot) return;
        message.channel.send();
    }

    client.users.get("428543881978707969")
    message.content.includes('host I can host? ') &&



    });

}
