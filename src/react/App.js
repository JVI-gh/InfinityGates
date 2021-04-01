import React, { Component } from "react"; //Importing React to create react components
import { NativeRouter, Switch, Route } from "react-router-native";

import Start from "./app/screens/start"; //Importing Screen view
import Menu from "./app/screens/menu"; //Importing Screen view

//Mount the App, this is where everything starts when up
export default class App extends Component {
  //App returns a view that was imported, then the screen renders the class

/*   requireAuth = async () => {
    try {
      const auth = await AsyncStorage.getItem("@storage_Key");
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = auth;

      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(APIserver + "main", requestOptions)
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } catch (e) {
      // error reading value
    }
  }; */

  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/menu" component={Menu} /* onEnter={this.requireAuth} */ />
        </Switch>
      </NativeRouter>
    );
  }
}
