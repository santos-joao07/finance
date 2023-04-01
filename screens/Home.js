import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Olá!</Text>

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
  /*  wrapper: {
    height: 550,
    marginTop: 80,
    width: "80%",
  }, */
  text: {
    fontSize: 44,
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
