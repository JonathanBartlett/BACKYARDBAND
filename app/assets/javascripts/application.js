// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function(){
	$('.submit').click(function() {
		$(this).closest('form').submit();
	});
});
$(function(){
	$('.artist-toggle').click(function() {

				$('.artist-link').toggleClass('display');
				$('.slicknav_menu.artist-link').toggleClass('display');

	});
});

$(function(){
	$('.audience-toggle').click(function() {

		$('.audience-link').toggleClass('display');
		$('.slicknav_menu.audience-link').toggleClass('display');

	});
});

$(function(){
	$('.slicknav_nav > .audience-toggle.slicknav_txtnode').click(function() {

		$('.slicknav_nav > .audience-link').toggleClass('display');

	});
});
$(function(){
	$('.nav-collapse').slicknav();
});