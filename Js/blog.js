 /**
  * Created by Administrator on 2016/9/30.
  */
 window.onload=function () {
    //recent post 最后面的轮播
     var postLast = $('postLast');
     var postUl = postLast.getElementsByTagName('ul')[0];//集合
     var postLi = postLast.getElementsByTagName('li');
     var postLen = postLi.length;
     var cur = 0;
     var timer;
     var lastLeft = $('lastLeft');
     var lastRight = $('lastRight');
     // 自动滚动
     timer = setInterval(function () {
         cur++;
         if(cur==postLen){
             cur=1;
             postUl.style.left=0;
         }
         animate(postUl,{left:-cur*880})
     }, 3000);
     // 左击
     lastLeft.onclick=function () {
         cur--;
         if(cur==-1){
             cur=postLen-2;
             var sum=-(postLen-1)*880 + 'px';
             postUl.style.left=sum;
         }
         animate(postUl,{left:-cur*880})
     };
     // 右击
     lastRight.onclick=function () {
         cur++;
         if(cur==postLen){
             cur=1;
             postUl.style.left=0;
         }
         animate(postUl,{left:-cur*880})
     };
     // 鼠标悬浮停止滚动
     postLast.onmouseover = function () {
         clearInterval(timer);
     };
// 鼠标移出继续滚动
     postLast.onmouseout = function () {
         timer = setInterval(function () {
             cur++;
             if(cur==postLen){
                 cur=1;
                 postUl.style.left=0;
             }
             animate(postUl,{left:-cur*880})
         }, 3000);
     };






     //advertising的选项卡
         var list = document.getElementById('list').getElementsByTagName('div');
         var livingAbroad = document.getElementById('livingAbroad');
         var son = document.getElementsByClassName('list_son');
         var len = son.length;
         for (var i = 0; i < len; i++) {
             list[i].index = i;
             list[i].onmouseover = function () {
                 for (var j = 0; j < len; j++) {
                     if (j == this.index) {
                         list[j].style.backgroundColor = '#ff5842';
                         son[j].style.display = 'block';
                     } else {
                         list[j].style.backgroundColor = '#ff5842';
                         son[j].style.display = 'none';
                     }
                 }
             }
         }
     }
