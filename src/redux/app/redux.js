const initialState = {
    user: null,
    toastMessage: '',
};

export const Action = {
    Types: {
        UPDATE_STATE: '@APP/UPDATE_STATE',
        CLEAR_STORE: '@APP/CLEAR_STORE', // set to initial state

        AUTH_TOUCH: "AUTH_TOUCH",
        LOGOUT: "LOGOUT",
    },
    Creators:{
        updateState: (payload) => ({
            type : Action.Types.UPDATE_STATE,
                payload
        }),
        clearStore: () => ({
            type: Action.Types.CLEAR_STORE
        }),
        authTouch: () => ({
            type: Action.Types.AUTH_TOUCH
        }),
        logout: () => ({
            type: Action.Types.LOGOUT
        }),
    }
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        default: return state;
        case Action.Types.UPDATE_STATE :
            return {
                ...state,
                ...action.payload
            };
        case Action.Types.CLEAR_STORE:
            return initialState;
    }
}

