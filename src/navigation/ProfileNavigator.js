import React from "react";
import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";

// Screens
import { MyPhotosScreen, MyLikesScreen, MyCollectionsScreen } from "../screens";

// Components
import ProfileHeader from "../components/ProfileHeader";

const ProfileScreenNavigator = createMaterialTopTabNavigator(
  {
    MyPhotosScreen: {
      screen: MyPhotosScreen,
      navigationOptions: {
        title: "Photos"
      }
    },
    MyLikesScreen: {
      screen: MyLikesScreen,
      navigationOptions: {
        title: "Likes"
      }
    },
    MyCollectionsScreen: {
      screen: MyCollectionsScreen,
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
const ProfileNavigationWrapper = createStackNavigator({
  Profile: {
    screen: ProfileScreenNavigator,
    navigationOptions: {
      header: <ProfileHeader />
    }
  }
});

export default ProfileNavigationWrapper;
