import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native";

const App = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.containerMain}>
      <View style={styles.container1}>
        <View>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Nhập họ tên"
            style={styles.tipStyle}
          />
          <TextInput
            value={phone}
            onChangeText={setPhone}
            placeholder="Nhập số điện thoại"
            keyboardType="phone-pad"
            style={styles.tipStyle}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Nhập mật khẩu"
            secureTextEntry={true}
            style={styles.tipStyle}
          />
        </View>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text}>
          Em vào đời bằng <Text style={{ color: "red" }}>vang đỏ </Text>anh vào
          đời bằng <Text style={{ color: "yellow" }}>nước trà</Text>
        </Text>
        <Text style={styles.text}>
          Bằng cơn mưa thơm
          <Text
            style={{
              fontWeight: "bold",
              fontStyle: "italic",
              fontSize: "Larger",
            }}
          >
            &nbsp;mùi đất
          </Text>{" "}
          và
          <Text style={{ fontSize: "smaller" }}>
            {" "}
            bằng hoa dại mọc trước nhà
          </Text>
        </Text>
        <Text style={{ color: "gray" }}>
          Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
        </Text>
        <Text style={styles.text}>
          Lý trí em là
          <Text style={styles.text4}>___c___ô___n___g______c___ụ_</Text>
          <br />
          còn trai tim anh là
          <Text style={styles.text4}>____đ___ộ___n___g_____c___ơ___</Text>
        </Text>
        <Text style={styles.text5}>
          Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình
        </Text>
        <Text style={styles.text6}>
          Anh chỉ muôn chân mình đạp đất không muốn đạp ai dưới chân mình
        </Text>
        <Text style={styles.text78}>
          Em vào đời bằng <Text style={{ color: "white" }}>mây trắng</Text> em
          vào đời bằng <Text style={{ color: "yellow" }}>nắng xanh</Text> <br />
          Em vào đời bằng <Text style={{ color: "yellow" }}>đại lộ</Text> và con
          đường đó giờ <Text style={{ color: "white" }}>vắng anh</Text>
        </Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 2,
    backgroundColor: "pink",
    alignItems: "center",
  },
  container1: {
    width: "400px",
    padding: "20px",
    color: "white",
    fontSize: "20px",
  },
  tipStyle: {
    width: "100%",
    height: 40,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
    borderWidth: "2px",
    marginBottom: "10px",
  },
  // -------
  container2: {
    width: "400px",
    backgroundColor: "lightblue",
    padding: "20px",
    color: "white",
    fontSize: "20px",
    borderRadius: "20px",
  },

  text: {
    color: "white",
    textAlign: "justify",
  },
  text4: {
    fontWeight: "bold",
    textAlign: "justify",
  },
  text5: {
    color: "white",
    textAlign: "right",
    flexWrap: "wrap",
  },
  text6: {
    color: "gold",
    textAlign: "center",
    fontWeight: "bold",
    flexWrap: "wrap",
  },

  text78: {
    color: "black",
    textAlign: "justify",
    fontWeight: "bold",
  },
});
export default App;
