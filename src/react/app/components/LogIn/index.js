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

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    const { visible, onCloseModal, history } = this.props;
    const { username, password } = this.state;
    return (
      <Modal visible={visible} transparent={true} animationType="fade">
        <TouchableOpacity
          style={styles.container}
          onPress={onCloseModal} // ESTO FUNCIONA REGULAR, se cierra clicando en la ventana en blanco no solo por fuera del formulario
        >
          <View style={styles.content}>
            <View style={styles.block}>
              <Text>Nombre de usuario</Text>
              <TextInput
                style={styles.textInput}
                value={username}
                onChangeText={(username) => this.setState({ username })}
                placeholder="Username..."
                clearButtonMode="always"
              />
            </View>
            <View style={styles.block}>
              <Text>Contraseña</Text>
              <TextInput
                style={styles.textInput}
                value={password}
                onChangeText={(password) => this.setState({ password })}
                placeholder="Password..."
                clearButtonMode="always"
              />
            </View>
            <View style={styles.buttonRow}>
              {/* Test for navigation (TEMPORARY) */}
              <Pressable style={[styles.button]} onPress={() => history.push("/Menu")}>
                <Text style={styles.text}>Identificarse</Text>
              </Pressable>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}
