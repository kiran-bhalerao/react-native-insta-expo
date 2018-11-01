import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "native-base";

class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Search Component!</Text>
      </View>
    );
  }
}

export default Search;

Search.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-search" style={{ color: tintColor }} />
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
