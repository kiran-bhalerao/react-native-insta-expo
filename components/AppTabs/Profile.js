import React from "react";
import { Dimensions, Text, View, Image } from "react-native";
import {
  Icon,
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Button
} from "native-base";
import EntypoIcon from "react-native-vector-icons/Entypo";
import CardComponent from "../CardComponent";

const image = [
  require("../../assets/10.jpg"),
  require("../../assets/8.jpg"),
  require("../../assets/12.jpg"),
  require("../../assets/17.jpg"),
  require("../../assets/16.jpg"),
  require("../../assets/13.jpg"),
  require("../../assets/14.jpg"),
  require("../../assets/15.jpg"),
  require("../../assets/11.jpg")
];

class Profile extends React.Component {
  width = Dimensions.get("window").width;
  state = {
    segmentIndex: 0
  };

  setSegmanet = index => {
    this.setState({
      segmentIndex: index
    });
  };

  viewOne = () => {
    return (
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
        {image.map((src, i) => (
          <Image
            key={i}
            source={src}
            style={{
              width: (this.width - 4) / 3,
              height: (this.width - 4) / 3,
              marginBottom: 2,
              marginRight: (i + 1) % 3 !== 0 ? 2 : 0
            }}
          />
        ))}
      </View>
    );
  };

  viewTwo = () => {
    return (
      <View>
        <CardComponent img="0" like="201" />
        <CardComponent img="1" like="111" />
        <CardComponent img="2" like="232" />
        <CardComponent img="3" like="401" />
        <CardComponent img="4" like="101" />
        <CardComponent img="5" like="631" />
        <CardComponent img="6" like="221" />
        <CardComponent img="7" like="921" />
        <CardComponent img="8" like="901" />
      </View>
    );
  };

  renderView = () => {
    if (this.state.segmentIndex == 0) {
      return <View>{this.viewOne()}</View>;
    } else if (this.state.segmentIndex == 1) {
      return <View>{this.viewTwo()}</View>;
    }
  };
  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: "white" }}>
        <Header
          style={{
            backgroundColor: "#f5f5f5",
            height: 80,
            paddingTop: 10,
            width: "100%"
          }}
        >
          <Left style={{ flex: 1 }}>
            <Icon name="md-person-add" style={{ paddingLeft: 10 }} />
          </Left>
          <Body style={{ alignItems: "center", flex: 1 }}>
            <Text style={{ fontSize: 20 }}>Instagram</Text>
          </Body>
          <Right style={{ flex: 1 }}>
            <EntypoIcon
              name="back-in-time"
              style={{ paddingRight: 10, fontSize: 27 }}
            />
          </Right>
        </Header>
        <Content>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 6
                }}
              >
                <Image
                  source={require("../../assets/superman.jpg")}
                  style={{ width: 80, height: 80, borderRadius: 40 }}
                />
              </View>
              <View style={{ flex: 3 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around"
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>20</Text>
                    <Text style={{ opacity: 0.5, fontSize: 13 }}>posts</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                      206
                    </Text>
                    <Text style={{ opacity: 0.5, fontSize: 13 }}>
                      followers
                    </Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                      167
                    </Text>
                    <Text style={{ opacity: 0.5, fontSize: 13 }}>
                      following
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row", paddingTop: 8 }}>
                  <Button
                    bordered
                    style={{
                      height: 32,
                      marginLeft: 10,
                      justifyContent: "center",
                      flex: 3,
                      borderRadius: 4,
                      borderColor: "gray"
                    }}
                  >
                    <Text>Edit Profile</Text>
                  </Button>
                  <Button
                    bordered
                    style={{
                      height: 32,
                      marginLeft: 4,
                      justifyContent: "center",
                      flex: 1,
                      borderRadius: 4,
                      borderColor: "gray",
                      marginRight: 10
                    }}
                  >
                    <Icon
                      name="settings"
                      styel={{ color: "gray", fontSize: 10 }}
                    />
                  </Button>
                </View>
              </View>
            </View>

            <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
              <Text style={{ color: "#000", fontWeight: "bold", fontSize: 15 }}>
                Kiran Bhalerao
              </Text>
              <Text>Web Engineer | Web Designer</Text>
              <Text style={{ color: "#2b3163" }}>www.mywork.com</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              borderTopColor: "#eae5e5",
              borderTopWidth: 1
            }}
          >
            <Button
              transparent
              onPress={this.setSegmanet.bind(this, 0)}
              active={this.state.segmentIndex == 0}
            >
              <Icon
                name="ios-apps-outline"
                style={[
                  this.state.segmentIndex == 0 ? {} : { color: "gray" },
                  { fontSize: 19 }
                ]}
              />
            </Button>
            <Button
              transparent
              onPress={this.setSegmanet.bind(this, 1)}
              active={this.state.segmentIndex == 1}
            >
              <Icon
                name="ios-list-outline"
                style={{ colr: "gray" }}
                style={[
                  this.state.segmentIndex == 1 ? {} : { color: "gray" },
                  { fontSize: 28 }
                ]}
              />
            </Button>
            <Button
              transparent
              onPress={this.setSegmanet.bind(this, 2)}
              active={this.state.segmentIndex == 2}
            >
              <Icon
                name="ios-people-outline"
                style={{ colr: "gray" }}
                style={[
                  this.state.segmentIndex == 2 ? {} : { color: "gray" },
                  { fontSize: 25 }
                ]}
              />
            </Button>
            <Button
              transparent
              onPress={this.setSegmanet.bind(this, 3)}
              active={this.state.segmentIndex == 3}
            >
              <Icon
                name="ios-bookmark-outline"
                style={{ colr: "gray" }}
                style={[
                  this.state.segmentIndex == 3 ? {} : { color: "gray" },
                  { fontSize: 20 }
                ]}
              />
            </Button>
          </View>
          {this.renderView()}
        </Content>
      </Container>
    );
  }
}

export default Profile;

Profile.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-person" style={{ color: tintColor }} />
  )
};
