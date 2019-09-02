import axios from "../../utils/axios.base";
import {GET_TOPIC_BY_ID,GET_TOPICS,CREATE_TOPIC, START,FAILED, CHECK_START} from "./types";

export const start = () => {
    return {
        type: START,
        payload: {
            isSubmitting: true
        }
    }
};
export const loading = () => {
    return {
        type: CHECK_START,
      
    }
};
export const failed = (msg) => {
    return{
        type: FAILED,
        payload: msg
    }
};
export const createTopicSuccess = (data) => {
    return{
        type: CREATE_TOPIC,
        payload: data
    }
};

export const getTopicSuccess = (data) => {
    return{
        type: GET_TOPICS,
        payload: data
    }
};
export const getOneTopic = (data) =>{
    return{
        type: GET_TOPIC_BY_ID,
        payload:{ data}
    }
    console.log(data)
};

export const addTopic = (data) => {
    return(dispatch) => {
        dispatch(start())
            axios.post("/forum/create", data)
                .then(res => {
                    dispatch(createTopicSuccess(res.data))
                })
                .catch(err => console.log(err.response))
    }
};
export const getTopics = ( ) => {
    return(dispatch) => {
        axios.get("/forum/get")
            .then(res => {
                dispatch(getTopicSuccess(res.data))
                console.log(res.data)
            })
            .catch(err => console.log(err.response))
    }
};

// export const getOneTopic = (topicId) => {
//     return(dispatch) => {
//             axios.get(`/forum/get/${topicId}`)
//                 .then(res => {
//                     dispatch(getOneTopic(res.data))
//                     console.log(res.data)
//                 })
//                 .catch(err =>{}
//                     //  console.log(err.response)
//                      )
//     }
// };
