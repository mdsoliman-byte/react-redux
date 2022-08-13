const { createStore } = require("redux")

// State 
const initalState = {
    count: 0,

}
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE"

// Action 
const increment_by_value = (val) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: val
    }
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case INCREMENT_BY_VALUE:

            return {
                ...state,
                count: action.payload + state.count

            }

        default:
            state;
    }

}
const store = createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(increment_by_value(10))
store.dispatch(increment_by_value(10))
store.dispatch(increment_by_value(10))
store.dispatch(increment_by_value(10))
store.dispatch(increment_by_value(10))