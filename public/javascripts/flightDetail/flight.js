define(function(require, exports, module){
	var str = "HelloWorld";
	var mail = "";
	setTimeout(function(){
		mail = require.async('mail/mail');
		str = str + mail.data;
		console.log('111');
	},5000)
	console.log(str);
	// var jquerySayHello = require('jquerySayHello');
	// jquerySayHello.sayHello();
	exports.data = str;
})