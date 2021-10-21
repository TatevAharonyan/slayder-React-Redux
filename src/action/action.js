import { SET_CHOOSE } from "../constatn/constatnt"


export const setChoose = value =>{
    return {
        type: SET_CHOOSE,
        value :value,
    }
}