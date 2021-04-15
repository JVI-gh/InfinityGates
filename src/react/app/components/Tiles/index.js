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
  },
  tile: {
    width: 50,
    height: 50,
  },
  tileUnselected: {
    backgroundColor: "pink",
  },
  tileSelected: {
    backgroundColor: "red",
  }
});

//Component declaration
export default class index extends Component {
  /* Props is populating the variables needed for the componet working */
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "pink"
    };
  }

  _changeStyle() {
    this.setState({
      backgroundColor: this.props.position() == this.props.levelFloor ? "red" : "pink"
    })
  }

  render() {
    //Marks the functions and variables that the needed is going to use

    const {
      identifier,
      tileType,
      position,
      levelFloor,
      advancePosition,
    } = this.props;
    const {} = this.state;

    return (
      <Pressable
        className={styles.tileUnselected}
        style={[styles.tile, {backgroundColor: this.state.backgroundColor}]}
        onPress={() => {
          console.log("piso actual: " + position());
          if (position() == levelFloor) {
            this._changeStyle();
            console.log("sala: " + identifier + ", tipo: " + tileType);
            advancePosition();
            console.log("se avanza al piso: " + position());
          } else {
            console.log("se está intentando acceder a una sala del piso " + levelFloor)
          }
        }}
      />
    );
  }
}
