import React, { Component } from "react";
import { Image, View, Text, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

class AsyncImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  handleImageLoaded = () => {
    this.setState({ isLoading: false });
  };

  render() {
    const { source, color, style } = this.props;
    const { isLoading } = this.state;
    return (
      <View style={style}>
        <Image
          style={[
            style,
            {
              position: "absolute"
              //resizeMode: "contain"
            }
          ]}
          source={{ uri: source }}
          onLoad={this.handleImageLoaded}
        />

        {this.state.isLoading && (
          <View
            style={[
              style,
              {
                backgroundColor: color
              }
            ]}
          />
        )}
      </View>
    );
  }
}
export default AsyncImage;
