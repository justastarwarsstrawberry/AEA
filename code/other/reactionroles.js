exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    client.setMaxListeners(0)
    const ReactionRole = require("reaction-role");

    




system.init().then(() => {

    client.on("message", async(message) => {

        
        if(message.content.toLowerCase().startsWith('}') && client.users.get("242687584373964801")){
            let mes1 = message.content
            let option1 = system.createOption("aea:737107148533792829", "697809380137107478");
            let option2 = system.createOption("hosts:737107269300256857", "711766395817558067" );
            let option3 = system.createOption("nukedrone:737107875117400114", "694316498553929778");
            let resend = system.createMessage(mes1, channel, 9999, null, option1, option2, option3);

            message.guild.channels.find(channel => channel.name === "bot-testing").send(resend)
        }

    });

});

}