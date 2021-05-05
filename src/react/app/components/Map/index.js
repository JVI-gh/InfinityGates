//Imports
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Tile from "../Tiles";

//Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column-reverse"
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
});

const tileStates = ["visitable", "actual", "visited", "disabled", "unknown"];

export class TileModel {
  id;
  state;
  bgColor;
  level;

  constructor(id, state, level) {
    this.id = id;
    this.state = state;
    this.level = level;
    this.bgColor = this.asignColor();
  }

  asignColor = () => {
    if (tileStates[this.state] === tileStates[0]) {
      return "green";
    } else if (tileStates[this.state] === tileStates[1]) {
      return "yellow";
    } else if (tileStates[this.state] === tileStates[2]) {
      return "red";
    } else if (tileStates[this.state] === tileStates[3]) {
      return "grey";
    } else if (tileStates[this.state] === tileStates[4]) {
      return "blue";
    }
  };

  changeState = (state) => {
    this.state = state;
    this.asignColor();
  }

}

//Component declaration
export default class index extends Component {
  /* Props is populating the variables needed for the componet working */

  constructor(props) {
    super(props);
    this.state = {
      tileMap: [
        [new TileModel(0, 0, 0), new TileModel(1, 0, 0)],
        [new TileModel(2, 4, 1)],
        [new TileModel(3, 4, 2), new TileModel(4, 4, 2)],
        [new TileModel(5, 4, 3), new TileModel(6, 4, 3), new TileModel(7, 4, 3)],
        [new TileModel(8, 4, 4), new TileModel(9, 4, 4)],
        [new TileModel(10, 4, 5)]
      ],
    };
  }

  updateMap = (i) => {
    const tempMap = [];
    this.state.tileMap.forEach((row) => {
      const tempArray = [];
      row.forEach((tile) => {
        tempArray.push(new TileModel(tile.id, tile.state, tile.level));
      });
      tempMap.push(tempArray);
    });
    this.setState({
      tileMap: tempMap,
    });
  };

  globalChangeState = (tile) => {
    if(tile.state == 0){
      if(tile.level != 0) {
        this.state.tileMap[tile.level-1].forEach(tile2 => {
          if(tile2.state == 1) {
            tile2.changeState(2);
          }
        });
      }
      this.state.tileMap[tile.level].forEach(tile2 => {
        if(tile2.id == tile.id) {
          tile2.changeState(1);
        } else {
          tile2.changeState(3);
        }
      });
      if(this.state.tileMap.length > tile.level + 1){
        this.state.tileMap[tile.level+1].forEach(tile2 => {
            tile2.changeState(0);
        });
      }
    }
  }

  render() {
    //Marks the functions and variables that the needed is going to use
    const {} = this.props;
    const { tileMap } = this.state;
    return (
      <View style={styles.container}>
        {tileMap.map((row, key) => (
          <View key={key} style={styles.row}>
            {row.map((tile) => (
              <Tile key={tile.id} tile={tile} updateMap={this.updateMap} updateTile={this.globalChangeState}/>
            ))}
          </View>
        ))}
      </View>
    );
  }
}
