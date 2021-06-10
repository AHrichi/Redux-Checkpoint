//import action type
import {ADD_TASK,DELETE_TASK,EDIT_TASK,DONE_TASK} from '../const/const'


// initial state

const initialState={
    todos:[]
}

//creaction reducer

const todoReducer=(state=initialState,{type,payload})=>{
switch (type) {
    case ADD_TASK:
        return {...state,todos:[...state.todos,payload]}
    case DELETE_TASK:
        return {...state,todos:state.todos.filter(el=>el.id!==payload)}
        
    case EDIT_TASK:
        return {...state,todos:state.todos.map(el=>el.id===payload.id?{...el,text:payload.text}:el)}
    case DONE_TASK:
        return {...state,todos:state.todos.map(el=>el.id===payload?{...el,isDone:!el.isDone}:el)}
    default:
        return state
}
}


export default todoReducer;