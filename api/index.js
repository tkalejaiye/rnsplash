import Unsplash, { toJson } from "unsplash-js/native";
import { config } from "../config";

const unsplash = new Unsplash({
	applicationId: config.applicationId,
	secret: config.secret,
	callbackUrl: config.callbackUrl
});

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
	"public",
	"read_user",
	"write_user",
	"read_photos",
	"write_photos"
]);

export const getNewPhotos = () => {
	return unsplash.photos
		.listPhotos(1, 15, "latest")
		.then(toJson)
		.then(json => {
			let photos = [];
			json.forEach(picture => {
				photos.push(picture);
			});
			return photos;
		});
};

export const getFeaturedPhotos = () => {
	return unsplash.photos
		.listCuratedPhotos(1, 15, "latest")
		.then(toJson)
		.then(json => {
			let photos = [];
			json.forEach(picture => {
				photos.push(picture);
			});
			return photos;
		});
};

export const getCollections = () => {
	return unsplash.collections
		.listCollections(1, 10, "popular")
		.then(toJson)
		.then(json => {
			let collections = [];
			json.forEach(collection => {
				collections.push(collection);
			});
			return collections;
		});
};

export const searchPhotos = query => {
	return unsplash.search
		.photos(query, 1)
		.then(toJson)
		.then(json => {
			let photos = [];
			json.results.forEach(picture => {
				photos.push(picture);
			});
			return photos;
		});
};

export const searchUsers = query => {
	return unsplash.search
		.users(query, 1)
		.then(toJson)
		.then(json => {
			let users = [];
			json.results.forEach(user => {
				users.push(user);
			});
			return users;
		});
};

export const searchCollections = query => {
	return unsplash.search
		.collections(query, 1)
		.then(toJson)
		.then(json => {
			let collections = [];
			json.results.forEach(collection => {
				collections.push(collection);
			});
			return collections;
		});
};

export const search = query => {
	let completeSearch = {};
	return searchPhotos(query)
		.then(photos => (completeSearch["photos"] = photos))
		.then(() => searchUsers(query))
		.then(users => (completeSearch["users"] = users))
		.then(() => searchCollections(query))
		.then(collections => (completeSearch["collections"] = collections))
		.then(() => {
			return completeSearch;
		});
};

export const getCollectionPhotos = (id, page, photosPerPage, orderBy) => {
	return unsplash.collections
		.getCollectionPhotos(id, page, photosPerPage, orderBy)
		.then(toJson)
		.then(json => {
			let photos = [];
			json.forEach(photo => {
				photos.push(photo);
			});
			return photos;
		});
};

export const onLoad = () => {
	let loadedResults = {};
	return getNewPhotos()
		.then(newPhotos => (loadedResults["photos"] = newPhotos))
		.then(() => getFeaturedPhotos())
		.then(featuredPhotos => (loadedResults["featured"] = featuredPhotos))
		.then(() => getCollections())
		.then(collections => (loadedResults["collections"] = collections))
		.then(() => {
			return loadedResults;
		});
};
