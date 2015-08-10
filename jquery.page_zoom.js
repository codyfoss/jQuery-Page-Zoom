/*!
 * jQuery Page Zoom Plugin v1.1
 *
 * Description:
 * Allow the user to zoom in or out on the page using links or buttons (anything that will accept an onClick event).
 *
 */

(function( $ ){

	$.page_zoom = function( options ) {

		var settings = {
			max_zoom: 1.5,
			min_zoom: .5,
			zoom_increment: .1,
			current_zoom: 1,
			selectors: {
				zoom_in: '.zoom_in',
				zoom_out: '.zoom_out',
				zoom_reset: '.zoom_reset'
			}
		};
		var cookies_available = false;

		var methods = {

			// set up
		    init : function( options ) {

				if($.isArray(options)){ // if an array was sent, merge it with settings

					settings = $.extend( settings, options);

				}

				if(typeof(Cookies) != 'undefined'){

					cookies_available = true

				}

				if(cookies_available && Cookies.get('page_zoom') == null){

					Cookies.set('page_zoom', 1);

				} else {

					if(cookies_available) {

						settings.current_zoom = parseFloat(Cookies.get('page_zoom'));

					} else {

						settings.current_zoom = 1;

					}

					if(settings.current_zoom != 1){ // only set zoom if it's not the default zoom
						methods.set_zoom(settings.current_zoom);
					}
				}

				// attached zoom functions to page elements
				$(settings.selectors.zoom_in).bind('click', methods.zoom_in);
				$(settings.selectors.zoom_out).bind('click', methods.zoom_out);
				$(settings.selectors.zoom_reset).bind('click', methods.zoom_reset);

		    },

		    set_zoom : function( zoom_level ) {

				$('body').css({
					'zoom': zoom_level,
					'-moz-transform': 'scale(' + zoom_level + ')',
					'-moz-transform-origin': '0 0'
				});

				settings.current_zoom = zoom_level;

				if(cookies_available){

					Cookies.set('page_zoom', zoom_level);

				}
		    },

		    zoom_in : function( ) {

				var new_zoom = parseFloat(settings.current_zoom + settings.zoom_increment);

				if(new_zoom < settings.max_zoom) { // don't zoom past the minimum zoom setting
					methods.set_zoom(new_zoom);
				} else {
					methods.set_zoom(settings.max_zoom);
				}
		    },

		    zoom_out : function( ) {

				var new_zoom = parseFloat(settings.current_zoom - settings.zoom_increment);

				if(new_zoom > settings.min_zoom) { // don't zoom past the minimum zoom setting
					methods.set_zoom(new_zoom);
				} else {
					methods.set_zoom(settings.min_zoom);
				}
		    },

		    zoom_reset : function( ) {

				methods.set_zoom(1);
		    }
		};

		methods.init();

	};
})( jQuery );
