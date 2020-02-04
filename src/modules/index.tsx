import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter from './counter';
import { History } from 'history';

export default (history: History) => combineReducers({
  router: connectRouter(history),
  counter
});