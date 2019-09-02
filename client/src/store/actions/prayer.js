import axios from "../../utils/axios.base";
import {CRETAEPRAYER,FAILED, START} from "./types";

export const start = () => {
    return {
        type: START,
        payload: {
            isSubmitting: true
        }
    }
};

export const failed = (msg) => {
    return{
        type: FAILED,
        payload: msg
    }
};
export const createPrayerSuccess = (data) => {
    return{
        type: CRETAEPRAYER,
        payload: data
    }
};
export const prayer = (prayer) => {
    return(dispatch) => {
        dispatch(start())
            axios.post("/prayer/create", prayer)
                .then(res => {
                    dispatch(createPrayerSuccess(res.data))
                })
                .catch(err => console.log(err.response))
    }
};