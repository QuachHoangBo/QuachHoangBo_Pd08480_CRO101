/* eslint-disable no-undef */
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={require("./background.jpg")} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Hội An</Text>
        <Text style={styles.infoRating}>5.0 Sao</Text>
        <Text style={styles.infoLocation}>
          Hội An là một thành phố trực thuộc tỉnh Quảng Nam, Việt Nam. Phố cổ
          Hội An từng là một thương cảng quốc tế sầm uất, gồm những di sản kiến
          trúc đã có từ hàng trăm năm trước, được UNESCO công nhận là di sản văn
          hóa thế giới từ năm 1999
        </Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>100$/Ngày</Text>
        <TouchableOpacity style={styles.reserve}>Đặt ngay</TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  image: {
    width: "100%",
    height: "500px",
    resizeMode: "cover",
  },
  infoContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "blue",
    padding: 20,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 50,
    fontWeight: "bold",
  },
  infoRating: {
    fontSize: 20,
    color: "#999999",
  },
  infoLocation: {
    fontSize: 20,
    color: "#999999",
    textAlign: "justify",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    margin: 10,
    backgroundColor: "#0000ff",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  reserve: {
    fontSize: 16,
    color: "#0000ff",
    width: 100,
    height: 50,
    borderRadius: 20,
    backgroundColor: "whitesmoke",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
});

export default App;
