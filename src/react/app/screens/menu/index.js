//Importing React to create react components
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Pressable,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native"; //Importing React Native components

import AsyncStorage from "@react-native-async-storage/async-storage";
import background from "../../data/images/background.png";
const { width, height } = Dimensions.get("window");

const APIserver = "http://10.0.2.2:3001/";

//StyleSheets on React, must use cammelCase
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    width: "100%",
  },
  menu1: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#0A1D2E",
    width: width,
    padding: 10,
    paddingTop: 35,
  },
  menu2: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#0A1D2E",
    width: width,
    padding: 10,
  },
  center: {
    alignItems: "center",
  },
  text: {
    color: "whitesmoke",
  },
  icon: {
    width: 70,
    height: 70,
  },
  logo: {
    width: 100,
    height: 100,
  },
  circle: {
    marginTop: -70,
    backgroundColor: "whitesmoke",
    width: 120,
    height: 120,
    borderRadius: 120,
    borderWidth: 5,
    borderColor: "#0A1D2E",
  },
});

//This is the view that is going to be rendered, it's treated as a class that extends Component
class MenuScreen extends Component {
  constructor(props) {
    super(props);
  }

  requireAuth = async () => {
    try {
      const auth = JSON.parse(await AsyncStorage.getItem("@storage_Key"));
      if (auth) {
        let requestOptions = {
          method: "GET",
          redirect: "follow",
        };

        fetch(
          APIserver + "main" + "?secret_token=" + auth.token,
          requestOptions
        )
          .then((response) => response.text())
          .then((result) => {
            if (result === "Unauthorized") {
              this.props.history.push("/");
              AsyncStorage.setItem("@storage_Key", "");
            }
          })
          .catch((error) => console.log("error", error));
      } else {
        this.props.history.push("/");
        AsyncStorage.setItem("@storage_Key", "");
      }
    } catch (e) {
      console.log("error: " + e);
    }
  };

  disconnect = () => {
    AsyncStorage.setItem("@storage_Key", "");
    this.props.history.push("/");
  };

  componentDidMount() {
    this.requireAuth();
  }

  render() {
    const { history } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={background} style={styles.image}>
          <View style={styles.menu1}>
            <Pressable onPress={() => history.push("/")}>
              <Image
                source={require("../../data/images/icons/recursos2Blanco.png")}
                style={styles.icon}
              />
            </Pressable>
            <Pressable onPress={() => this.disconnect()}>
              <Image
                source={require("../../data/images/icons/cuentaBlanco.png")}
                style={styles.icon}
              />
            </Pressable>
          </View>
          <Pressable style={styles.circle} onPress={() => history.push("/")}>
            <Image
              source={require("../../data/images/logoInfinityGates.png")}
              style={styles.logo}
            />
          </Pressable>
          <View style={styles.menu2}>
            <Pressable style={styles.center} onPress={() => history.push("/")}>
              <Image
                source={require("../../data/images/icons/personajes.png")}
                style={styles.icon}
              />
              <Text style={styles.text}>Personajes</Text>
            </Pressable>
            <Pressable style={styles.center} onPress={() => history.push("/")}>
              <Image
                source={require("../../data/images/icons/play.png")}
                style={styles.icon}
              />
              <Text style={styles.text}>Jugar</Text>
            </Pressable>
            <Pressable style={styles.center} onPress={() => history.push("/")}>
              <Image
                source={require("../../data/images/icons/inventarioBlanco.png")}
                style={styles.icon}
              />
              <Text style={styles.text}>Inventario</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

//Exporting MenuScreen
export default MenuScreen;
