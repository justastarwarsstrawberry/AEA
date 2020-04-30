exports.code = function(){
    const { Client, Attachment } = require('discord.js');
    const fs = require("fs");
    client.setMaxListeners(1000)

client.on("message", message => {

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    }

	if(message.content.startsWith('/')){
        if(message.content.includes('1v1')) {
        var x = getRandomInt(1, 9);
        }
    }


    if (x===1) {
        const attachment = new Attachment('./resources/map/[p2]Beach landing (2p) [by hxyy]_map.png');
        message.channel.send(attachment);
        message.reply('Beach Landing');
    }
    if (x===2) {
        const attachment = new Attachment('./resources/map/[p2]Big Island (2p)_map.png');
        message.channel.send(attachment);
        message.reply('Big Island');
    }
    if (x===3) {
        const attachment = new Attachment('./resources/map/[p2]Dire_Straight (2p) [by uber]_map.png');
        message.channel.send(attachment);
        message.reply('Dire Straight');
    }
    if (x===4) {
        const attachment = new Attachment('./resources/map/[p2]Fire Bridge (2p) [by uber]_map.png');
        message.channel.send(attachment);
        message.reply('Fire Bridge');
    }
    if (x===5) {
        const attachment = new Attachment('./resources/map/[p2]Ice Island (2p)_map.png');
        message.channel.send(attachment);
        message.reply('Ice Island');
    }
    if (x===6) {
        const attachment = new Attachment('./resources/map/[p2]Lake (2p)_map.png');
        message.channel.send(attachment);
        message.reply('Lake');
    }
    if (x===7) {
        const attachment = new Attachment('./resources/map/[p2]Small_Island (2p)_map.png');
        message.channel.send(attachment);
        message.reply('Small Island');
    }
    if (x===8) {
        const attachment = new Attachment('./resources/map/[p2]Two_cold_sides (2p)_map.png');
        message.channel.send(attachment);
        message.reply('Two Cold Sides');
    }   
    if (x===9) {
        const attachment = new Attachment('./resources/map/[p2]Volcano Duel (2p)_map.png');
        message.channel.send(attachment);
        message.reply('Volcano Duel');
}


});