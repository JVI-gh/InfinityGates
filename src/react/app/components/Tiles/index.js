//Imports
import React, { Component } from "react";
import {
  StyleSheet,
  Pressable,
} from "react-native";

//Stylesheet
const styles = StyleSheet.create({
  tile: {
    width: 50,
    height: 50,
  },
});

//Component declaration
export default class index extends Component {
  /* Props is populating the variables needed for the componet working */
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    //Marks the functions and variables that the needed is going to use

    const {color, updateMap} = this.props;
    const {} = this.state;

    return (
      <Pressable 
        style={[styles.tile, styles.tileUnselected, {backgroundColor: color.bgColor}]}
        onPress={() => {
            color.changeState(1);
            updateMap();
          }
        }
      />
    );
  }
}
