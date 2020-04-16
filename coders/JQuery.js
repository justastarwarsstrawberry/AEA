exports.code = function(){
const { Client, Attachment } = require('discord.js');
const fs = require("fs");
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
client.setMaxListeners(0)




client.on('message', message => {

if(message.content.startsWith("/test")){
$('.demo_iframe').challonge('wgamhen5', {subdomain: '', theme: '1', multiplier: '1.0', match_width_multiplier: '1.0', show_final_results: '0', show_standings: '0'}).appendTo("body");
message.reply($("body").html());
}



});
  
  
  
  
//________________Dont touch Zone start
}
//________________Dont touch Zone end
