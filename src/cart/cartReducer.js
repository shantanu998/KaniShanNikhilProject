import cart from "../cart";
import _ from "lodash"

const initialState = {
    
    prod : [],
    idi : 0
};


const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'ADD': 
         var cartitem = _.cloneDeep(action.value);
         cartitem.cid= newState.idi+1;
            {console.log(cartitem)}
            newState.idi=newState.idi+1;
            newState.prod.push(cartitem);
           {console.log(newState.prod)}

            break;
        
        case 'DEL': 
        {console.log(newState.prod)}
       
        for(var i = newState.prod.length - 1; i >= 0; i--) {
            {console.log(88)}
            
            
            if(newState.prod[i].cid === action.payload.id) {
                

                newState.prod.splice(i, 1);
            }
            
        }
        {console.log(newState.prod)}
        
        
            break;
    }
    return newState;
};

export default reducer;