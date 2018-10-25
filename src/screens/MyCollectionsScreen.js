import React from "react";
import { StyleSheet, View, Text } from "react-native";

const MyCollectionsScreen = () => (
	<View style={styles.container}>
		<Text>My Collections Screen</Text>
	</View>
);

export default MyCollectionsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
