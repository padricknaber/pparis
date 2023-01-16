/*
 ** @author : halil bilir
 */

(function($) {
	"use strict";

	var deliveryInformation = {};

	deliveryInformation = {

		init : function() {
			var self = this;
			self.checkErrorMessage();
		},

		checkErrorMessage : function() {
			var $errorDiv = $("#shopErrorMessage");
			if($errorDiv.data('show') == true){
				$.fancybox.open({
			        src: "#shopErrorMessage",
			        buttons: [],
			        smallBtn: true
			      });
			}	
		}

	}.init();

})(jQuery);