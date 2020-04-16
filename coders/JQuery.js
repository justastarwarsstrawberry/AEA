exports.code = function(){
const { Client, Attachment } = require('discord.js');
const fs = require("fs");
const { JSDOM } = require( "jsdom" );
const dom = new JSDOM(`<iframe src="https://challonge.com/wgamhen5/module" width="100%" height="500" frameborder="0" scrolling="auto" allowtransparency="true">type here</iframe>`, {
    url: "https://challonge.com/wgamhen5/module",
    referrer: "https://challonge.com/wgamhen5/module",
    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 10000000
  });
const $ = require( "jquery" );
client.setMaxListeners(0)




client.on('message', message => {

if(message.content.startsWith("/test")){

message.reply(dom.window.document.querySelector("iframe"));
}



});
  
  
  
  
//________________Dont touch Zone start
}
//________________Dont touch Zone end
