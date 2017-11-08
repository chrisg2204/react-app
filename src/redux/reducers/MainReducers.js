const INITIAL_STATE_MAIN = {
    layout : '',
    session : []
};

const MainReducer = (state = INITIAL_STATE_MAIN, action) => {
    switch(action.type) {
        case 'LAYOUT_ACTIVE' : {
            return Object.assign({}, state, {
                layout : action.payload
            });
        }
        case 'SESSION_ACTIVE' : {
            return Object.assign({}, state, {
                session : state.session.concat(action.payload)
            });
        }
        default : {
            return state
        }
    }
};

export default MainReducer;