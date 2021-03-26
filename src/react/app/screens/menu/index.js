import React, { Component } from "react"; //Importing React to create react components
import {
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native"; //Importing React Native components

//StyleSheets on React, must use cammelCase
const styles = StyleSheet.create({
});

//This is the view that is going to be rendered, it's treated as a class that extends Component
class MenuScreen extends Component {
  state = {
  };

  render() {
    return (
      <SafeAreaView>
        <Text>XD</Text>
      </SafeAreaView>
    );
  }
}

export default MenuScreen;

