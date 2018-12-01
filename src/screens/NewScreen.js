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
import { getNewPhotos } from "../../api/index";

import PhotoList from "../components/PhotoList";

import { connect } from "react-redux";
import * as actions from "../actions";

class NewScreen extends Component {
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
							isCollection={false}
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
		photos: state.newPhotos
	};
};

export default connect(mapStateToProps, actions)(NewScreen);

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
