import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const App = () => {
  <SafeAreaView>
    <View style={styles.container}>
      <Image
        // eslint-disable-next-line no-undef
        source={require("../img/welcome.png")}
        style={{ width: "80%", height: "auto" }}
      />
      <Text>
        {" "}
        You&#39;ll Find <br />{" "}
        <Text style={{ color: "gold" }}>All Your Needs</Text> <br /> Here!
      </Text>
      <TouchableOpacity style={{ backgroundColor: "gold", padding: 10 }}>
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
          Get Started
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    paddingTop: 50,
  },
});

export default App;
