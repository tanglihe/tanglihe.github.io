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

};