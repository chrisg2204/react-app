const LAYOUT_ACTIVE = 'LAYOUT_ACTIVE';
const SESSION_ACTIVE = 'SESSION_ACTIVE';

const layoutActive = (string) => {
    return {
        type : LAYOUT_ACTIVE,
        payload : string
    };
};

const sessionActive = (object) => {
    return {
        type : SESSION_ACTIVE,
        payload : object
    };
};

const MainActionThunk = (action, newState) => {
    return (dispatch, getState) => {
        if (action === 'layoutActive') {
            dispatch(layoutActive(newState));
        } else if (action === 'sessionActive') {
            dispatch(sessionActive(newState));
        }
    };
};

export default MainActionThunk;