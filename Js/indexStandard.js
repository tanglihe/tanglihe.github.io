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
};