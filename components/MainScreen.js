import React from "react";
import { Platform } from "react-native";
import { createTabNavigator } from "react-navigation";
import Home from "./AppTabs/Home";
import Likes from "./AppTabs/Likes";
import Profile from "./AppTabs/Profile";
import Search from "./AppTabs/Search";

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }
  render() {
    return <AppTabNavigator />;
  }
}

export default MainScreen;

MainScreen.navigationOptions = {
  // headerTitleStyle: { textAlign: "center", flex: 1 },
  // headerLeft: (
  //   <Icon name="ios-camera-outline" style={{ paddingLeft: 10, fontSize: 35 }} />
  // ),
  // title: "Instagram",
  // headerRight: (
  //   <Icon name="ios-send-outline" style={{ paddingRight: 10, fontSize: 35 }} />
  // )
  header: null
};

const AppTabNavigator = createTabNavigator(
  {
    HomeTab: {
      screen: Home
    },
    SearchTab: {
      screen: Search
    },
    LikesTab: {
      screen: Likes
    },
    ProfileTab: {
      screen: Profile
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: "white"
          }
        })
      },
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      showLabel: false,
      showIcon: true
    }
  }
);
