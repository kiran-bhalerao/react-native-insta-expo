import React from "react";
import { createStackNavigator } from "react-navigation";
import MainScreen from "./components/MainScreen";

export default class App extends React.Component {
  render() {
    return <AppStackNaviator />;
  }
}

const AppStackNaviator = createStackNavigator({
  Main: {
    screen: MainScreen
  }
});
