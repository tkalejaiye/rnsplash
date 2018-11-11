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

import { connect } from "react-redux";

class SearchPhotosScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: [],
			isLoading: false,
			error: ""
		};
	}
	componentDidMount() {}

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
		const { isLoading, err } = this.state;
		const { photos } = this.props;
		return (
			<View style={styles.container}>
				{photos.length === 0 ? (
					<Text>No Results</Text>
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

function mapStateToProps(state) {
	return { photos: state.searchResults.photos };
}

export default connect(mapStateToProps)(SearchPhotosScreen);

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
