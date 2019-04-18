//action types
export const SAY_HI = 'app/SAY_HI';
export const SAY_YEAH = 'app/SAY_YEAH';
export const PING = 'app/PING';
export const PONG = 'app/PONG';


//actions
const sayHi = () => {

    let hello = 'Hello from app';

    return {
        type: SAY_HI,
        payload: hello
    }

};

const sayYeah = () => {
    let yeah = "Say Yeah from app";

    return {
        type: SAY_YEAH,
        payload: yeah
    }
};

const doPing = () => ({ type: PING});
const doPong = () => ({ type: PONG});


export default {
    sayHi,
    sayYeah,
    doPing,
    doPong
};