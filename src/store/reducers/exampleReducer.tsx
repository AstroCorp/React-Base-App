import { INCREMENT, DECREMENT, GET_REPOS, GET_REPOS_SUCCESS, GET_REPOS_FAIL } from '../actions/actionTypes';

const initialState = {
	count: 0,

	loading: false,
	error: '',
	repos: [],
};

const exampleReducer = (state = initialState, action: any) => {
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

export default exampleReducer;
