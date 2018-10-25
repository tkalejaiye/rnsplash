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

const MainNavigator = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeNavigator,
      navigationOptions: {
        header: null,
        title: "Home"
      }
    },
    CameraTabScreen: {
      screen: CameraScreen,
      navigationOptions: ({ navigation }) => ({
        header: null,
        tabBarIcon: <Ionicons name="md-camera" size={30} />,
        tabBarOnPress: ({ navigation }) => {
          navigation.navigate("CameraScreen");
        }
      })
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

const CameraModalStack = createStackNavigator(
  {
    MainScreen: {
      screen: MainNavigator
    },
    CameraScreen: {
      screen: CameraScreen
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const NavigationWrapper = createStackNavigator({
  Main: {
    screen: CameraModalStack,
    navigationOptions: {
      header: null
    }
  }
});

export default CameraModalStack;
