exports.code = function(){
var one = process.env.BOT_TOKEN
var exec = require('child_process').exec, child;
child = exec('java -jar ./resources/music/Music.jar one',
  function (error, stdout, stderr){
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if(error !== null){
      console.log('exec error: ' + error);
    }
});
}