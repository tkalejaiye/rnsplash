import React from "react";
import {
	createMaterialTopTabNavigator,
	createStackNavigator
} from "react-navigation";

// Screens
import {
	SearchPhotosScreen,
	SearchUsersScreen,
	SearchCollectionsScreen
} from "../screens";

const SearchPageNavigator = createMaterialTopTabNavigator(
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

export default SearchPageNavigator;
