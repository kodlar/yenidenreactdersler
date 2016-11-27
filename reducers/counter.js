function counter(currentState, action){
	var default_state = 0;
   
	
	if(currentState === undefined)
			  {
				  next_state = default_state
				  return next_state;
			  }
	
	 switch(action.type)
			  {
				  case 'decrement':
					  next_state = currentState - 1;
					  return next_state;
					  break;
			     case 'increase':
					  next_state = currentState + 1;
					  return next_state;
					  break;
				  default:
					  next_state = currentState;
					  break
			    
				
			  }
    return next_state;
}