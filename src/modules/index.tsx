import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import counter from './counter';

export default (history: History) => combineReducers({
  router: connectRouter(history),
  counter
});
