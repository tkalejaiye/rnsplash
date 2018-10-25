import React from "react";
import { StyleSheet, View, Text } from "react-native";

const NewScreen = () => (
	<View style={styles.container}>
		<Text>New Screen</Text>
	</View>
);

export default NewScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
