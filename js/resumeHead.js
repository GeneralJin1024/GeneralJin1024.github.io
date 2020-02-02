$(document).ready(function(){
    document.getElementById('screen').remove();

    var link1 = document.createElement('link');
    link1.setAttribute('rel', 'stylesheet');
    link1.setAttribute('type', 'text/css');
    link1.setAttribute('href', '/js/prism/prism.css');
    document.head.appendChild(link1);

    var link2 = document.createElement('link');
    link2.setAttribute('rel', 'stylesheet');
    link2.setAttribute('type', 'text/css');
    link2.setAttribute('href', '/css/defult.css');
    document.head.appendChild(link2);

    var style = document.createElement('style');
    style.type = 'text/css';
    style.setAttribute('id', 'myStyle')
    document.head.appendChild(style);

});
