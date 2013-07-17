(function ($) {
  Drupal.behaviors.skrollr_ui = {
    attach: function(context, settings) {
    // Cache the Window object
	$window = $(window);
	// Get the inital value when the page is loaded...
    $('#skrollr-ui-indicator').html($window.scrollTop() + 'px');
	$window.scroll(function() {
	  // ...then get the value as the page is actively scrolled
      $('#skrollr-ui-indicator').html($window.scrollTop() + 'px');
	});
    }
  }
})(jQuery);