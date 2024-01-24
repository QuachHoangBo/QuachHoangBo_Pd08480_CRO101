import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        // eslint-disable-next-line no-undef
        source={require("../img/welcome.png")}
        style={{ width: "90vw", height: "50vw" }}
      />
      <Text
        style={{ fontSize: "10vw", fontWeight: "bold", textAlign: "center" }}
      >
        {" "}
        You&#39;ll Find <br />{" "}
        <Text style={{ color: "#FCA34D", textDecorationLine: "underline" }}>
          All Your Needs
        </Text>{" "}
        <br /> Here!
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#4F63AC",
          padding: 10,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Text
          style={{ textAlign: "center", fontWeight: "bold", fontSize: "7vw" }}
        >
          Get Started
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 20,
    paddingTop: 50,
    width: "100%",
  },
});

export default App;
