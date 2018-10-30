import React from "react";
import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";

// Screens
import { NewScreen, FeaturedScreen, CollectionsScreen } from "../screens";

// Headers
import SearchHeader from "../components/SearchHeader";

// Navigators
import SearchNavigator from "./SearchNavigator.js";

const HomeScreenNavigator = createMaterialTopTabNavigator(
  {
    NewScreen: {
      screen: NewScreen,
      navigationOptions: {
        title: "New"
      }
    },
    FeaturedScreen: {
      screen: FeaturedScreen,
      navigationOptions: {
        title: "Featured"
      }
    },
    CollectionsScreen: {
      screen: CollectionsScreen,
      navigationOptions: {
        title: "Collections"
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

// Wrapping the navigator in a stack navigator to allow for the custom header(profile)
const HomeScreenNavigationWrapper = createStackNavigator(
  {
    Main: {
      screen: HomeScreenNavigator
    },
    Search: {
      screen: SearchNavigator
    }
  },
  {
    navigationOptions: {
      header: <SearchHeader />
    }
  }
);

export default HomeScreenNavigationWrapper;
