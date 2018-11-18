define(function(require, exports, module){
	var flight = require('flight');
	var str = "shengliang";
	console.log(flight);
	exports.data = str + flight.data;
})