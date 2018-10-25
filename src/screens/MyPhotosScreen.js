import React from "react";
import { StyleSheet, View, Text } from "react-native";

const MyPhotosScreen = () => (
	<View style={styles.container}>
		<Text>My Photos Screen</Text>
	</View>
);

export default MyPhotosScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
