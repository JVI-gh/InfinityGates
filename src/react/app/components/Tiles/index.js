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
    margin: 25,
    borderRadius: 50
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

    const {tile, updateMap, updateTile} = this.props;
    const {} = this.state;

    return (
      <Pressable 
        style={[styles.tile, styles.tileUnselected, {backgroundColor: tile.asignColor()}]}
        onPress={() => {
            updateTile(tile);
            updateMap();
          }
        }
      />
    );
  }
}
