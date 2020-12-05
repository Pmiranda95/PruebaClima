import { createStore, combineReducers,applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import clima from './reducers/reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    clima
});


const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store;