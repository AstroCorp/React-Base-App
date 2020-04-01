export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';

export const GET_REPOS = 'GET_REPOS';
export const GET_REPOS_SUCCESS = 'GET_REPOS_SUCCESS';
export const GET_REPOS_FAIL = 'GET_REPOS_FAIL';

const initialState = {
	count: 0,

	loading: false,
	error: '',
	repos: [],
};

export default (state = initialState, action: any) => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				count: ++state.count,
			};

		case DECREMENT:
			return {
				...state,
				count: --state.count,
			};

		case GET_REPOS:
			return { ...state, loading: true };

		case GET_REPOS_SUCCESS:
			console.log(action.payload.data);
			return {
				...state,
				loading: false,
				repos: action.payload.data
			};

		case GET_REPOS_FAIL:
			return {
				...state,
				loading: false,
				error: 'Error al buscar los repositorios'
			};

		default:
			return state;
	}
}

export const increment = () => {
	return {
		type: INCREMENT
	}
}

export const decrement = () => {
	return {
		type: DECREMENT
	}
}

export function listRepos() {
	return {
		type: GET_REPOS,
		payload: {
			request: {
				url: ''
			}
		}
	};
}