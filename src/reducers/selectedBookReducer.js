import { SELECT_BOOK, DESELECT_BOOK } from "../actions";

export default (state = { }, action) => {
    console.log('reducer select book -> ');
    console.log(state);
    console.log('action -> ');
    console.log(action);
    switch (action.type) {
        case SELECT_BOOK:
            
            return action.payload;
        
        case DESELECT_BOOK:

            return {};
        default:
            return state;
    }
}