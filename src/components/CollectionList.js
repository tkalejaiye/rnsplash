import React, { Component } from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	ActivityIndicator,
	Image,
	FlatList,
	Dimensions
} from "react-native";

import AsyncImage from "../components/AsyncImage";

const { width, height } = Dimensions.get("window");

const CollectionList = ({
	collections,
	renderCollectionCoverPhoto,
	navigation
}) => (
	<View>
		<FlatList
			data={collections}
			renderItem={collection => (
				<View>
					<TouchableOpacity
						onPress={() =>
							navigation.navigate("ViewCollection", {
								collection,
								title: collection.item.title
							})
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
			)}
			keyExtractor={(collection, index) => index.toString()}
		/>
	</View>
);

export default CollectionList;

const styles = StyleSheet.create({
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
