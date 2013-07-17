(function ($) {
  Drupal.behaviors.skrollr_ui = {
	attach: function(context, settings) {
	// Cache the Window object
    $window = $(window);
	// Get the inital values when the page is loaded...
	$('#skrollr-ui-scroll-indicator').html($window.scrollTop() + 'px');
	$('#skrollr-ui-height-indicator').html($window.height() + 'px');
	$('#skrollr-ui-width-indicator').html($window.width() + 'px');
	$window.scroll(function() {
	  // ...then get the value as the page is actively scrolled
      $('#skrollr-ui-scroll-indicator').html($window.scrollTop() + 'px');
	});
	$window.resize(function() {
	  $('#skrollr-ui-height-indicator').html($window.height() + 'px');
	  $('#skrollr-ui-width-indicator').html($window.width() + 'px');
	});
    }
  }
})(jQuery);