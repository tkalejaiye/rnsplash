import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SearchCollectionsScreen = () => (
	<View style={styles.container}>
		<Text>SearchCollectionsScreen Screen</Text>
	</View>
);

export default SearchCollectionsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
