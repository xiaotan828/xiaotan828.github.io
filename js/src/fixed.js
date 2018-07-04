Window.onload=function (){
    
var $body = document.body,
    //获取导航元素 id
        $fixnav = document.getElementById("fixnav");
        window.addEventListener('scroll', function() {
        if($fixnav){
            var top = $fixnav.offsetTop;
            var width = $fixnav.offsetWidth;
            if(getScrollTop() <= top){
                $fixnav.style = "";
            } else {
                $fixnav.style.position = "fixed";//固定
                $fixnav.style.top = "0";//与页面顶端无缝相接
                $fixnav.style.width = "100%";//导航宽度
                $fixnav.style.zIndex = "1";//悬浮上一层
                $fixnav.style.opacity = "0.9";//透明度
            }
        }
        clearTimeout(timer);
        timer = setTimeout(function fn() {
            scrollCallback();
        }, 200);
    });	
};
};

