import React, { Component } from "react"; //Importing React to create react components
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
  SafeAreaView,
} from "react-native"; //Importing React Native components
import { LinearGradient } from "expo-linear-gradient";
import background from "../../data/images/background.png"; //This is the way to include images

import SingUp from "../../components/SingUp";
import LogIn from "../../components/LogIn";

//StyleSheets on React, must use cammelCase
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 300,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    width: "100%",
  },
  logoGame: {
    width: 350,
    height: 350,
    marginBottom: 50,
  },
  logoSolar: {
    position: "absolute",
    bottom: 20,
    width: 300,
    height: 170,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10,
    width: "70%",
    borderRadius: 5,
  },
  buttonText: {
    color: "whitesmoke",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

//This is the view that is going to be rendered, it's treated as a class that extends Component
class StartScreen extends Component {
  state = {
    loginVisible: false,
    signupVisible: false,
  };

  setLoginVisible = () => {
    this.setState({ loginVisible: !this.state.loginVisible });
  };

  setSignupVisible = () => {
    this.setState({ signupVisible: !this.state.signupVisible });
  };

  render() {
    const { loginVisible, signupVisible } = this.state;
    //View is what is going to be showed, style is applied like the example
    //Components are used like in-line html
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={background} style={styles.image}>
          <LinearGradient
            // Background Linear Gradient
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            style={styles.background}
          />
          <Image
            source={require("../../data/images/LogoInfinityGates.png")}
            style={styles.logoGame}
          />
          <Pressable
            // BUTTON LOGIN
            style={[styles.button, { backgroundColor: "blue" }]}
            onPress={() => this.setLoginVisible()}
          >
            <Text style={styles.buttonText}>Identificarse</Text>
          </Pressable>
          <Pressable
            // BUTTON SINGUP
            style={[styles.button, { backgroundColor: "green" }]}
            title="Registrarse"
            onPress={() => this.setSignupVisible(true)}
          >
            <Text style={styles.buttonText}>Registrarse</Text>
          </Pressable>
          <LogIn
            visible={loginVisible}
            onCloseModal={this.setLoginVisible}
          />
          <SingUp 
            visible={signupVisible}
            onCloseModal={this.setSignupVisible}
          />

          <Image
            source={require("../../data/images/logoSolarSoftware.png")}
            style={styles.logoSolar}
          />
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

//This is the way to export one "thing" in React
export default StartScreen;

/* <Modal
  animationType="slide"
  transparent={true}
  visible={signupVisible}
  onRequestClose={() => {
    this.setSignupVisible(!signupVisible);
  }}
>
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
      <TextInput placeholder="Email" />
      <TextInput secureTextEntry={true} placeholder="Password" />
      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => this.setSignupVisible(!signupVisible)}
      >
        <Text style={styles.textStyle}>Hide Modal</Text>
      </Pressable>
    </View>
  </View>
</Modal> */
