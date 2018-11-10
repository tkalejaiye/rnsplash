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

export default class CollectionsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: [],
			isLoading: false,
			error: ""
		};
	}
	componentDidMount() {
		this.setState({ isLoading: true }, () => {
			getCollections()
				.then(collections => {
					this.setState({ collections, isLoading: false });
				})
				.catch(err =>
					this.setState({
						isLoading: false,
						err: "Network Request Failed"
					})
				);
		});
	}

	renderCollectionCoverPhoto(collection) {
		return (
			<View>
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
			</View>
		);
	}

	render() {
		const { isLoading, err, collections } = this.state;
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
						<CollectionList
							collections={collections}
							renderCollectionCoverPhoto={
								this.renderCollectionCoverPhoto
							}
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
