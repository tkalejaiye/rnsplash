import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default class ProfileHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			render: false
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					onPress={this.onPress}
					style={{ alignSelf: "flex-end", marginRight: 25 }}
				>
					<Feather name="settings" size={20} color="black" />
				</TouchableOpacity>
				<View style={styles.avatar}>
					<Feather name="user" size={100} color="#A6ACAF" />
				</View>
				<Text style={styles.name}>Tolu Kalejaiye</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 250,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
		backgroundColor: "#D0D3D4"
	},
	name: {
		fontSize: 24,
		fontWeight: "bold",
		marginTop: 10
	}
});
