import React from "react";
import { StyleSheet, View, Text } from "react-native";

const CollectionsScreen = () => (
	<View style={styles.container}>
		<Text>Collections Screen</Text>
	</View>
);

export default CollectionsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
