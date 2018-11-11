import React from "react";
import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";

// Screens
import {
  NewScreen,
  FeaturedScreen,
  CollectionsScreen,
  SearchCollectionsScreen,
  ViewPhotoScreen
} from "../screens";

// Headers
import SearchHeader from "../components/SearchHeader";
import MainHeader from "../components/MainHeader";

// Navigators
import SearchNavigator from "./SearchNavigator";

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

const TestWrapper = createStackNavigator({
  Main: {
    screen: HomeScreenNavigator,
    navigationOptions: ({ navigation }) => ({
      header: <MainHeader navigation={navigation} />
    })
  },
  ViewPhoto: {
    screen: ViewPhotoScreen
  }
});

// Wrapping the navigator in a stack navigator to allow for the custom header
const HomeScreenNavigationWrapper = createStackNavigator(
  {
    Home: {
      screen: TestWrapper,
      navigationOptions: {
        header: null
      }
    },
    Search: {
      screen: SearchNavigator,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    mode: "modal"
    //headerMode: "none"
  }
);

export default HomeScreenNavigationWrapper;
