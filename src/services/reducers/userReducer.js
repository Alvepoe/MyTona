import {LOG_IN} from '../constants/constants'

const INITIAL_STATE = {
    isLoggedIn: false
};

const userReducer = (state = INITIAL_STATE, action) => {

    if (action.type === LOG_IN) {

        return {
            isLoggedIn: true
        };

    }
    return state;
};

export default userReducer;


