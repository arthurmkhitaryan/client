import { LOGIN_SUCCESS }  from '../../constants/userConstants';

const initialState = {
    user: {},
    isLoggedIn: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...initialState,
                isLoggedIn: true,
                user: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;