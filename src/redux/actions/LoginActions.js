const LOGIN_ON = 'LOGIN_ON';

const LoginAction = (boolean) => {
    return {
        type : LOGIN_ON,
        payload : boolean
    };
};

const LoginActionThunk = (item, loginStatus) => {
    return (dispatch, getState) => {
        dispatch(LoginAction(loginStatus));
    };
};

export default LoginActionThunk;