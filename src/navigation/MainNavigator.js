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
import { ViewPhotoScreen, ViewCollectionScreen } from "../screens";

// Headers
import SearchHeader from "../components/SearchHeader";

const BottomTabNavigator = createBottomTabNavigator(
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

const MainNavigator = createStackNavigator(
  {
    Main: {
      screen: BottomTabNavigator,
      navigationOptions: {
        header: null
      }
    },
    ViewPhoto: {
      screen: ViewPhotoScreen
    },
    ViewCollection: {
      screen: ViewCollectionScreen
    }
  },
  {
    mode: "modal"
  }
);

export default MainNavigator;
