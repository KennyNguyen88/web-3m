import {combineReducers} from "redux";
import {SAY_HI, SAY_YEAH, PING, PONG} from "./actions";

/* State Shape
{
    appReducer: string,
    appTestReducer: boolean
}
 */

const appReducer = (state = {}, action) => {
    switch(action.type){
        case SAY_HI:
            return action.payload;
        case SAY_YEAH:
            return action.payload;
        default:
            return state;
    }
};

const appTestReducer = (state = {isPinging: false}, action) => {
    switch(action.type){
        case PING:
            return { isPinging: true };
        case PONG:
            return { isPinging: false };
        default:
            return state;
    }
};


export default combineReducers({
    appReducer,
    appTestReducer
});