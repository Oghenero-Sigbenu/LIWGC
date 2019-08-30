import {GET_TOPIC_BY_ID,GET_TOPICS,CREATE_TOPIC, START} from "../actions/types";

const INITIAL = {
    isSubmitting: false
    // topics: null
}

export default (state = INITIAL, action) => {
    const { type, payload } = action;
    switch (type) {
        case START:
            return {
                ...state,
                isSubmitting: payload,
                created: false
            }
        case CREATE_TOPIC:
            return {
                ...state,
                created: true,
                isSubmitting: false
            }
        case GET_TOPICS:
            return{
                ...state,
                topics: payload
            }
        case GET_TOPIC_BY_ID:
            return{
                ...state,
                topic: payload
            }
        default:
            return state
    }
}
