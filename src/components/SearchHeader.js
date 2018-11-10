import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { withNavigation, NavigationActions } from "react-navigation";

class SearchHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFocused: false
		};
	}

	componentDidMount() {
		this.onFocus();
	}

	onFocus = () => {
		setTimeout(() => {
			this.searchTextInput.focus();
		}, 240);
	};

	goBack = () => {
		if (this.state.isFocused) {
			this.setState({ isFocused: false }, () => {
				this.props.navigation.goBack();
			});
		}
	};

	onPress = () => {
		this.props.navigation.navigate("Home");
	};

	render() {
		return (
			<View>
				<View style={styles.container}>
					<TouchableOpacity onPress={this.onPress}>
						<Feather name="arrow-left" size={20} color="black" />
					</TouchableOpacity>
					<TextInput
						style={styles.textInput}
						placeholder="Search"
						ref={input => {
							this.searchTextInput = input;
						}}
						underlineColorAndroid="transparent"
					/>
					<TouchableOpacity>
						<Feather name="filter" size={20} color="black" />
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

//export default withNavigation(SearchHeader);
export default SearchHeader;

const styles = StyleSheet.create({
	container: {
		paddingTop: 30,
		height: 60,
		backgroundColor: "#fff",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around"
	},
	textInput: {
		height: 30,
		width: "80%",
		borderColor: "black"
	},
	fakeInput: {
		height: 30,
		width: "80%",
		marginVertical: 5,
		justifyContent: "center"
	}
});
