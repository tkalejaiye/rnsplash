import React from "react";
import { StyleSheet, View, Text } from "react-native";

const CameraScreen = () => (
	<View style={styles.container}>
		<Text>Camera Screen</Text>
	</View>
);

export default CameraScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
