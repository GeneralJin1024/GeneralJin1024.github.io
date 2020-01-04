var Neptune = {
    Chase: function(id, w, h) {
        var _height = $(id).parent().height(),
            _width = $(id).parent().width(),
            ratio = h / w;
        if (_height / _width > ratio) {
            id.style.height = _height + 'px';
            id.style.width = _height / ratio + 'px';
        } else {
            id.style.width = _width + 'px';
            id.style.height = _width * ratio + 'px';
        }
        id.style.left = (_width - parseInt(id.style.width)) / 2 + 'px';
        id.style.top = (_height - parseInt(id.style.height)) / 2 + 'px';
    }
};

$(function() {
    /*
    if (Diaspora.P()) {
        $('body').addClass('touch')
    }
    */
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
})