import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.word}>Quách hoàng bo pd08480 </Text>
      <TextInput style={styles.Nhap} placeholder="nhập dữ liệu..."></TextInput>
      <Button style={styles.button} title="button">
        Button
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#00FFFF",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    width: "100%",
  },
  word: {
    color: "blue",
    fontSize: "24px",
    fontWeight: "bold",
  },
  Nhap: {
    height: "50px",
    width: "80%",
    borderWidth: "2px",
    borderColor: "Blue",
    borderRadius: "20px",
  },
  button: {
    width: "100px",
    height: "50px",
    backgroundColor: "pink",
    borderColor: "Black",
    borderWidth: "2px",
  },
});
