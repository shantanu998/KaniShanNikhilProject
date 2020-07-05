const initialState = {
    
    prod : []
};


const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'ADD': 
         
            newState.prod.push(action.value);
            
            break;
        
        case 'DEL': 
       
        for(var i = newState.prod.length - 1; i >= 0; i--) {
            if(newState.prod[i].id === action.payload.id) {
                
                newState.prod.splice(i, 1);
            }
            
        }
        {console.log(newState.prod)}
        
        
            break;
    }
    return newState;
};

export default reducer;