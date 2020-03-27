exports.code = function(){
const { Client, Attachment } = require('discord.js');
client.setMaxListeners(0)
--[
. means the current path level (so if you're on index.aspx and you reference ./style.css then the latter would have to be in the same folder as the former)
.. means one path level up (so if you're on /somefolder/index.aspx and you reference ../style.css then the latter would have to be in the parent folder of someFolder)
/ means the root level (so /style.css is the same as http://www.mysite.com/style.css)
~ in ASP.NET means the server-side application root (so ~/index.aspx would be translated to the URL of the index.aspx file that's in the application's root)	
 .    = this directory
 ../  = the parent directory
 ~/   = the user's home directory or the application's, in ASP
 /    = the root directory
 ../../ = the parent's parent directory 	
	
	]--

const Sea = require('./sea.js');
//const Func = require('./skaarjlord.js');
const Anubis = require('./anubis.js');
const Darkest = require('./land.js');
const N = require('./Nword.js');
const Timer = require('./timer.js');
const Music = require('../index.js');
  
  
  if(Timer && Client){
   		 Timer.code();
    		console.log('Timer loaded');
  }

  if(Anubis && Client){
   		 Anubis.code();
    		console.log('Anubis loaded');
  }

  if(Darkest && Client){
   		Darkest.code();
    		console.log('Land loaded');
  }
  if(Sea && Client){
   		Sea.code();
    		console.log('Sea loaded');
  }
  if(Music && Client){
		Music.code();
		console.log('Music loaded');
  }
  //if(Func && Client){
  //   		Func.code();
  //   		console.log('Skaarjlord loaded');
  //}
  
}
