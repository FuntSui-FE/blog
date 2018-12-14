//观察者模式2 

//@1 网页事件绑定 点击一个按钮促发多个事件 ------->

//@2 promise 所有的事件监听模式都是用观察者模式 


function loadImg (src){
  var promise = new Promise((reslove,reject)=>{
    var img = document.createElement('img');
    img.onload = ()=>{
      console.log(img);
      reslove(img)
    };
    img.onerror = ()=>{
      reject('error:图片加载失败')
    }
  })
  return promise;
};


var src = 'https://upload-images.jianshu.io/upload_images/7280129-9dfa6216e6f3a8eb.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/500/format/webp'
loadImg(src).then((img)=>{
  console.log('width',img.width);
  return img;
}).then(img=>{
  console.log(img)
})

//jquery callbacks
//node.js 自定义事件  EventEmitter

