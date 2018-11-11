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

import searchReducer from "./src/reducers/searchReducer";

const INITIAL_STATE = {
	searchResults: {
		photos: [],
		users: [],
		collections: []
	}
};

const logger = store => next => action => {
	console.log("dispatching", action);
	let result = next(action);
	console.log("next state", store.getState());
	return result;
};

const store = createStore(
	searchReducer,
	INITIAL_STATE,
	applyMiddleware(logger, thunk)
);

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<MainNavigator />
			</Provider>
		);
	}
}
