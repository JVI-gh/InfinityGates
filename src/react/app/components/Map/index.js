//Imports
import React, { Component } from "react";
import {
  View,
  StyleSheet,
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
  }
});

const tileStates = ["visitable", "actual", "visited", "disabled", "unknown"];

export class TileModel{
  id;
  state;
  bgColor;

  constructor(id, state) {
    this.id = id;
    this.state = state;
    this.bgColor = this.asignColor();
  }

  asignColor = () => {
    if(tileStates[this.state] === tileStates[0]) {
      return "green";
    } else if(tileStates[this.state] === tileStates[1]) {
      return "yellow";
    } else if(tileStates[this.state] === tileStates[2]) {
      return "red";
    } else if(tileStates[this.state] === tileStates[3]) {
      return "grey";
    } else if(tileStates[this.state] === tileStates[4]) {
      return "blue";
    }
  }

  changeState = (state) => {
    this.state = state;
    this.asignColor();
    console.log(this.state);
  }
}

//Component declaration
export default class index extends Component {
  /* Props is populating the variables needed for the componet working */

  constructor(props) {
    super(props);
    this.state = {
      /* tileMap: [
        {
          id: 0,
          state: tileStates[0]
        },
        {
          id: 1,
          state: tileStates[4]
        }
      ] */
      tileMap: new TileModel(0, 0)
    };
  }

  updateMap = () => {
    this.setState({
      tileMap: new TileModel(this.state.tileMap.id, this.state.tileMap.state) 
    })
  }

  render() {
    //Marks the functions and variables that the needed is going to use
    const {} = this.props;
    const {tileMap} = this.state;
    return (
      <View style={styles.container}>
        <Tile
          color={tileMap}
          updateMap={this.updateMap}
        />
        <Tile
          color={tileMap}
          updateMap={this.updateMap}
        />
      </View>
    );
  }
}
