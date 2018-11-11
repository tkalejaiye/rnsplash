import React from "react";
import { StyleSheet, View, Text } from "react-native";
import SearchHeader from "../components/SearchHeader";
//import { SearchPageNavigator } from "../navigation/SearchNavigator";

import {
	createMaterialTopTabNavigator,
	createStackNavigator
} from "react-navigation";

// Screens
import SearchPhotosScreen from "./SearchPhotosScreen";
import SearchCollectionsScreen from "./SearchCollectionsScreen";
import SearchUsersScreen from "./SearchUsersScreen";

//import SearchHeader from "../components/SearchHeader";

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

const SearchScreen = () => (
	<View style={styles.container}>
		<SearchHeader />
		<SearchPageNavigator />
	</View>
);

export default SearchScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff"
	}
});
