import api from "../../repasitory/RepositoryFactory";

export function saveCVs(buffer) {
    // console.log(buffer)
    return () => {
        return api.profile('saveCV', buffer)
            .then(res => {
                console.log(res)
            })
    };
}

export function setDisplay(value) {
    return dispatch => {
        dispatch({
            type: 'BTN-SET-DISPLAY',
            payload: value
        })
    }
}