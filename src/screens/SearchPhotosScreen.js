import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SearchPhotosScreen = () => (
	<View style={styles.container}>
		<Text>SearchPhotosScreen Screen</Text>
	</View>
);

export default SearchPhotosScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
