exports.code = function(){
const { Client, Attachment } = require('discord.js');
client.setMaxListeners(0)

//imports from other files


//Units

const Sea = require('./units/WATER.js');
const exp = require('./units/EXP.js');
const Anubis = require('./units/AIR - Anubis.js');
const Darkest = require('./units/LAND.js');
const Mechs = require('./units/MECH.js');
const vox = require('./units/INFANTRY - Vox777.js');
const build = require('./units/BUILDING.js');
// Random
//const beat = require('./other/101 how to beat.js');
const N = require('./other/Nword.js');
const weak = require('./other/weakness.js');
const teams = require('./other/teams.js');
const tips = require('./other/tips.js');
const jq = require('./other/JQuery.js');
const Timer = require('./other/timer.js');

const Func = require('./other/skaarjlord.js');
const test = require('./other/Test.js');
//const rukkit = require('./jars/rukkit.js')
//const music = require('./jars/music/music.js')

//const role = require('./other/reactionroles.js');
// Maps

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


  // Units

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
  if(exp && Client){
    exp.code();
    console.log('Experimentals loaded');
  }
  if(vox && Client){
    vox.code();
    console.log('Infantry loaded');
  }
  if(build && Client){
    build.code();
    console.log('Buildings loaded');
  }
  // Random

  if(N && Client){
    N.code();
    console.log('Nword loaded');
  } 

  if(Timer && Client){
   		 Timer.code();
    		console.log('Timer loaded');
  }

  if(Func && Client){
     		Func.code();
     		console.log('Skaarjlord loaded');
  }

  if(tips && Client){
    tips.code();
    console.log('Tips loaded');
  }

/*
  if(beat && Client){
    tips.code();
    console.log('101 beat loaded');
  }
*/

  if(test && Client){
    test.code();
    console.log('Test.js loaded');
  }
  /*
  if(rukkit && Client){
    rukkit.code();
    console.log('Rukkit.js loaded');
  }
  if(music && Client){
    music.code();
    console.log('Music loaded');
  }

 /*
  if(role && Client){
    role.code();
    console.log('AutoRoles loaded');
  }
 */

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
