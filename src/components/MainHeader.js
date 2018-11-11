import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default class MainHeader extends Component {
	constructor(props) {
		super(props);
	}

	onPress = () => {
		this.props.navigation.navigate("Search", { isWorking: "yes, it is" });
	};

	render() {
		return (
			<View style={styles.container}>
				<Feather name="search" size={20} color="black" />
				<TouchableOpacity
					style={styles.fakeInput}
					onPress={this.onPress}
				>
					<Text style={{ color: "#c9c9c9" }}>Search</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Feather name="filter" size={20} color="black" />
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 30,
		height: 60,
		backgroundColor: "#fff",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around"
	},
	fakeInput: {
		height: 30,
		width: "80%",
		marginVertical: 5,
		justifyContent: "center"
	}
});
