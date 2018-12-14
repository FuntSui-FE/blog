//node.js 自定义事件

var fs = require('fs');
var readStream = fs.createReadStream('./newFilm.mp4');

var length = 0;
readStream.on('data',function(chunk){
  length +=chunk.toString().length;
  console.log(length+'A');
})
readStream.on('data',function(chunk){
  length +=chunk.toString().length;
  console.log(length+'B');
})

readStream.on('end',function(){
  console.log(length);
})