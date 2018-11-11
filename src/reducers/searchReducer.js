import { SEARCH, SEARCH_ERROR } from "../actions/types";

const INITIAL_STATE = {
	searchResults: {
		photos: [],
		users: [],
		collections: []
	}
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SEARCH:
			return {
				searchResults: { ...action.payload }
			};
		default: {
			return {
				...state
			};
		}
	}
}
