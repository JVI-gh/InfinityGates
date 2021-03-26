import React, { Component } from "react"; //Importing React to create react components
import { StyleSheet, Text, SafeAreaView, View, Pressable } from "react-native"; //Importing React Native components

//StyleSheets on React, must use cammelCase
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
  },
  containerbottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start"
  },
  item: {
    width: "50%", // is 50% of container width
  },
  textsizes: {
    fontSize: 36,
  },
  bottombuttons: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "30%"
  },
});

const ABox = () => <SafeAreaView style={styles.box} />;

//This is the view that is going to be rendered, it's treated as a class that extends Component
class MenuScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.maincontainer}>
        <View style={styles.container}>

          <Pressable style={[styles.item, { backgroundColor: "blue" }]}>
            <Text style={styles.textsizes}>Button 1</Text>
          </Pressable>

          <Pressable style={[styles.item, { backgroundColor: "red" }]}>
            <Text style={styles.textsizes}>Button 2</Text>
          </Pressable>

        </View>

        <View style={styles.container}>

          <Pressable style={[styles.bottombuttons, { backgroundColor: "blue" }]}>
            <Text style={styles.textsizes}>Button 1</Text>
          </Pressable>

          <Pressable style={[styles.bottombuttons, { backgroundColor: "red" }]}>
            <Text style={styles.textsizes}>Button 2</Text>
          </Pressable>

          <Pressable style={[styles.bottombuttons, { backgroundColor: "green" }]}>
            <Text style={styles.textsizes}>Button 3</Text>
          </Pressable>

        </View>
      </SafeAreaView>
    );
  }
}

export default MenuScreen;
