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
import { getCollections } from "../../api/index";

import CollectionList from "../components/CollectionList";
import AsyncImage from "../components/AsyncImage";

import { connect } from "react-redux";
import * as actions from "../actions";

class CollectionsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: [],
			isLoading: false,
			error: ""
		};
	}

	render() {
		const { isLoading, err } = this.state;
		const { navigation, collections } = this.props;
		return (
			<View style={styles.container}>
				{collections.length === 0 ? (
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
						<CollectionList
							collections={collections}
							renderCollectionCoverPhoto={
								this.renderCollectionCoverPhoto
							}
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
		collections: state.collections
	};
};

export default connect(mapStateToProps, actions)(CollectionsScreen);

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
