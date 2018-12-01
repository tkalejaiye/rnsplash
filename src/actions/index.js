import {
	search,
	searchPhotos,
	searchUsers,
	searchCollections,
	getCollectionPhotos,
	onLoad
} from "../../api";
import {
	SEARCH,
	SEARCH_PHOTOS,
	SEARCH_USERS,
	SEARCH_COLLECTIONS,
	ERROR,
	GET_COLLECTION_PHOTOS,
	FETCH_NEW_PHOTOS,
	FETCH_FEATURED_PHOTOS,
	FETCH_COLLECTIONS,
	FETCH_ALL
} from "./types";

export const getSearch = query => async dispatch => {
	try {
		const searchResults = await search(query);
		dispatch({ type: SEARCH, payload: searchResults });
	} catch (e) {
		dispatch({ type: ERROR, payload: "Search Error :/" });
	}
};

export const fetchAll = () => async dispatch => {
	try {
		const data = await onLoad();
		dispatch({ type: FETCH_ALL, payload: data });
	} catch (e) {
		dispatch({ type: ERROR, payload: "Couldn't load photos" });
	}
};

export const getCollection = (
	id,
	page,
	photosPerPage,
	orderBy
) => async dispatch => {
	try {
		const collectionPhotos = await getCollectionPhotos(
			id,
			page,
			photosPerPage,
			orderBy
		);
		console.log("collectionPhotos: ", collectionPhotos);
		dispatch({ type: GET_COLLECTION_PHOTOS, payload: collectionPhotos });
	} catch (e) {
		dispatch({
			type: ERROR,
			payload: "Couldn't get collection's photos :("
		});
	}
};
