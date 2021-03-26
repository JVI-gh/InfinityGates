import React, { Component } from "react"; //Importing React to create react components
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  Pressable,
  SafeAreaView,
} from "react-native"; //Importing React Native components
import { LinearGradient } from "expo-linear-gradient";
import background from "../../data/images/background.png"; //This is the way to include images

import SingUp from "../../components/SingUp";
import LogIn from "../../components/LogIn";

//StyleSheets on React, must use cammelCase
const styles = StyleSheet.create({
});

//This is the view that is going to be rendered, it's treated as a class that extends Component
class MenuScreen extends Component {
  state = {
  };

  render() {
    return (
      <Text>XD</Text>
    );
  }
}

export default MenuScreen;

