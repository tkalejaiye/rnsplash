import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class ProfileHeader extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Tolu Kalejaiye</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		height: 200,
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});

