/* eslint-disable no-undef */
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  CheckBox,
} from "react-native";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          left: 40,
          top: 20,
        }}
      >
        <Image
          style={styles.logo}
          source={require("../img/arrowLeftBlack.png")}
        />
        <Text style={styles.title}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.form}>
        <Text style={{ color: "#4F63AC" }}>Name</Text>
        <TextInput
          placeholder="YourName..."
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <Text style={{ color: "#4F63AC" }}>Email</Text>
        <TextInput
          placeholder="example@gmail.com"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <Text style={{ color: "#4F63AC" }}>Password</Text>
        <TextInput
          placeholder="*********"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry={true}
        />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CheckBox
          checked={isChecked}
          value={isChecked}
          onValueChange={setIsChecked}
          style={styles.checkbox}
        />
        <Text> I agree with Terms & Privacy</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // TODO: xử lý đăng ký
        }}
      >
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 16 }}>
          Sign Up
        </Text>
      </TouchableOpacity>

      <Text style={styles.or}>Or sign up with</Text>

      <TouchableOpacity style={styles.button}>
        <Image style={styles.icon} source={require("../img/iconGG.png")} />
      </TouchableOpacity>

      <Text style={styles.already}>Already have an account? Sign In</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "425",
    height: "644",
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    padding: 20,
    gap: 10,
  },
  logo: {
    width: 26,
    height: 20,
    borderRadius: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4F63AC",
  },
  form: {
    width: 300,
    height: 300,
    gap: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  checkbox: {
    margin: 10,
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: "#4F63AC",
    color: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  or: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4F63AC",
  },
  icon: {
    width: 40,
    height: 40,
  },
  already: {
    fontSize: 16,
    textAlign: "center",
    color: "#4F63AC",
  },
});

export default App;
