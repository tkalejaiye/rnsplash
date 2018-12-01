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

import CollectionList from "../components/CollectionList";
import AsyncImage from "../components/AsyncImage";

import { connect } from "react-redux";

class SearchCollectionsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: [],
			isLoading: false,
			error: ""
		};
	}
	componentDidMount() {}

	renderCollectionCoverPhoto(collection) {
		return (
			<View>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate("ViewCollection", { collection })
					}
				>
					<AsyncImage
						style={{ width: width, height: 200 }}
						source={collection.item.cover_photo.urls.regular}
						color={collection.item.cover_photo.color}
					/>
					<View style={styles.collectionFooter}>
						<Text style={styles.collectionTitle}>
							{collection.item.title}
						</Text>
						<View style={styles.collectionStats}>
							<Text style={styles.collectionStatsText}>
								{collection.item.total_photos} Photos
							</Text>
							<Text style={styles.collectionStatsText}>
								Curated by {collection.item.user.name}
							</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>
		);
	}

	render() {
		const { isLoading, err } = this.state;
		const { collections, navigation } = this.props;
		return (
			<View style={styles.container}>
				{collections.length === 0 ? (
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

function mapStateToProps(state) {
	return { collections: state.searchResults.collections };
}

export default connect(mapStateToProps)(SearchCollectionsScreen);

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	collectionFooter: { margin: 10 },
	collectionTitle: {
		fontSize: 14,
		fontWeight: "500"
	},
	collectionStats: {
		flexDirection: "row"
	},
	collectionStatsText: {
		fontSize: 12,
		color: "#a9a9a9",
		marginRight: 5
	}
});
