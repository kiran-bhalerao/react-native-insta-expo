import React from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Left,
  Right,
  Body,
  Button,
  Icon
} from "native-base";

const image = [
  require("../assets/6.jpg"),
  require("../assets/5.jpg"),
  require("../assets/1.jpg"),
  require("../assets/2.jpg"),
  require("../assets/3.jpg"),
  require("../assets/4.jpg"),
  require("../assets/7.jpg")
];

class CardComponent extends React.Component {
  _toggleIcon = (name, color, isLiked, value) => {
    this.setState({
      likeName: name,
      color,
      isLiked
    });
    Animated.spring(this.state.springValue, {
      toValue: value,
      friction: 2
    }).start();
  };

  _springAnim = () => {
    if (!this.state.isLiked) {
      this._toggleIcon("ios-heart", "red", true, 1.2);
    } else {
      this._toggleIcon("ios-heart-outline", "black", false, 1);
    }
  };

  state = {
    springValue: new Animated.Value(1),
    likeName: "ios-heart-outline",
    color: "black",
    isLiked: false
  };

  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require("../assets/superman.jpg")} />
            <Body>
              <Text>Kiran</Text>
              <Text>Jan 15, 2018</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={image[this.props.img]}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem style={{ height: 50 }}>
          <Left>
            <Button transparent onPress={this._springAnim}>
              <Animated.View
                style={{
                  transform: [{ scale: this.state.springValue }],
                  alignSelf: "center"
                }}
              >
                <Icon
                  name={this.state.likeName}
                  style={{
                    color: this.state.color,
                    fontSize: 25,
                    marginLeft: 2
                  }}
                />
              </Animated.View>
            </Button>
            <Button transparent>
              <Icon
                name="ios-chatbubbles-outline"
                style={{ color: "black", fontSize: 25 }}
              />
            </Button>
            <Button transparent>
              <Icon
                name="ios-send-outline"
                style={{ color: "black", fontSize: 30 }}
              />
            </Button>
          </Left>
        </CardItem>
        <CardItem style={{ height: 20 }}>
          <Text>{this.props.like} Likes</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              <Text style={{ color: "#000", fontSize: 15 }}>Kiran </Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
              veritatis animi perferendis nam nemo ut deserunt eos similique
              excepturi voluptas neque dolores quod. Minus quisquam consequatur
              iure distinctio commodi cum?
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default CardComponent;
