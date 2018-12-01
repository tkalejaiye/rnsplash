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
import { getFeaturedPhotos } from "../../api/index";

import PhotoList from "../components/PhotoList";
import AsyncImage from "../components/AsyncImage";

import { connect } from "react-redux";
import * as actions from "../actions";

class FeaturedScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: [],
			isLoading: false,
			error: ""
		};
	}

	render() {
		const { isLoading, err } = this.state;
		const { navigation, photos } = this.props;
		return (
			<View style={styles.container}>
				{photos.length === 0 ? (
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
							navigation={navigation}
						/>
					</View>
				)}
			</View>
		);
	}
}

mapStateToProps = state => {
	return {
		photos: state.featuredPhotos
	};
};

export default connect(mapStateToProps, actions)(FeaturedScreen);

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
