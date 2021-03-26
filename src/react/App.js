import React, { Component } from "react"; //Importing React to create react components
import { NativeRouter, Switch, Router, Route } from "react-router-native";

import Start from "./app/screens/start"; //Importing Screen view
import Menu from "./app/screens/menu"; //Importing Screen view

//Mount the App, this is where everything starts when up
export default class App extends Component {
  //App returns a view that was imported, then the screen renders the class
  render() {
    return (
      <NativeRouter>
        <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path="/menu" component={Menu} />
        </Switch>
      </NativeRouter>
    );
  }
}
