import {createStore,applyMiddleware} from 'redux';
import promiseMiddleware from './middleware/promiseMiddleware';
import combineReducers from './reducer.js';

let store = createStore(combineReducers,applyMiddleware(promiseMiddleware));
store.subscribe(()=>{
    console.log(store.getState());
})
export default store;