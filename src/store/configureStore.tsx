import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './reducers';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

export const history = createBrowserHistory();

const configureStore = (preloadedState?: any) => {
	const client = axios.create({
		baseURL: 'https://api.github.com/users/AstroCorp/repos',
		responseType: 'json',
	});
	
	const windowRedux: any = window;
	const composeEnhancer: typeof compose = windowRedux.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const middleware = [
		axiosMiddleware(client),
		routerMiddleware(history)
	];

  	const store = createStore(
	    rootReducer(history),
	    preloadedState,
	    composeEnhancer(
	    	applyMiddleware(...middleware),
	    ),
	);

  	// Hot reloading
  	if (module.hot) {
  	  	// Enable Webpack hot module replacement for reducers
  	  	module.hot.accept('./reducers', () => {
  	    	store.replaceReducer(rootReducer(history));
  	  	});
  	}

  	return store;
}

export default configureStore;
