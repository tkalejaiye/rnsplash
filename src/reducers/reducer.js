import {
	SEARCH,
	ERROR,
	GET_COLLECTION_PHOTOS,
	FETCH_ALL
} from "../actions/types";

const INITIAL_STATE = {
	searchResults: {
		photos: [],
		users: [],
		collections: []
	},
	collectionPhotos: []
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SEARCH:
			return {
				...state,
				searchResults: { ...action.payload }
			};
		case GET_COLLECTION_PHOTOS:
			return {
				...state,
				collectionPhotos: [...action.payload]
			};
		case FETCH_ALL:
			return {
				...state,
				newPhotos: [...action.payload.photos],
				featuredPhotos: [...action.payload.photos],
				collections: [...action.payload.collections]
			};
		default: {
			return {
				...state
			};
		}
	}
}
