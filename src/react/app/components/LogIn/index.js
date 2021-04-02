//Imports
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";

//Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0, 0.5)",
  },
  content: {
    padding: 20,
    flex: 1,
    backgroundColor: "whitesmoke",
    marginTop: 70,
  },
  text: {
    color: "white",
  },
  textInput: {
    borderBottomWidth: 1,
  },
  block: {
    margin: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20,
  },
  button: {
    alignItems: "center",
    padding: 10,
    width: "50%",
    borderRadius: 5,
    backgroundColor: "#2196F3",
  },
});

//Component declaration
export default class index extends Component {
  /* Props is populating the variables needed for the componet working */
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    //Marks the functions and variables that the needed is going to use
    const { visible, onCloseModal, login } = this.props;
    const { username, password } = this.state;
    return (

      <Modal visible={visible} transparent={true} animationType="fade">
        <TouchableOpacity
          style={styles.container}
          onPress={onCloseModal} // It just works, for closing just click outside the modal or in the white window
        >

          {/* Username input */}
          <View style={styles.content}>
            <View style={styles.block}>
              <Text>Nombre de usuario</Text>
              <TextInput
                style={styles.textInput}
                value={username}
                onChangeText={(user) => this.setState({ username:user })}
                placeholder="Username..."
                clearButtonMode="always"
              />
            </View>

            {/* Password input */}
            <View style={styles.block}>
              <Text>Contraseña</Text>
              <TextInput
                style={styles.textInput}
                value={password}
                onChangeText={(pass) => this.setState({ password:pass })}
                placeholder="Password..."
                clearButtonMode="always"
              />
            </View>

            {/* Submit button for login */}
            <View style={styles.buttonRow}>
              {/* Test for navigation (TEMPORARY) */}
              <Pressable style={[styles.button]} onPress={() => login(username, password)}>
                <Text style={styles.text}>Identificarse</Text>
              </Pressable>
            </View>
          </View>

        </TouchableOpacity>
      </Modal>
    );
  }
}
