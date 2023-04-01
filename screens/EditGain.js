import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import InputGain from "../components/InputGain";
import Button from "../components/Button";

export default function EditGain({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperInput}>
        <Text style={styles.register}>Editar ganho</Text>

        <InputGain
          style={styles.text}
          name="Titulo"
          placeholder={"Ex: Salário"}
        />

        <InputGain name="Valor" placeholder={"Ex: R$ 20.000"} />

        <Button title="Editar" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  register: {
    marginLeft: 70,
    fontSize: 30,
    fontWeight: "bold",
  },
  wrapperInput: {
    height: 500,
    marginTop: "20%",
    width: "80%",
  },
  text: {
    color: "#f85f6a",
  },
});
