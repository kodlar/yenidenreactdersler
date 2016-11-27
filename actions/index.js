

var decrease = function(){
	return { type:'decrement'}
}

var increase = function(){
	return {type:'increase'}
}


var getSum = function(vala,valb){
	return { type:'sum', a:vala, b: valb};
}