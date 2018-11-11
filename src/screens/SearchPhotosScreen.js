import React, { Component } from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	ActivityIndicator,
	Image,
	Dimensions,
	AsyncStorage
} from "react-native";
import { search, searchPhotos } from "../../api/index";

import PhotoList from "../components/PhotoList";
import AsyncImage from "../components/AsyncImage";

export default class SearchPhotosScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: [],
			isLoading: false,
			error: ""
		};
	}
	componentDidMount() {
		this.setState({ isLoading: true });
		// this.setState({ isLoading: true }, () => {
		// 	AsyncStorage.getItem("photos").then(photos => {
		// 		this.setState({ isLoading: false, photos: JSON.parse(photos) });
		// 	});
		// });
		// this.setState({ isLoading: true }, () =>
		// 	AsyncStorage.getItem("photos").then(photos => {
		// 		this.setState(
		// 			{ isLoading: false, photos: JSON.parse(photos) },
		// 			() => AsyncStorage.removeItem("photos")
		// 		);
		// 	})
		// );
		//this.getPhotos().then(results => this.updateState(results));
	}

	// updateState(results) {
	// 	this.setState(prevState => {
	// 		return { ...prevState, photos: JSON.parse(results) };
	// 	});
	// }

	async getPhotos() {
		const photos = await AsyncStorage.getItem("photos");
		return photos;
	}

	renderPhoto(photo) {
		return (
			<View>
				<AsyncImage
					style={{
						width: width,
						height: Math.floor(Math.random() * 300) + 200
					}}
					source={photo.item.urls.regular}
					color={photo.item.color}
				/>
			</View>
		);
	}

	render() {
		const { isLoading, err, photos } = this.state;
		return (
			<View style={styles.container}>
				{/*isLoading ? (
					<ActivityIndicator />
				) : err ? (
					<Text>{err}</Text>
				) : (
					<View
						style={{
							flex: 1,
							justifyContent: "center",
							alignItems: "center"
						}}
					>
						<PhotoList
							photos={photos}
							renderPhoto={this.renderPhoto}
							isCollection={false}
						/>
					</View>
				)*/}
				<Text>Search Photos Screen</Text>
			</View>
		);
	}
}

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
