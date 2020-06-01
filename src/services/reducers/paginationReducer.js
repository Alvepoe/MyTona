import {UPDATE_PORTION_NUMBER} from '../constants/constants'


const INITIAL_STATE = {
    portionNumber: 1
};

const userReducer = (state = INITIAL_STATE, action) => {

    if (action.type === UPDATE_PORTION_NUMBER) {
        const portionNumber = action.portionNumber;

        return {
            ...state,
            portionNumber
        };

    }
    return state;
};

export default userReducer;


