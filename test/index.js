const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT"
const RESET = "RESET"


// State
const initalState = {
    count: 0
}


// Action 
const counterAction = () => {
    return { type: INCREMENT }

}

const counterActionDecrement = () => {
    return {
        type: DECREMENT
    }
}
const counterReset = () => {
    return {
        type: RESET
    }
}

// 

const counterReduser = (state = initalState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }

        default:
            state;
    }
}



// Store 
const store = createStore(counterReduser);
store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(counterAction())