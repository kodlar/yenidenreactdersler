



function combineReducer(currentState, action){
		  var default_state = {count:0 ,sum:3}
		  var next_state = Object.assign({}, currentState)
		  
		  next_state = {
			  count :counter(next_state.count, action),
			  sum : sum(next_state.sum, action)
		  }
		  return next_state;
		  
		 
	  }