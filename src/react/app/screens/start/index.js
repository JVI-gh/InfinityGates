import React, { Component } from "react"; //Importing React to create react components
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  Pressable,
  SafeAreaView,
  View,
} from "react-native"; //Importing React Native components
import { LinearGradient } from "expo-linear-gradient";
import background from "../../data/images/background.png"; //This is the way to include images

//Importing custom components
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
  },
  logoSolar: {
    position: "absolute",
    bottom: 20,
    width: 300,
    height: 170,
  },
  buttonList: {
    width: "100%",
    alignItems: "center",
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
});

//This is the view that is going to be rendered, it's treated as a class that extends Component
class StartScreen extends Component {
  //Constructor is used to declare valued that are being used for components
  constructor(props) {
    super(props);
    this.state = {
      loginVisible: false,
      signupVisible: false,
    };
  }

  //Here is the declaration of the functions that are going to be use in this screen, including components
  setLoginVisible = () => {
    this.setState({ loginVisible: !this.state.loginVisible });
  };

  setSignupVisible = () => {
    this.setState({ signupVisible: !this.state.signupVisible });
  };

  render() {
    //Declaration of const and applying them to where it's needed
    const { history } = this.props;
    const { loginVisible, signupVisible } = this.state;

    //SafeAreaView is what is going to be showed, it's returned to the render method in charge of rendering a screen
    //style is applied like the example <SafeAreaView style={styles.container}>
    //Components are used like in-line html

    return (
      /* SafeAreaView is almost the same as View, but the latter doesn't take into account mobile's top menu */
      <SafeAreaView style={styles.container}>
        {/* ImageBackground contains all the content just like a wrapper, otherwise it won't work */}
        <ImageBackground source={background} style={styles.image}>
          <LinearGradient
            // Background Linear Gradient
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            style={styles.background}
          />

          <Image
            //Logo of the game
            source={require("../../data/images/logoInfinityGates.png")}
            style={styles.logoGame}
          />
          <View style={styles.buttonList}>
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
          </View>

          {/* Login and Signup components, these are modals */}
          <LogIn
            visible={loginVisible}
            onCloseModal={this.setLoginVisible}
            history={history}
          />
          <SingUp
            visible={signupVisible}
            onCloseModal={this.setSignupVisible}
          />

          {/* Logo for Solar Software */}
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
