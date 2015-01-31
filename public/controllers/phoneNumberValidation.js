jQuery.noConflict();
jQuery(document).ready(function($) {
	
	// Given an input form, allow only numeric values to be typed.
	$.fn.allowOnlyNumericValues = function() {
		$(this).keypress(function(evt) {
			evt = (evt) ? evt : window.event;
			var charCode = (evt.which) ? evt.which : evt.keyCode;
			if (charCode > 31 && (charCode < 48 || charCode > 57)) {
				return false;
			}
			return true;
		});
	}
	
	$("#candygramForm input[type='tel']").allowOnlyNumericValues();
	
});