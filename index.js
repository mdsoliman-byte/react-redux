const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"



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
        type: INCREMENT

    }
}
const decrementCounterAction = () => {
    return {
        type: DECREMENT

    }
}
// incrementCounterAction()
//   DECREMENT COUNTER 