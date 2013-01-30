jQuery-Page-Zoom-plugin
=======================

Allow the user to zoom in or out on the page using links or buttons (anything that will accept an onClick event).

## General Requirements

You'll need to have these libraries included on your page somewhere:

- jQuery: [http://jquery.com/](http://jquery.com/)
- jquery-cookie: [https://github.com/carhartl/jquery-cookie](https://github.com/carhartl/jquery-cookie)

## Usage

Add jQuery and the jquery-cookie and jQuery Page Zoom plugins to your page.

	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
	<script type="text/javascript" src="./javascript/jquery.cookie.js"></script>
	<script type="text/javascript" src="./javascript/jquery.page_zoom.js"></script>


Set up a few links or buttons on your page that will act as  the controls.

	<ul>
		<li><a href="#" class="zoom_in">Zoom In</a><\li>
		<li><a href="#" class="zoom_out">Zoom Out</a><\li>
		<li><a href="#" class="zoom_reset">Reset Zoom</a><\li>
	<\ul>


Then call the plugin to attach the zoom functions to the links.

	$(document).ready(function() {

		$.page_zoom();

	});

## Options

You can optionally pass an array of options to the function to customize how it works.


	var options = {
		max_zoom: 1.5, // maximum amount you can zoom in. 1.5 = 150% zoom
		min_zoom: .5, // the minimum amount you can zoom out. .5 = 50% zoom
		zoom_increment: .1, // how much each click zooms in/out. So if the current zoom is 1.3, one click of the zoom out link means 1.3 - 0.1 = 1.2. New zoom level is 1.2
		current_zoom: 1, // default zoom. don't set this unless you want to force a zoom level on each page load
		selectors: { 
			zoom_in: '.zoom_in', // the selector for the element(s) that will get the zoom in action for the onclick event
			zoom_out: '.zoom_out', // the selector for the element(s) that will get the zoom out action for the onclick event
			zoom_reset: '.zoom_reset' // the selector for the element(s) that will get the reset zoom action for the onclick event
		}
	};

 	$.page_zoom(options);

## Development

Pull requests are welcome!

## License

This library is being provided as is under an MIT license. See LICENSE.txt for the details of that. 
