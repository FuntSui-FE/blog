//nodejs 中:处理http请求; 多进程通信

//vue和react组件生命周期触发

//vue watch,react

function serverCallback(req,res){
  var method = req.method.toLowerCase();
  if(method === 'get'){

  }
  if(method === 'post'){
    var data = '';
    req.on('data',function(chunk){
      data += chunk.toString();
    })
    req.on('end',function(){
      res.writeHead(200,{'Content-type':'text/html'});
      res.write(data);
      res.end();
    })
  }
}


//观察者模式弊端