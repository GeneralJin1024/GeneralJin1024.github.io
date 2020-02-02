$(document).ready(function(){
    var canvas = document.getElementById("c");
    var ctx = canvas.getContext("2d");
    var c = $("#c");
    var w,h;
    var pi = Math.PI;
    var all_attribute = {
        num:10,            			 // 个数
        start_probability:0.1,		     // 如果数量小于num，有这些几率添加一个新的     		     
        size_min:1,   			     // 初始爱心大小的最小值
        size_max:2,   			     // 初始爱心大小的最大值
        size_add_min:0.3,               // 每次变大的最小值（就是速度）
        size_add_max:0.5,               // 每次变大的最大值
        opacity_min:0.8,                 // 初始透明度最小值
        opacity_max:1, 				 // 初始透明度最大值
        opacity_prev_min:.003,            // 透明度递减值最小值
        opacity_prev_max:.005,            // 透明度递减值最大值
        light_min:0,                 	  // 颜色亮度最小值
        light_max:90,                 	  // 颜色亮度最大值
    };
    var style_color = find_random(0,360);  
    var all_element =[];
    
    function start(){
        window.requestAnimationFrame(start);
        style_color+=0.1;
        //更改背景色hsl(颜色值，饱和度，明度)
        ctx.fillStyle = 'hsl('+style_color+',100%,97%)';
        ctx.fillRect(0, 0, w, h);
        
        if (all_element.length < all_attribute.num && Math.random() < all_attribute.start_probability){
            all_element.push(new ready_run);
        }
        all_element.map(function(line) {
            line.to_step();
        })
    }
    function ready_run(){
        this.to_reset();
    }
    function arc_heart(x,y,z,m){
        //绘制爱心图案的方法，参数x,y是爱心的初始坐标，z是爱心的大小，m是爱心上升的速度
        //爱心向左飘
        //x+=m;
        //爱心向右飘
        //x-=m;
        //爱心向上飘，向下飘换成+
        y-=m*10;
                                
        ctx.moveTo(x,y);
        z*=0.05;
        ctx.bezierCurveTo(x,y-3*z,x-5*z,y-15*z,x-25*z,y-15*z);
        ctx.bezierCurveTo(x-55*z,y-15*z,x-55*z,y+22.5*z,x-55*z,y+22.5*z);
        ctx.bezierCurveTo(x-55*z,y+40*z,x-35*z,y+62*z,x,y+80*z);
        ctx.bezierCurveTo(x+35*z,y+62*z,x+55*z,y+40*z,x+55*z,y+22.5*z);
        ctx.bezierCurveTo(x+55*z,y+22.5*z,x+55*z,y-15*z,x+25*z,y-15*z);
        ctx.bezierCurveTo(x+10*z,y-15*z,x,y-3*z,x,y);
    }
    ready_run.prototype = {
        to_reset:function(){
            var t = this;
            t.x = find_random(0,w);
            t.y = find_random(0,h);
            t.size = find_random(all_attribute.size_min,all_attribute.size_max);
            t.size_change = find_random(all_attribute.size_add_min,all_attribute.size_add_max);
            t.opacity = find_random(all_attribute.opacity_min,all_attribute.opacity_max);
            t.opacity_change = find_random(all_attribute.opacity_prev_min,all_attribute.opacity_prev_max);
            t.light = find_random(all_attribute.light_min,all_attribute.light_max);
            t.color = 'hsl('+style_color+',100%,'+t.light+'%)';
        },
        to_step:function(){
            var t = this;
            t.opacity -= t.opacity_change;
            t.size += t.size_change;
            if(t.opacity <= 0){
                t.to_reset();
                return false;
            }
            ctx.fillStyle = t.color;
            ctx.globalAlpha = t.opacity;
            ctx.beginPath();
            arc_heart(t.x,t.y,t.size,t.size);
            ctx.closePath();
            ctx.fill();
            ctx.globalAlpha = 1;
        }
    }
                
    function window_resize(){
        w=$("#mark").width();
        h=$("#mark").height();
        canvas.width = w;
        canvas.height = h;		
    }

    $(window).resize(function(){
        window_resize();
    });
                
    //return a random number
    function find_random(num_one,num_two){
        return Math.random()*(num_two-num_one)+num_one;
    }

    function showCover() {
        $('content_canvas').height(document.body.scrollHeight);
        $('#mark').height(window.innerHeight);
        var cover2 = $('#cover2');
        cover2.height *= 1.2;
        cover2.width *= 1.2;
        var scene = document.getElementById('mark');
        var parallax = new Parallax(scene);
        //parallax.origin(0.8, 0.5);
    }

    showCover();
    window_resize();
    //coverbubble
    start();

    // To top
    var isBack2topEnable = true;
    var isBack2topShow = false;
    var scrollSpeed = 5000;
    // Back the page to top.
    function back2top () {
        var $back2top = $('#back2top');
        var scrollTop = $('#container').scrollTop();

        if (scrollTop >= 300) {
            if (!isBack2topShow) {
                $back2top.addClass('show');
                $back2top.removeClass('hide');
                isBack2topShow = true;
            }    
        } else {
            $back2top.addClass('hide');
            $back2top.removeClass('show');
            isBack2topShow = false;
        }
    }

    // Initializaiton
    if (isBack2topEnable){
        back2top();

        $('#back2top').on('click', function () {
            $('#container').animate({ scrollTop: 0 }, scrollSpeed);
        });
    }

    $('#container').scroll(function () {
        //headerNavScroll();
    
        if (isBack2topEnable) {
          back2top();
        }
    });

    
      // Mobile nav
    var sidebar = $('.sidebar'),
    isMobileNavAnim = false,
    mobileNavAnimDuration = 200;

    var startMobileNavAnim = function () {
        isMobileNavAnim = true;
    };

    var stopMobileNavAnim = function () {
            setTimeout(function () {
                isMobileNavAnim = false;
            }, mobileNavAnimDuration);
    };

    $('#sidebar-toggle').on('click', function () {
        if (isMobileNavAnim) return;
        startMobileNavAnim();
        sidebar.toggleClass('on');
        stopMobileNavAnim();
    });

    $('#container').on('click', function () {
        if (isMobileNavAnim) return;
        sidebar.removeClass('on');
    });
})
