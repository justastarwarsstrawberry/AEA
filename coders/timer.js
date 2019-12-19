//_____________Dont touch Zone start
exports.code = function(){
const { Client, Attachment } = require('discord.js');
client.setMaxListeners(0)

  
client.on("message", message => {

//timer future implementation
function timeup() {
  message.reply('Times Up!')
}
const Timer10s = setTimeout(timeup, 10000);
const Timer1m = setTimeout(timeup, 60000);
const Timer2m = setTimeout(timeup, 80000);
const Timer3m = setTimeout(timeup, 120000);
const Timer10m = setTimerout(timeup, 600000);
if(message.content == '/startTimer'){
  if(message.content.includes('10s') && message.content == '/startTimer'){
  message.reply('Timer started for 10 seconds')
  Timer10s;
  }
  if(message.content.includes('1m') && message.content == '/startTimer'){
  message.reply('Timer Started for 1 minute')
  Timer1m;
  }
  if(message.content.includes('2m') && message.content == '/startTimer'){
  message.reply('Timer Started for 2 minutes')
  Timer2m;
  }
  if(message.content.includes('3m') && message.content == '/startTimer'){
  message.reply('Timer Started for 3 minutes')
  Timer3m;
  }
  if(message.content.includes('10m') && message.content == '/startTimer'){
  message.reply('Timer Started for 10 minutes')
  Timer10m;
  }
}
if(message.content == '/stopTimer'){
  message.reply('Stopped Timer')
  if(Timer10s) {
  clearTimeout(Timer10s, 250);
  }
  if(Timer1m) {
  clearTimeout(Timer1m, 250);
  }
  if(Timer2m) {
  clearTimeout(Timer2m, 250);
  }
  if(Timer3m) {
  clearTimeout(Timer3m, 250);
  }
  if(Timer10m) {
  clearTimeout(Timer10m, 250);
  }
}

});
  

}
//________________Dont touch Zone end
