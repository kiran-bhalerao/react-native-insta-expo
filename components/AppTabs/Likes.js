import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "native-base";

class Likes extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Likes Component!</Text>
      </View>
    );
  }
}

export default Likes;


Likes.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-heart" style={{ color: tintColor }} />
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
