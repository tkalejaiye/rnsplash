import React, { Component } from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	ActivityIndicator,
	Image,
	Dimensions,
	AsyncStorage
} from "react-native";
import { search, searchPhotos } from "../../api/index";

import UserList from "../components/UserList";
import AsyncImage from "../components/AsyncImage";

import { connect } from "react-redux";

class SearchUsersScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			isLoading: false,
			error: ""
		};
	}
	componentDidMount() {}

	renderUser(user) {
		return (
			<View>
				<Text>{user.username}</Text>
				<Text>{user.name}</Text>
			</View>
		);
	}

	render() {
		const { isLoading, err } = this.state;
		const { users } = this.props;
		return (
			<View style={styles.container}>
				{users.length === 0 ? (
					<Text>No Results</Text>
				) : err ? (
					<Text>{err}</Text>
				) : (
					<View
						style={{
							flex: 1,
							justifyContent: "center",
							alignItems: "center"
						}}
					>
						<UserList users={users} renderUser={this.renderUser} />
					</View>
				)}
			</View>
		);
	}
}

function mapStateToProps(state) {
	return { users: state.searchResults.users };
}

export default connect(mapStateToProps)(SearchUsersScreen);

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
