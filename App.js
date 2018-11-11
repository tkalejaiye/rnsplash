import React, { Component } from "react";
import { AsyncStorage } from "react-navigation";
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

export default class App extends Component {
	render() {
		return <MainNavigator />;
	}
}
