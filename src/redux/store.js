import {createStore, combineReducers} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import valueCellReducer from './reducers/valueCellReducer';


const rootReducer = combineReducers({
    cellValue: valueCellReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;