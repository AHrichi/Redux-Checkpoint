//import create store
import {createStore} from 'redux'

//import reducer

import todoReducer from '../Reducers/Reducer'

//creation store


const store = createStore(todoReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store