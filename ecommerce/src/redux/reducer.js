// Importing actions here
import {CHANGE_TEST} from './actions';

const initialState = {
    test : "This is a test",
    // cart : [{name : "iphone", image : "https://www.imageurl.com", price : 100, quantity : 3}]
}

export const reducer = (state = initialState, action) => {

    switch(action.type){
        case CHANGE_TEST :
            return {...state, test : action.payload};
        default:
            return state;
    }
}