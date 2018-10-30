import React from "react";
import { StyleSheet, View, Text } from "react-native";

const SearchUsersScreen = () => (
	<View style={styles.container}>
		<Text>SearchUsersScreen Screen</Text>
	</View>
);

export default SearchUsersScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
