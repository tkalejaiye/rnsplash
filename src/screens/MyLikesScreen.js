import React from "react";
import { StyleSheet, View, Text } from "react-native";

const MyLikesScreen = () => (
	<View style={styles.container}>
		<Text>My Likes Screen</Text>
	</View>
);

export default MyLikesScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
