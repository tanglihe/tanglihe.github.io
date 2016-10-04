 /**
  * Created by Administrator on 2016/9/30.
  */
 window.onload=function () {
     var blackFirst = $('blackBgFirst');
     var blackFirstMiddle = blackFirst.getElementsByTagName('div'); //集合
     blackFirst.onmouseover=function () {
         blackFirstMiddle[0].style.display='block';
     };
     blackFirst.onmouseout=function () {
         blackFirstMiddle[0].style.display='none';
     };

     var blackSecond = $('blackBgSecond');
     var blackSecondMiddle = blackSecond.getElementsByTagName('div'); //集合
     blackSecond.onmouseover=function () {
         blackSecondMiddle[0].style.display='block';
     };
     blackSecond.onmouseout=function () {
         blackSecondMiddle[0].style.display='none';
     };

     var blackThird = $('blackBgThird');
     var blackThirdMiddle = blackThird.getElementsByTagName('div'); //集合
     blackThird.onmouseover=function () {
         blackThirdMiddle[0].style.display='block';
     };
     blackThird.onmouseout=function () {
         blackThirdMiddle[0].style.display='none';
     };



     var list = document.getElementById('list').getElementsByTagName('div');
     var livingAbroad = document.getElementById('livingAbroad');
     var son = document.getElementsByClassName('list_son');
     var len = son.length;
     for(var i=0;i<len;i++){
         list[i].index = i;
         list[i].onmouseover= function () {
             for(var j = 0;j<len;j++){
                 if(j==this.index){
                     list[j].style.backgroundColor='#ff5842';
                     son[j].style.display='block';
                 }else{
                     list[j].style.backgroundColor='#ff5842';
                     son[j].style.display='none';
                 }
             }
         }

     }


 };

//var s=0;
//for(i=0;i<5;i++){
//    s+=i;
//    alert(s);
//    i++;
//}
//alert(s);