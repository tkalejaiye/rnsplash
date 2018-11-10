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
