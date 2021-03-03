import { INCREMENT, DECREMENT, GET_REPOS } from './actionTypes';

export const increment = () => {
	return {
		type: INCREMENT,
	};
}

export const decrement = () => {
	return {
		type: DECREMENT,
	};
}

export function listRepos() {
	return {
		type: GET_REPOS,
		payload: {
			request: {
				url: '',
			},
		},
	};
}
