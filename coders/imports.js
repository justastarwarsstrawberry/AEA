exports.code = function(){
const { Client, Attachment } = require('discord.js');
client.setMaxListeners(0)


const Sea = require('./sea.js');
const Func = require('./skaarjlord.js');
const Anubis = require('./anubis.js');
const Darkest = require('./land.js');

const Mechs = require('./mech.js');
const N = require('./Nword.js');
const Timer = require('./timer.js');
const Music = require('../resources/music/music.js');
  
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
  if(Mechs && Client){
    Mechs.code();
     console.log('Mechs loaded');
  }
  if(Func && Client){
     		Func.code();
     		console.log('Skaarjlord loaded');
  }
  if(Music && Client){
     		Music.code();
     		console.log('Musicloaded');
  }
 



 
}
