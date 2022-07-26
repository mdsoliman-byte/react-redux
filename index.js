const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const ADD_USER = "ADD_USER"



// State 
const initialCounterState = {
    count: 0,
}
const initialUserState = {
    users: [{ name: "Soliman" }],
}



// Action -> Object -> type , Payload 
//   INCREMENT COUNTER 
const incrementCounterAction = () => {
    return {
        type: ADD_USER,
        payload: { name: "SHAkl" }

    }
}
const decrementCounterAction = () => {
    return {
        type: DECREMENT

    }
}
const addUser = () => {
    return {
        type: DECREMENT

    }
}
// incrementCounterAction()
//   DECREMENT COUNTER

// 1. State
// 2. dispatch -> Action 
// 2.1 reducer
// 3. update store