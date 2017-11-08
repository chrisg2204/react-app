const INITIAL_STATE_LOGIN = {
    isLoged : false,
    date : []
};

const LoginReducer = (state = INITIAL_STATE_LOGIN, action) => {
    switch(action.type) {
        case 'LOGIN_ON' : {
            return Object.assign({}, state, {
                isLoged : action.payload
            });
        }
        default : {
            return state
        }
    }
};

export default LoginReducer;