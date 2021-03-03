import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';

const rootReducer = (history: History) => combineReducers({
	exampleReducer,
	router: connectRouter(history)
});

export default rootReducer;
