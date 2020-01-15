$(document).ready(function(){
    function showCover() {
        $('content_canvas').height(document.body.scrollHeight);
        var cover1 = {};
        cover1.t = $('#cover1');
        cover1.w = cover1.t.attr('width');
        cover1.h = cover1.t.attr('height');
        cover1.o = function() {
            $('#mark').height(window.innerHeight);
        }();
        var scene = document.getElementById('mark');
        var parallax = new Parallax(scene);
        parallax.limit(45, 5);
    }

    showCover();
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
