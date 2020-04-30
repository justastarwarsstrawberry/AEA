exports.code = function(){
const { Client, Attachment } = require('discord.js');
client.setMaxListeners(0)

//imports from other files

const Sea = require('./sea.js');
const Func = require('./skaarjlord.js');
const Anubis = require('./anubis.js');
const Darkest = require('./land.js');
const Mechs = require('./mech.js');
const N = require('./Nword.js');
const weak = require('./weakness.js');
const teams = require('./teams.js');
const tips = require('./tips.js');
const jq = require('./JQuery.js');
const Timer = require('./timer.js');
const Music = require('../resources/music/music.js');
const exp = require('./exp.js');

const onevone = require('./maps/1v1.js');
const twovtwo = require('./maps/2v2.js');
const twovthree = require('./maps/2v3.js');
const threevthree = require('./maps/3v3.js');
const fourvfour = require('./maps/4v4.js');
const fivevfive = require('./maps/5v5.js');

if(onevone && Client){
  onevone.code();
  console.log('1v1s loaded');
} 
if(twovtwo && Client){
  twovtwo.code();
  console.log('2v2s loaded');
} 
if(twovthree && Client){
  twovthree.code();
  console.log('2v3s loaded');
} 
if(threevthree && Client){
  threevthree.code();
  console.log('3v3s loaded');
} 
if(fourvfour && Client){
  fourvfour.code();
  console.log('4v4s loaded');
} 
if(fivevfive && Client){
  fivevfive.code();
  console.log('5v5s loaded');
} 

if(N && Client){
  N.code();
  console.log('Nword loaded');
} 


  if(N && Client){
    N.code();
    console.log('Nword loaded');
  } 

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
     		console.log('Music loaded');
  }

  if(tips && Client){
    tips.code();
    console.log('Tips loaded');
  }
  if(exp && Client){
    exp.code();
    console.log('Experimentals loaded');
  }

  if(weak && Client){
    weak.code();
    console.log('Weaknesses loaded');
  }
  if(teams && Client){
    teams.code();
    console.log('Teams loaded');
  }
  if(teams && Client){
    jq.code();
    console.log("Tournament loaded");
  }

 
}
