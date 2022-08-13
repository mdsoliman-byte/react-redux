const { createStore } = require("redux")

// State 
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET = "RESET"
const inshiallState = {
    count: 0,
}
// Increment , decrement , reset 
// Reducer 

const incrementAction = () => {
    return {
        type: INCREMENT
    }
}
const decrementAction = () => {
    return {
        type: DECREMENT
    }
}
const resetAction = () => {
    return {
        type: RESET
    }
}


const counterReducer = (state = inshiallState, action) => {
    if (action.type === INCREMENT) {
        return {
            ...state,
            count: state.count + 1,
        }
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            count: state.count - 1,
        }
    } else if (action.type === RESET) {
        return {
            ...state,
            count: 0,
        }
    }
    else {
        return state
    }

}

const store = createStore(counterReducer)
store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(decrementAction())
store.dispatch(resetAction())