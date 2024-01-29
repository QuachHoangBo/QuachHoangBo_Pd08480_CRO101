/* eslint-disable no-undef */
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        source={require("./background.jpg")}
        style={styles.image}
      >
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: 20,
            boxSizing: "border-box",
          }}
        >
          <Text style={styles.text}>
            <Text style={styles.firstLine}>Discover</Text>
            <br />
            <Text style={styles.secondLine}>World with us</Text>
            <br />
            <Text style={{ color: "white", fontSize: "5vw" }}>
              A gateway to new experiences
            </Text>
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white" }}> Get Started </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "whitesmoke",
    alignItems: "center",
    justifyContent: "center",
    // fontFamily: "Roboto-Black",
  },
  image: {
    width: "100%",
    flex: 1,
    resizeMode: "cover",
  },
  text: {
    flex: 2,
    flexDirection: "row",
    textAlign: "left",
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  firstLine: {
    color: "white",
    fontSize: "10vw",
    fontWeight: "bold",
  },
  secondLine: {
    color: "white",
    fontSize: "10vw",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#4F63AC",
    width: 100,
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
