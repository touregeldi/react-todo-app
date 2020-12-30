import { combineReducers, createStore } from "redux"
import todoReducer from '../reducers/todo'

const store = () => {
    const store = createStore(
        combineReducers({
            todo: todoReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        
    )

    return store
}

export default store;