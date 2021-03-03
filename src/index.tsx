import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store/configureStore';
import App from './views/app';
import * as serviceWorker from './serviceWorker';

import './css/index.css';

const target = document.querySelector('#root');
const store = configureStore();

const renderDOM = () => {
	render(
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<App />
			</ConnectedRouter>
		</Provider>,
		target
	);
};

renderDOM();

serviceWorker.unregister();

// Hot reloading
if (module.hot) {
	// Reload components
	module.hot.accept('./views/app', () => {
		renderDOM();
	});
}
