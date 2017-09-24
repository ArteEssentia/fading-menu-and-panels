// JavaScript Document

$(document).ready(function () {
	"use strict";
	
	// declare variables
	var overlay = $("#overlay");
	var menu = $("#menu");
	var isOpen = false;
	var closeBtn = $("#close");
	
	// when the hamburger menu is clicked
	menu.click( function() {
		// if isOpen is true, the menu is open, so we close it
		if(isOpen) {
			overlay.fadeOut();
			isOpen = false;
		// else the menu is closed, so we open it
		} else {
			overlay.fadeIn();
			isOpen = true;
		}
	});
	
	// when the close button in the menu is clicked
	closeBtn.click( function() {
		overlay.fadeOut();
		isOpen = false;
	});
	
	// open a panel when any of the navbar icons is hovered
	$("#navbar li").hover(function() {
			$(this).find('.activebox').fadeToggle();
	});
});
