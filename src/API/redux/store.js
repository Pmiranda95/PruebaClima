import { createStore, combineReducers,applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import clima from './reducers/reducerClima';
import location from './reducers/reducerLocation';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    clima,
    location
});


const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store;