import React, { Component } from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	ActivityIndicator,
	Image,
	Dimensions
} from "react-native";
import { getNewPhotos } from "../../api/index";

import PhotoList from "../components/PhotoList";
import AsyncImage from "../components/AsyncImage";

export default class NewScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: [],
			isLoading: false,
			error: ""
		};
	}
	componentDidMount() {
		this.setState({ isLoading: true }, () => {
			getNewPhotos()
				.then(photos => {
					this.setState({ photos, isLoading: false });
				})
				.catch(err =>
					this.setState({
						isLoading: false,
						err: "Network Request Failed"
					})
				);
		});
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
				{isLoading ? (
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
				)}
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
