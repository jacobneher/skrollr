(function ($) {
  Drupal.behaviors.skrollr_ui = {
	attach: function(context, settings) {
	// Cache the Window object
    $window = $(window);
	// Get the inital values for height and width when the page is loaded...
	$('#skrollr-ui-height-indicator').html($window.height() + 'px');
	$('#skrollr-ui-width-indicator').html($window.width() + 'px');
	
	// We only want to add the scroll indicator if we are on a skrollr page...otherwise it's kinda useless :)
	if ($('.view-id-skrollr').length) {
	  // Set the initial value
	  $('#skrollr-ui-scroll-indicator').html($window.scrollTop() + 'px');
	  $window.scroll(function() {
		// ...then get the value as the page is actively scrolled
		$('#skrollr-ui-scroll-indicator').html($window.scrollTop() + 'px');
	  });
	}
	else {
	  // Add the 'element-invisible' class to hide the box
	  $('#skrollr-ui-scroll-indicator').addClass('element-invisible');
	}
	$window.resize(function() {
	  // ... then get the value when the window is resized
	  $('#skrollr-ui-height-indicator').html($window.height() + 'px');
	  $('#skrollr-ui-width-indicator').html($window.width() + 'px');
	});
    }
  }
})(jQuery);