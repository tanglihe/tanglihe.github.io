 /**
  * Created by Administrator on 2016/9/30.
  */
window.onload= function () {
    //点击X黑色背景区域消失部分----------------------------------------------------------------------------------
    var black = $('blackBg');
    var close = $('close');
    close.onclick = function () {
        black.style.display='none';
    };

    //store轮播部分
    var storeContent = $('storeContent');
    var storeUl = storeContent.getElementsByTagName('ul')[0]; //集合
    var storeLi = storeContent.getElementsByTagName('li');
    var storeLen = storeLi.length;
    var cur=0;
    var storeLeft = $('storeLeft');
    var storeRight = $('storeRight');
    storeRight.onclick= function () {
        cur++;
        if(cur==storeLen-3){
            cur=1;
            storeUl.style.left=0;
        }
        animate(storeUl,{left:-303*cur});
    };


    // 左键点击
    storeLeft.onclick= function () {
        cur--;
        if(cur==-1){
            cur=storeLen-5;
            var storeLeft = -(storeLen-4)*303 + 'px';
            storeUl.style.left=storeLeft;
        }
        animate(storeUl,{left:-cur*303});
    };

  









    //recent project 的选项卡部分----------------------------------------------------------------------------------
    var navProject = $('recentProjectNav');
    var navLi = navProject.getElementsByTagName('li');//集合
    var liLen = navLi.length;
    var projectContent = $('recent_project_content');
    var navUl = projectContent.getElementsByTagName('ul');//集合
    for(var i=0;i<liLen;i++){
        navLi[i].index=i;
        navLi[i].onmouseover= function () {
            for(var j=0;j<liLen;j++){
                if(j==this.index){
                    navLi[j].style.color='#ff5842';
                    navUl[j].style.display='block';
                }else{
                    navLi[j].style.color='';
                    navUl[j].style.display='none';
                }
            }
        }
    }




    // recentPost 轮播部分
    var post = $('content');
    var postUl = post.getElementsByTagName('ul')[0];
    var postLi = postUl.getElementsByTagName('li');
    var postLen = postLi.length;
    var postLeft = $('postLeft');
    var postRight = $('postRight');
    var postCur=0;
    var postTimer;
    // 自动滚动
    postTimer=setInterval(function () {
        postCur++;
        if(postCur==postLen){
            postCur=1;
            postUl.style.left=0;
        }
        animate(postUl,{left:-1200*postCur})
    },3000);

    //右键点击
    postRight.onclick= function () {
        postCur++;
        if(postCur==postLen){
            postCur=1;
            postUl.style.left=0;
        }
        animate(postUl,{left:-1200*postCur});
    };
    //左键点击
    postLeft.onclick= function () {
        postCur--;
        if(postCur==-1){
            postCur=postLen-2;
            var postLeft = -(postLen-1)*1200 + 'px';
            postUl.style.left=postLeft;
        }
        animate(postUl,{left:-postCur*1200});
    };

    post.onmouseover=function () {
        clearInterval(postTimer);
    }
    post.onmouseout=function () {
        postTimer=setInterval(function () {
            postCur++;
            if(postCur==postLen){
                postCur=1;
                postUl.style.left=0;
            }
            animate(postUl,{left:-1200*postCur})
        },3000);
    }







};