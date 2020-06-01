import {UPDATE_PORTION_NUMBER, LOG_IN} from '../constants/constants'

const actionCreator = {
    logIn: logIn,
    updatePortionNumber: updatePortionNumber
};

function logIn() {
    return {type: LOG_IN};
}

function updatePortionNumber(portionNumber) {
    return {type: UPDATE_PORTION_NUMBER, portionNumber: portionNumber}
}

export default actionCreator;