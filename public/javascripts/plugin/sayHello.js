(function(factory){
	if(typeof define === 'function'){
		define('jquerySayHello',['jquery'], function(){
			return factory
		})
	}else{
		factory(jQuery);
	}
}(function($){
	console.log('init');
	$.sayHello = function(){
		console.log("Hello");
	}
}))

// (function(factory){
// 	if(typeof define === 'function'){
// 		define('jquerySayHello',['jquery'], function(require,exports,moudles){
// 			factory(require('jquery'));
// 			return jQuery
// 		})
// 	}else{
// 		factory(jQuery);
// 	}
// }(function($){
// 	console.log('init');
// 	$.sayHello = function(){
// 		console.log("Hello");
// 	}
// }))