exports.code = function(){
const { Client, Attachment } = require('discord.js');
const fs = require("fs");
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM(`<script type="text/javascript">
function prepareFrame() {
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "http://google.com/");
    ifrm.style.width = "640px";
    ifrm.style.height = "480px";
    document.body.appendChild(ifrm);
}
</script>`);
const $ = require( "jquery" )( window );
client.setMaxListeners(0)




client.on('message', message => {

if(message.content.startsWith("/test")){

message.reply(dom.window.document.querySelector("script").textContent);
}



});
  
  
  
  
//________________Dont touch Zone start
}
//________________Dont touch Zone end
