import {
	search,
	searchPhotos,
	searchUsers,
	searchCollections
} from "../../api";
import {
	SEARCH,
	SEARCH_PHOTOS,
	SEARCH_USERS,
	SEARCH_COLLECTIONS,
	SEARCH_ERROR
} from "./types";

export const getSearch = query => async dispatch => {
	try {
		const searchResults = await search(query);
		dispatch({ type: SEARCH, payload: searchResults });
	} catch (e) {
		dispatch({ type: SEARCH_ERROR, payload: "Search Error :/" });
	}
};

export const getPhotos = query => async dispatch => {
	try {
		const searchResults = await searchPhotos(query);
		dispatch({ type: SEARCH_PHOTOS, payload: searchResults });
	} catch (e) {
		dispatch({ type: SEARCH_ERROR, payload: "Search Error :/" });
	}
};

export const getUsers = query => async dispatch => {
	try {
		const searchResults = await searchUsers(query);
		dispatch({ type: SEARCH_USERS, payload: searchResults });
	} catch (e) {
		dispatch({ type: SEARCH_ERROR, payload: "Search Error :/" });
	}
};

export const getCollections = query => async dispatch => {
	try {
		const searchResults = await searchCollections(query);
		dispatch({ type: SEARCH_COLLECTIONS, payload: searchResults });
	} catch (e) {
		dispatch({ type: SEARCH_ERROR, payload: "Search Error :/" });
	}
};
