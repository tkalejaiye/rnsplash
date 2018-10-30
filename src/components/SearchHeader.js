import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

class SearchHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFocused: false
		};
	}

	onFocus = () => {
		this.setState(
			{
				isFocused: true
			},
			() => {
				this.props.navigation.navigate("Search");
			}
		);
	};

	goBack = () => {
		this.setState({ isFocused: false }, () => {
			this.props.navigation.goBack();
		});
	};

	render() {
		console.log(this.state.isFocused);
		return (
			<View>
				{this.state.isFocused ? (
					<View style={styles.container}>
						<TouchableOpacity onPress={this.goBack}>
							<Feather
								name="arrow-left"
								size={20}
								color="black"
							/>
						</TouchableOpacity>
						<TextInput
							style={styles.textInput}
							placeholder="Search"
							onFocus={this.onFocus}
							onBlur={this.onBlur}
						/>
						<Feather name="filter" size={20} color="black" />
					</View>
				) : (
					<View style={styles.container}>
						<Feather name="search" size={20} color="black" />
						<TextInput
							style={styles.textInput}
							placeholder="Search"
							onFocus={this.onFocus}
						/>
						<Feather name="filter" size={20} color="black" />{" "}
					</View>
				)}
			</View>
		);
	}
}

export default withNavigation(SearchHeader);

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		height: 45,
		backgroundColor: "#fff",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around"
	},
	textInput: {
		height: 40,
		width: "80%",
		marginVertical: 5
	}
});
