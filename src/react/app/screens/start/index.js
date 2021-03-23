import React, { Component } from "react"; //Importing React to create react components
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native"; //Importing React Native components
import { LinearGradient } from "expo-linear-gradient";
import background from "Gates/app/data/images/background.png"; //This is the way to include images

//StyleSheets on React, must use cammelCase
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  background: {
    position: 'absolute',
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
});

//This is the view that is going to be rendered, it's treated as a class that extends Component
class StartScreen extends Component {
  render() {
    //View is what is going to be showed, style is applied like the example
    //Components are used like in-line html
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.image}>
        <LinearGradient
          // Background Linear Gradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={styles.background}
        />
          <Image
            source={require("Gates/app/data/images/LogoInfinityGates.png")}
            style={styles.logoGame}
          />
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "blue" }]}
            onPress={() => console.log("button pressed")}
          >
            <Text style={styles.buttonText}>Identificarse</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "green" }]}
            title="Registrarse"
            onPress={() => console.log("button 2 pressed")}
          >
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
          <Image
            source={require("Gates/app/data/images/logoSolarSoftware.png")}
            style={styles.logoSolar}
          />
        </ImageBackground>
      </View>
    );
  }
}

//This is the way to export one "thing" in React
export default StartScreen;
