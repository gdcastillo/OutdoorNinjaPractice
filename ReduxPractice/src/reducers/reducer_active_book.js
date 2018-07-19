//state argument is NOT application state,
//it's only the state that this reducer is responsible for

//the passed in state keeps on flowing into this function

//state needs to be set equal to null for the initial render, so this doesn't
//return undefined
export default function(state = null, action){
    switch(action.type) {
    
    case 'BOOK_SELECTED':
        return action.payload;
    }

    return state;
}