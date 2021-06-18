export function loginUser (user) {
    return dispatch => {
        dispatch({
            type: 'LOGIN_SUCCESS',
            payload: user,
        })
    };
}