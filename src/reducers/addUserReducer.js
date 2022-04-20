


const userReducer = (state = {}, action) => {
    switch(action.type){
        case 'ADD_INFORMATION':
            return {
                name : action.payload.name,
                email: action.payload.email,
                password: action.payload.password
            }
            default:
                return state;
    }
}

export default userReducer