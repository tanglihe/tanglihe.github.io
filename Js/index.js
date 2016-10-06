 /**
  * Created by Administrator on 2016/9/30.
  */
 window.onload=function () {
     // Exclusive Topics部分的轮播
     var exclusive = $('exclusive');
     var exclusiveUl = exclusive.getElementsByTagName('ul')[0];//集合
     var exclusiveLi = exclusive.getElementsByTagName('li');
     var exclusiveLen = exclusiveLi.length;
     var exclusiveCur = 0;
     var exclusiveTimer;
     var exclusiveLeft = $('exclusiveLeft');
     var exclusiveRight = $('exclusiveRight');

//点击左键
     exclusiveLeft.onclick= function () {
         exclusiveCur--;
         if(exclusiveCur==-1){
             exclusiveCur=exclusiveLen-4;
             var sum=-(exclusiveLen-3)*407+'px';
             exclusiveUl.style.left=sum;
         }
         animate(exclusiveUl,{left:-407*exclusiveCur});
     };
//点击右键
     exclusiveRight.onclick= function () {
         exclusiveCur++;
         if(exclusiveCur==exclusiveLen-2){
             exclusiveCur=1;
             exclusiveUl.style.left=0;
         }
         animate(exclusiveUl,{left:-407*exclusiveCur});
     };



//鼠标悬浮显示middle内的图标
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
     var textTotal = $('#textTotal');
     var firstUl = $('firstUl');
     var secondUl = $('secondUl');

     var hotLi = firstUl.getElementsByTagName('li');
     var hotLen = hotLi.length;
     var hotCur = 0;
     var hotTimer;
     var hotLeft = $('hotLeft');
     var hotRight = $('hotRight');
     //页面加载完成自动滚动部分

     hotTimer=setInterval(function () {
         hotCur++;
         if(hotCur==hotLen){
             hotCur=1;
             firstUl.style.left=0;
             secondUl.style.top=0;
         }
         animate(firstUl,{left:-880*hotCur});
         animate(secondUl,{top:-119*hotCur});
     },3000);



     //右键点击
     hotRight.onclick= function () {
         hotCur++;
         if(hotCur==hotLen){
             hotCur=1;
             firstUl.style.left=0;
             secondUl.style.top=0;
         }
         animate(firstUl,{left:-880*hotCur});
         animate(secondUl,{top:-119*hotCur})
     };


    //左键点击
     hotLeft.onclick= function () {
         hotCur--;
         if(hotCur==-1){
             hotCur=hotLen-2;
             var sumFirst = -(hotLen-1)*880 + 'px';
             var sumSecond = -(hotLen-1)*119 + 'px';
             firstUl.style.left=sumFirst;
             secondUl.style.top=sumSecond;
         }
         animate(firstUl,{left:-hotCur*880});
         animate(secondUl,{top:-119*hotCur})
     };

    //鼠标悬浮清除定时器部份
     hotTopic.onmouseover= function () {
         clearInterval(hotTimer);
     };
     //鼠标移出继续滚动部分
     hotTopic.onmouseout= function () {
         clearInterval(hotTimer);
         hotTimer=setInterval(function () {
         hotCur++;
         if(hotCur==hotLen){
             hotCur=1;
             firstUl.style.left=0;
             secondUl.style.top=0;
         }
         animate(firstUl,{left:-880*hotCur});
         animate(secondUl,{top:-119*hotCur});
         },3000);
     };






//  environment 部分的轮播；
     var environment = $('environment');
     var environmentUl = environment.getElementsByTagName('ul')[0];//集合
     var environmentLi = environment.getElementsByTagName('li');
     var environmentLen = environmentLi.length;
     var environmentCur = 0;
     var environmentTimer;
     var environmentLeft = $('environmentLeft');
     var environmentRight = $('environmentRight');
     var turn = $('turn');
     environmentTimer=setInterval(function () {
         environmentCur++;
         animate(environmentUl,{left:-878*environmentCur}, function () {
             if(environmentCur==environmentLen-1){
                 environmentCur=0;
                 environmentUl.style.left=0;
             }
         })
     },3000);
     //右键点击
     environmentRight.onclick= function () {
         environmentCur++;
         if(environmentCur==environmentLen){
             environmentCur=1;
             environmentUl.style.left=0;
         }
         animate(environmentUl,{left:-878*environmentCur});
     };


     //左键点击
     environmentLeft.onclick= function () {
         environmentCur--;
         if(environmentCur==-1){
             environmentCur=environmentLen-2;
             var sumLeft = -(environmentLen-1)*880 + 'px';
             environmentUl.style.left=sumLeft;
         }
         animate(environmentUl,{left:-environmentCur*878});
     };


     environment.onmouseover= function () {
         clearInterval(environmentTimer);
     };
     turn.onmouseover= function () {
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
         },3000);
     };

     turn.onmouseout= function () {
         clearInterval(environmentTimer);
         environmentTimer=setInterval(function () {
             environmentCur++;
             animate(environmentUl,{left:-878*environmentCur}, function () {
                 if(environmentCur==environmentLen-1){
                     environmentCur=0;
                     environmentUl.style.left=0;
                 }
             })
         },3000);
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