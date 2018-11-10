import React, { Component } from "react";
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

const TabNavigator = createMaterialTopTabNavigator(
	{
		SearchPhotosScreen: {
			screen: SearchPhotosScreen,
			navigationOptions: {
				title: "Photos"
			}
		},
		SearchCollectionsScreen: {
			screen: SearchCollectionsScreen,
			navigationOptions: {
				title: "Collections"
			}
		},
		SearchUsersScreen: {
			screen: SearchUsersScreen,
			navigationOptions: {
				title: "Users"
			}
		}
	},
	{
		tabBarOptions: {
			activeTintColor: "#000",
			inactiveTintColor: "#303030",
			indicatorStyle: {
				backgroundColor: "#000"
			},
			labelStyle: {
				fontSize: 12
			},
			style: {
				backgroundColor: "#fff"
			}
		}
	}
);

const StackNavigator = createStackNavigator(
	{
		screen: TabNavigator
	},
	{
		navigationOptions: ({ navigation }) => ({
			header: <MainHeader navigation={navigation} />
		})
	}
);

export default class App extends Component {
	render() {
		return <MainNavigator />;
	}
}
