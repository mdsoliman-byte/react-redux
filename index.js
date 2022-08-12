const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";
const data = {
    name: "SHAKIL",
    age: 21,
    adderss: "DHAKA , BAngladesh "
}

//Create A State 
const countState = {
    count: 0,
};
const userState = {
    users: [{ name: "Shakil" }]
}


//Create A  Action

const incrementAction = () => {
    return {
        type: INCREMENT,
    }
}
const decrementAction = () => {
    return {
        type: DECREMENT,
    }
}
const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user,
    }
}
// Increment Counter
// Decrement Counter 
// Create A Reduser 
const counterReducer = (state = countState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,

            }

        default:
            state;
    }
}





