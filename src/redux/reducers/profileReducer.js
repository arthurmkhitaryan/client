const initialState = {
    displayBlock: true
}

const profileReducer = function (state = initialState, action) {
        switch (action.type) {
            case 'BTN-SET-DISPLAY':
                return {
                    ...initialState,
                    displayBlock: action.payload
                }
            default:
                return state;
        }
}

export default profileReducer;
