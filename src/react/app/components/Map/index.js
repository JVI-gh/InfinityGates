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

import Tile from "../Tiles";

//Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  row: {
    bottom: 0,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "80%",
  },
  row1: {
    marginBottom: 100,
  },
  row2: {
    marginBottom: 200,
  },
  row3: {
    marginBottom: 300,
  },
  row4: {
    marginBottom: 400,
  },
  row5: {
    marginBottom: 500,
  },
  row6: {
    marginBottom: 600,
  },
});

const Tiles = [
  "Combate",
  "Combate Élite",
  "Tesoro",
  "Tienda",
  "Hoguera",
  "Misión",
  "Sala misteriosa",
  "Boss",
];
const RamdomTiles = [
  "Combate",
  "Combate Elíte",
  "Tesoro",
  "Tienda",
  "Sala misteriosa",
  "Hoguera",
];

const initialState = {
  position: 1,
};

//Component declaration
export default class index extends Component {
  /* Props is populating the variables needed for the componet working */

  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  actualPosition = () => {
      return this.state.position;
  }

  ramdomEvent = () => {
    let probability = Math.floor(Math.random() * RamdomTiles.length);
    return RamdomTiles[probability];
  };

  advancePosition = () => {
      this.state.position++;
  }

  render() {
    //Marks the functions and variables that the needed is going to use
    const {} = this.props;
    const { position } = this.state;
    return (
      <View style={styles.container}>
        <View style={[styles.row, styles.row1]}>
          <Tile
            identifier={1}
            tileType={Tiles[0]}
            position={this.actualPosition}
            levelFloor={1}
            advancePosition={this.advancePosition}
          />
          <Tile
            identifier={2}
            tileType={Tiles[0]}
            position={this.actualPosition}
            levelFloor={1}
            advancePosition={this.advancePosition}
          />
          <Tile
            identifier={3}
            tileType={Tiles[0]}
            position={this.actualPosition}
            levelFloor={1}
            advancePosition={this.advancePosition}
          />
        </View>

        <View style={[styles.row, styles.row2]}>
          <Tile
            identifier={4}
            tileType={this.ramdomEvent()}
            position={this.actualPosition}
            levelFloor={2}
            advancePosition={this.advancePosition}
          />
          <Tile
            identifier={5}
            tileType={this.ramdomEvent()}
            position={this.actualPosition}
            levelFloor={2}
            advancePosition={this.advancePosition}
          />
        </View>

        <View style={[styles.row, styles.row3]}>
          <Tile
            identifier={6}
            tileType={Tiles[4]}
            position={this.actualPosition}
            levelFloor={3}
            advancePosition={this.advancePosition}
          />
        </View>

        <View style={[styles.row, styles.row4]}>
          <Tile
            identifier={7}
            tileType={this.ramdomEvent()}
            position={this.actualPosition}
            levelFloor={4}
            advancePosition={this.advancePosition}
          />
          <Tile
            identifier={8}
            tileType={this.ramdomEvent()}
            position={this.actualPosition}
            levelFloor={4}
            advancePosition={this.advancePosition}
          />
        </View>

        <View style={[styles.row, styles.row5]}>
          <Tile
            identifier={9}
            tileType={this.ramdomEvent()}
            position={this.actualPosition}
            levelFloor={5}
            advancePosition={this.advancePosition}
          />
          <Tile
            identifier={10}
            tileType={this.ramdomEvent()}
            position={this.actualPosition}
            levelFloor={5}
            advancePosition={this.advancePosition}
          />
          <Tile
            identifier={11}
            tileType={this.ramdomEvent()}
            position={this.actualPosition}
            levelFloor={5}
            advancePosition={this.advancePosition}
          />
        </View>

        <View style={[styles.row, styles.row6]}>
          <Tile
            identifier={12}
            tileType={Tiles[7]}
            position={this.actualPosition}
            levelFloor={6}
            advancePosition={this.advancePosition}
          />
        </View>
      </View>
    );
  }
}
