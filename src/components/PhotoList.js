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
import { withNavigation } from "react-navigation";
import AsyncImage from "../components/AsyncImage";

const { width, height } = Dimensions.get("window");

const PhotoList = ({ photos, navigation }) => (
	<View>
		<FlatList
			data={photos}
			renderItem={photo => (
				<View>
					<TouchableOpacity
						delayPressIn={75}
						onPress={() =>
							navigation.navigate("ViewPhoto", {
								photo: photo
							})
						}
					>
						<AsyncImage
							style={{
								width: width,
								height: Math.floor(Math.random() * 300) + 200
							}}
							source={photo.item.urls.regular}
							color={photo.item.color}
						/>
					</TouchableOpacity>
				</View>
			)}
			keyExtractor={(photo, index) => index.toString()}
		/>
	</View>
);

export default PhotoList;
