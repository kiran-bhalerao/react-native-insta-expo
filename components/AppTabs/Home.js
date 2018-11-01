import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {
  Icon,
  Container,
  Content,
  Thumbnail,
  Header,
  Left,
  Right,
  Body
} from "native-base";
import CardComponent from "../CardComponent";

class Home extends React.Component {
  state = {
    profiles: []
  };
  UNSAFE_componentWillMount = () => {
    fetch("https://randomuser.me/api/?results=30")
      .then(res => res.json())
      .then(res => {
        this.setState({
          profiles: res.results.map(user => user.picture.large)
        });
      });
  };

  render() {
    return (
      <Container>
        <Header
          style={{
            backgroundColor: "#f5f5f5",
            height: 80,
            paddingTop: 10,
            width: "100%"
          }}
        >
          <Left style={{ flex: 1 }}>
            <Icon
              name="ios-camera-outline"
              style={{ paddingLeft: 10, fontSize: 35 }}
            />
          </Left>
          <Body style={{ alignItems: "center", flex: 1 }}>
            <Text style={{ fontSize: 20 }}>Instagram</Text>
          </Body>
          <Right style={{ flex: 1 }}>
            <Icon
              name="ios-send-outline"
              style={{ paddingRight: 10, fontSize: 35 }}
            />
          </Right>
        </Header>
        <View style={{ height: 100 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 8
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>stories</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="md-play" style={{ fontSize: 14 }} />
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                {" "}
                watch all
              </Text>
            </View>
          </View>
          <View style={{ flex: 3 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: "center",
                paddingStart: 5,
                paddingEnd: 5
              }}
            >
              {this.state.profiles.map((profileUri, i) => (
                <Thumbnail
                  source={{ uri: profileUri }}
                  key={i}
                  style={{
                    marginHorizontal: 5,
                    borderColor: "#d1cece",
                    borderWidth: 2
                  }}
                />
              ))}
            </ScrollView>
          </View>
        </View>
        <Content>
          <CardComponent img="0" like="201" />
          <CardComponent img="1" like="111" />
          <CardComponent img="2" like="232" />
          <CardComponent img="3" like="401" />
          <CardComponent img="4" like="101" />
          <CardComponent img="5" like="631" />
          <CardComponent img="6" like="91" />
        </Content>
      </Container>
    );
  }
}

export default Home;

Home.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-home" style={{ color: tintColor }} />
  )
};
