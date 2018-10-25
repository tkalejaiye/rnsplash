import React, { Component } from "react";

// Navigators
import { MainNavigator } from "./src/navigation";

// Components
import ProfileHeader from "./src/components/ProfileHeader";

export default class App extends Component {
  render() {
    return <MainNavigator />;
  }
}
