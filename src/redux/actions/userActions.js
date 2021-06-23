import api from "../../repasitory/RepositoryFactory";

export function loginUser (credentials) {
    return dispatch => {
        return api.auth("login", credentials)
            .then(({ data }) => {
                localStorage.setItem('_token', data.data.token);
                localStorage.setItem('user', JSON.stringify(data.data.user));

                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: data.data.user,
                })
            })
    };
}

export function registerUser (user) {
    return () => {
        return api.auth('register', user);
    };
}