import React, { Component } from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	ActivityIndicator,
	Image,
	FlatList
} from "react-native";

const CollectionList = ({ collections, renderCollectionCoverPhoto }) => (
	<View>
		<FlatList
			data={collections}
			renderItem={renderCollectionCoverPhoto}
			keyExtractor={(collection, index) => index.toString()}
		/>
	</View>
);

export default CollectionList;
