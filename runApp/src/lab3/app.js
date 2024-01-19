import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.hop1}>
        <Text>Hộp thứ 1</Text>
      </View>
      <View style={styles.hop2}>
        <Text>Hộp thứ 2</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  hop1: {
    width: "50%",
    height: "50px",
  },
  hop2: {
    width: "50%",
    height: "50px",
  },
});

export default App;
