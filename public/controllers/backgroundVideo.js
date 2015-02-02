jQuery.noConflict();
jQuery(document).ready(function($) {
       var BV = new $.BigVideo({useFlashForFirefox:false});
	BV.init();
    BV.show([
        { type: "video/mp4",  src: "video/UofTHacks.mp4" },
        { type: "video/webm", src: "vids/UofTHacks.webm" },
        { type: "video/ogg",  src: "vids/UofTHacks.ogv" }
    ], {ambient:true});
	
});

