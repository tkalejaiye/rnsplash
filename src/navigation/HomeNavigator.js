import React from "react";
import { createMaterialTopTabNavigator } from "react-navigation";

// Screens
import { NewScreen, FeaturedScreen, CollectionsScreen } from "../screens";

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
    },
    style: { paddingTop: 20, backgroundColor: "#fff" }
  }
);

export default HomeScreenNavigator;
