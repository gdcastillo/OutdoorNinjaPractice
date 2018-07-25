import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
    
    switch(action.type){
        case FETCH_WEATHER:
            //return state.concat[action.payload.data];  
            return [action.payload.data, ...state];     //this line is equivalent to above but this is how you add things into an array
    }
    return state;
}