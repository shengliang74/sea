define(function(require, exports, module){
	var passenger = require('passenger');
	// var $ = require('jquery.3.3.1');
	var $ = require('jquery');
	// var jquerySayHello = require('jquerySayHello');
	// console.log(jquerySayHello($));
	// console.log(jquerySayHello($));
	// console.log($.sayHello)
	// $.sayHello();
	// $.sayHello();
	$("body").append(passenger.data);
	exports.data = "priceaaa";
})