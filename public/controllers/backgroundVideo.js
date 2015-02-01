jQuery.noConflict();
jQuery(document).ready(function($) {
    var BV = new $.BigVideo();
    BV.init();
    BV.show('video/UofTHacks.mp4');
});
