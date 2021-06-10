//import action type
import {ADD_TASK,DELETE_TASK,EDIT_TASK,DONE_TASK} from '../const/const'

export const addTask =(payload)=>{
    return {
        type:ADD_TASK,
        payload
    }
}

export const deleteTask =(payload)=>{
    return {
        type:DELETE_TASK,
        payload
    }
}

export const editTask =(payload)=>{
    return {
        type:EDIT_TASK,
        payload
    }
}
export const doneTask =(payload)=>{
    return {
        type:DONE_TASK,
        payload
    }
}