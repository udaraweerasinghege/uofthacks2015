jQuery.noConflict();
jQuery(document).ready(function($) {
    var BV = new $.BigVideo();
    BV.init();
    BV.show('http://vjs.zencdn.net/v/oceans.mp4');
});

