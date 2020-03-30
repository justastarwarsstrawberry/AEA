exports.code = function(){
var exec = require('child_process').exec, child;
child = exec('java -Dnogui=true -jar ./resources/music/Music.jar', (input) =>
  function (error, stdout, stderr){
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if(error !== null){
      console.log('exec error: ' + error);
    }

});
}