
function sum(currentState, action){
	var default_state = 3;
	if(currentState === undefined)
			  {
				  next_state = default_state
				  return next_state;
			  }
	
	switch(action.type)
			  {
	
			      case 'sum':
					  next_state = parseInt(action.a) + parseInt(action.b);
					  return next_state;
					  break;
				  default:
					  next_state = currentState;
					  break
				
			  }
    return next_state;
}