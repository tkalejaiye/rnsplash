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

const PhotoList = ({ photos, renderPhoto }) => (
	<View>
		<FlatList
			data={photos}
			renderItem={renderPhoto}
			keyExtractor={(photo, index) => index.toString()}
		/>
	</View>
);

export default PhotoList;
