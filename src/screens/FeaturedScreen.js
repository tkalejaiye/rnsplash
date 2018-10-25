import React from "react";
import { StyleSheet, View, Text } from "react-native";

const FeaturedScreen = () => (
	<View style={styles.container}>
		<Text>Featured Screen</Text>
	</View>
);

export default FeaturedScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
