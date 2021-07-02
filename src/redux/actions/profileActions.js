import api from "../../repasitory/RepositoryFactory";

export function saveCVs(cvData) {
    return () => {
        return api.profile('saveCV', cvData)
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