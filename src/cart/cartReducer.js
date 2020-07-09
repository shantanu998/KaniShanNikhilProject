// import cart from "../cart";
import _ from "lodash"

const initialState = {
    
    prod : [],
    idi : 0
};


const creducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'ADD': 
         var cartitem = _.cloneDeep(action.value);
         cartitem.cid= newState.idi+1;
           
            newState.idi=newState.idi+1;
            newState.prod.push(cartitem);
           {console.log(newState.prod)}
          

            break;
        
        case 'DEL': 
       
       
        for(var i = newState.prod.length - 1; i >= 0; i--) {
           
            
            
            if(newState.prod[i].cid === action.payload.id) {
                

                newState.prod.splice(i, 1);
            }
            
        }
        {console.log(newState.prod)}
        
        
            break;
    }
    return newState;
};

export default creducer;