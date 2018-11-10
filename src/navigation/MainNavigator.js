import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

// Navigators
import HomeNavigator from "./HomeNavigator";
import ProfileNavigator from "./ProfileNavigator";

// Screens
import { CameraScreen } from "../screens";

// Headers
import SearchHeader from "../components/SearchHeader";

const MainNavigator = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeNavigator
    },
    ProfileScreen: {
      screen: ProfileNavigator,
      navigationOptions: {
        title: "Profile"
      }
    }
  },
  {
    mode: "modal",
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "HomeScreen") {
          iconName = "md-home";
        } else if (routeName === "ProfileScreen") {
          iconName = "md-person";
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#000",
      inactiveTintColor: "#c9c9c9",
      showLabel: false
    }
  }
);

export default MainNavigator;
