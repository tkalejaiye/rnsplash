import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import AsyncImage from "../components/AsyncImage";
import moment from 'moment';

export default class ViewPhotoScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			photo: {}
		};
	}

	render() {
		const { photo } = this.props.navigation.state.params;
		return (
			<View style={styles.container}>
				<AsyncImage
					style={styles.image}
					source={photo.item.urls.regular}
					color={photo.item.color}
				/>
				<View style={styles.photoInfo}>
					<Text>By {photo.item.user.name}</Text>
					<Text>{moment(photo.item.created_at).format("MMM Do YYYY")}</Text>
					<Text>{photo.item.likes} Likes</Text>
				</View>
			</View>
		);
	}
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		justifyContent: "center"
	},
	image: {
		width: width,
		height: height - 250,
		flex: 3
	},
	photoInfo: {
		flex: 1,
		height: 250,
		justifyContent: "space-around",
		marginLeft: 25
	}
});
