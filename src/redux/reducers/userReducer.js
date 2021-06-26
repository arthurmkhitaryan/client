
const initialState = {
    user: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...initialState,
                user: action.payload
            }
        case 'SET_USER':
            return {
                ...initialState,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                ...initialState,
                user: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;