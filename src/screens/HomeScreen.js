import React from "react";
import { StyleSheet, View, Text } from "react-native";

const HomeScreen = () => (
	<View style={styles.container}>
		<Text>Home Screen</Text>
	</View>
);

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
