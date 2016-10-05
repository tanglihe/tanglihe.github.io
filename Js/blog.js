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
     timer = setInterval(function () {
         cur++;
         animate(postUl, {left: -880 * cur}, function () {
             if (cur == postLen - 1) {
                 cur = 0;
                 postUl.style.left = 0;
             }
         })
     }, 4000);

     postLast.onmouseover = function () {
         clearInterval(timer);
     };
     postLast.onmouseout = function () {
         clearInterval(timer);
         timer = setInterval(function () {
             cur++;
             animate(postUl, {left: -880 * cur}, function () {
                 if (cur == postLen - 1) {
                     cur = 0;
                     postUl.style.left = 0;
                 }
             })
         }, 4000);

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
 }
//var s=0;
//for(i=0;i<5;i++){
//    s+=i;
//    alert(s);
//    i++;
//}
//alert(s);