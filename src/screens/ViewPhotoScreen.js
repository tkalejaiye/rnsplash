import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import AsyncImage from "../components/AsyncImage";

export default class ViewPhotoScreen extends Component {
	// static navigationOptions = ({ navigation }) => {
	// 	const { params } = navigation.state;
	// 	return { this.setState };
	// };

	constructor(props) {
		super(props);
		this.state = {
			photo: {}
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<AsyncImage
					style={{
						width: width,
						height: 500
					}}
					source={
						this.props.navigation.state.params.photo.item.urls
							.regular
					}
					color={this.props.navigation.state.params.photo.item.color}
				/>
			</View>
		);
	}
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
