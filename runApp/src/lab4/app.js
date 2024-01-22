import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";

const DATA = [
  {
    id: 1,
    name: "John Doe",
    phone: "123-456-7890",
    image: "./img/avatarLab4.png",
  },
  {
    id: 2,
    name: "Jane Doe",
    phone: "456-789-0123",
    image: "./img/avatarLab4.png",
  },
  {
    id: 3,
    name: "John Smith",
    phone: "789-012-3456",
    image: "./img/avatarLab4.png",
  },
  {
    id: 4,
    name: "Mary Johnson",
    phone: "101-202-3030",
    image: "./img/avatarLab4.png",
  },
  {
    id: 5,
    name: "Peter Jones",
    phone: "202-303-4040",
    image: "./img/avatarLab4.png",
  },
  {
    id: 6,
    name: "Susan Brown",
    phone: "303-404-5050",
    image: "./img/avatarLab4.png",
  },
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View style={styles.hop}>
            <Image
              // eslint-disable-next-line no-undef
              source={require("./img/avatarLab4.png")}
              style={styles.avatar}
            />
            <View>
              <Text>{item.name}</Text>
              <Text>{item.phone}</Text>
            </View>
            <TouchableOpacity>
              <Text style={{ color: "green", fontWeight: "bold" }}>Call</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style={"auto"}></StatusBar>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "red",
  },
  hop: {
    flex: 3,
    backgroundColor: "white",
    width: "400px",
    height: "70px",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "red",
    margin: "10px",
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
  },
});

export default App;
