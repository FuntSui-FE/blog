function loadImg(src) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject('图片加载失败');
    };
    img.src = src;
  });
}

let src =
  'https://upload-images.jianshu.io/upload_images/7280129-eef423c97a2e2f53.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240';

loadImg(src)
  .then(img => {
    console.log(img.width);
  })
  .then(img => {
    console.log(img.height);
  })
  .catch(err => console.log(err));
