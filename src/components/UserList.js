import React, { Component } from "react";
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	ActivityIndicator,
	Image,
	FlatList,
	Dimensions
} from "react-native";
import { withNavigation } from "react-navigation";

const { width, height } = Dimensions.get("window");

const UserList = ({ users, renderUser, navigation }) => (
	<View>
		<FlatList
			data={users}
			renderItem={user => (
				<TouchableOpacity>
					<View style={styles.userListItem}>
						<Image
							source={{
								uri: user.item.profile_image.small
							}}
							style={styles.profilePicture}
						/>

						<View style={styles.userInfo}>
							<Text style={styles.username}>
								{user.item.username}
							</Text>
							<Text style={styles.name}>{user.item.name}</Text>
						</View>
					</View>
				</TouchableOpacity>
			)}
			keyExtractor={(user, index) => index.toString()}
		/>
	</View>
);

export default UserList;

const styles = StyleSheet.create({
	userListItem: {
		width: width,
		flex: 1,
		flexDirection: "row",
		margin: 5
	},
	userInfo: {
		justifyContent: "space-around"
	},
	username: {

	},
	name: {
		color: "#c9c9c9"
	},
	profilePicture: {
		height: 50,
		width: 50,
		borderRadius: 25,
		marginHorizontal: 10
	}
});
