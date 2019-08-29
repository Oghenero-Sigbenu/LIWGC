import {GETPRAYERS,CRETAEPRAYER, START} from "../actions/types";

const INITIAL = {
    isSubmitting: false,
    topics: null
}

export default (state = INITIAL, action) => {
    const { type, payload } = action;
    switch (type) {
        case START:
            return {
                ...state,
                isSubmitting: payload.isSubmitting,
                created: false
            }
        case CRETAEPRAYER:
            return {
                ...state,
                created: true,
                isSubmitting: false
            }
        
        default:
            return state
    }
}
