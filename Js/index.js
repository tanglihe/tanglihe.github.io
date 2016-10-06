 /**
  * Created by Administrator on 2016/9/30.
  */
 window.onload=function () {
     // Exclusive Topics部分的轮播
     var exclusive = $('exclusive');
     var exclusiveUl = exclusive.getElementsByTagName('ul')[0];//集合
     var exclusiveLi = exclusive.getElementsByTagName('li');
     var exclusiveLen = exclusiveLi.length/3;
     var exclusiveCur = 0;
     var exclusiveTimer;
     var exclusiveLeft = $('exclusiveLeft');
     var exclusiveRight = $('exclusiveRight');
     exclusiveTimer=setInterval(function () {
         exclusiveCur++;
         animate(exclusiveUl,{left:-1200*exclusiveCur}, function () {
             if(exclusiveCur==exclusiveLen-1){
                 exclusiveCur=0;
                 exclusiveUl.style.left=0;
             }
         })
     },4000);

     exclusive.onmouseover= function () {
         clearInterval(exclusiveTimer);
     };
     exclusive.onmouseout= function () {
         clearInterval(exclusiveTimer);
         exclusiveTimer=setInterval(function () {
             exclusiveCur++;
             animate(exclusiveUl,{left:-1200*exclusiveCur}, function () {
                 if(exclusiveCur==exclusiveLen-1){
                     exclusiveCur=0;
                     exclusiveUl.style.left=0;
                 }
             })
         },4000);
     };

     var middle = exclusiveUl.querySelectorAll('.bg_black_middle');   //集合
     for(var i=0;i<exclusiveLi.length;i++){
         exclusiveLi[i].index = i;
         exclusiveLi[i].onmouseover= function () {
             for(var j = 0;j<exclusiveLi.length;j++){
                 if(j==this.index){
                     middle[j].style.display='block';
                 }
             }
         };
         exclusiveLi[i].onmouseout= function () {
             for(var k = 0;k<exclusiveLi.length;k++){
                 if(k==this.index){
                     middle[k].style.display='none';
                 }
             }
         }
     }




     //hot topics轮播部分
     var hotTopic = $('hotTopicsShow');
     var hotUl = hotTopic.getElementsByTagName('ul')[0];//集合
     var hotLi = hotTopic.getElementsByTagName('li');
     var hotLen = hotLi.length;
     var hotCur = 0;
     var hotTimer;
     hotTimer=setInterval(function () {
         hotCur++;
         animate(hotUl,{left:-880*hotCur}, function () {
             if(hotCur==hotLen-1){
                 hotCur=0;
                 hotUl.style.left=0;
             }
         })
     },4000);

     hotTopic.onmouseover= function () {
         clearInterval(hotTimer);
     };
     hotTopic.onmouseout= function () {
         clearInterval(hotTimer);
         hotTimer=setInterval(function () {
             hotCur++;
             animate(hotUl,{left:-880*hotCur}, function () {
                 if(hotCur==hotLen-1){
                     hotCur=0;
                     hotUl.style.left=0;
                 }
             })
         },4000);
     };


//  environment 部分的轮播；
     var environment = $('environment');
     var environmentUl = environment.getElementsByTagName('ul')[0];//集合
     var environmentLi = environment.getElementsByTagName('li');
     var environmentLen = environmentLi.length;
     var environmentCur = 0;
     var environmentTimer;
     environmentTimer=setInterval(function () {
         environmentCur++;
         animate(environmentUl,{left:-878*environmentCur}, function () {
             if(environmentCur==environmentLen-1){
                 environmentCur=0;
                 environmentUl.style.left=0;
             }
         })
     },4000);

     environment.onmouseover= function () {
         clearInterval(environmentTimer);
     };
     environment.onmouseout= function () {
         clearInterval(environmentTimer);
         environmentTimer=setInterval(function () {
             environmentCur++;
             animate(environmentUl,{left:-878*environmentCur}, function () {
                 if(environmentCur==environmentLen-1){
                     environmentCur=0;
                     environmentUl.style.left=0;
                 }
             })
         },4000);
     };

     // Advertising选项卡部分
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