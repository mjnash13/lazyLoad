var images = document.getElementsByClassName('lazyLoad');//需要延迟加载的图片class为'lazyLoad'，获取需要延迟加载的图片。

lazyLoad(images);//页面初始化时先执行一次，把需要加载的图片先加载。

window.onscroll = function() {
    lazyLoad(images);
};
//窗口滚动时触发加载函数。

function lazyLoad(images) {
    for (var i = 0; i < images.length; i++) {
        if (!images[i].isLoad && images[i].getBoundingClientRect().top < document.documentElement.clientHeight) {
            images[i].isLoad = true;//更改标志位，已经加载的图片就不再加载。
            /*images[i].src = images[i].getAttribute('data-src');*/
            loadImage(images[i]);
        }
    }
}

//确保图片下载完成之后再显示
function loadImage(image) {
    var imageTemp = new Image();
    imageTemp.onload = function() {
        image.src = imageTemp.src;
    };
    imageTemp.src = image.getAttribute('data-src');
}
