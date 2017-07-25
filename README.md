# lazyLoad
js实现简单的图片延迟加载（懒加载）

图片延迟加载需要html的配合
引入lazyLoad.js

在html中，
对需要延迟加载的图片，设置属性class为'lazyLoad'；
把图片的src设置为空；
把图片真正的地址放到属性data-src中；

图片写法：

     <img class="lazyLoad" src=""data-src="http://img001.21cnimg.com/photos/she_0/20140715/c100-0-146-450-341_r0/44A17D102465CDCA4E854011D12565D0.jpeg">
     
演示地址：
[lazyLoad演示地址][1]


  [1]: https://codepen.io/mjnash/pen/gxOVyo
