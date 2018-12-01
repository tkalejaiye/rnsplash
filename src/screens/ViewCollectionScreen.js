import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

import PhotoList from "../components/PhotoList";
import AsyncImage from "../components/AsyncImage";

import { connect } from "react-redux";
import * as actions from "../actions";

class ViewCollectionScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam("title")
		};
	};

	constructor(props) {
		super(props);
		this.state = {
			photos: []
		};
	}

	componentDidMount() {
		const { id } = this.props.navigation.state.params.collection.item;
		this.props.getCollection(id, 1, 10, "latest");
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
		const { photos, navigation } = this.props;
		return (
			<View style={styles.container}>
				{photos.length === 0 ? (
					<Text>No Results</Text>
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

function mapStateToProps(state) {
	return { photos: state.collectionPhotos };
}

export default connect(mapStateToProps, actions)(ViewCollectionScreen);

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
