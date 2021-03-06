import React, { Component } from "react";
import { AsyncStorage } from "react-navigation";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
	createStackNavigator,
	createMaterialTopTabNavigator
} from "react-navigation";

// Navigators
import { MainNavigator } from "./src/navigation";

import {
	SearchUsersScreen,
	SearchPhotosScreen,
	SearchCollectionsScreen
} from "./src/screens";

// Components
import ProfileHeader from "./src/components/ProfileHeader";
import MainHeader from "./src/components/MainHeader";

// Redux
import reducer from "./src/reducers/reducer";
import { fetchAll } from "./src/actions";

const INITIAL_STATE = {
	searchResults: {
		photos: [],
		users: [],
		collections: []
	},
	collectionPhotos: [],
	newPhotos: [],
	featuredPhotos: [],
	collections: []
};

const logger = store => next => action => {
	console.log("Dispatching", action);
	console.log("Old state", store.getState());
	let result = next(action);
	console.log("New state", store.getState());
	return result;
};

const store = createStore(
	reducer,
	INITIAL_STATE,
	applyMiddleware(thunk, logger)
);
store.dispatch(fetchAll());

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<MainNavigator />
			</Provider>
		);
	}
}
