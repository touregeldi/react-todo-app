import { combineReducers, createStore, applyMiddleware,compose } from "redux"
import todoReducer from '../reducers/todo'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = () => {
    const store = createStore(
        combineReducers({
            todo: todoReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}

export default store;