import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.login}>Home</Text>
        <Text style={styles.text}>Olá! Bom ver você de novo.</Text>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  wrapper: {
    height: 550,
    marginTop: 80,
    width: "80%",
  },
  login: {
    fontSize: 20,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    color: "#989eb1",
  },
  btn: {
    marginTop: 30,
    height: 48,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    backgroundColor: "#00fa41",
  },
  textBtn: {
    color: "#fff",
  },
  resetPassword: {
    marginLeft: "28%",
    marginTop: 100,
    color: "#000",
  },
});
