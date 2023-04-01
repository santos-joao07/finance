import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import InputExpense from "../components/InputExpense";
import ButtonExpense from "../components/ButtonExpense";

export default function AddExpense({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperInput}>
        <Text style={styles.register}>Inserir despesa</Text>

        <InputExpense
          style={{ color: "#f85f6a" }}
          name="Titulo"
          placeholder={"Ex: Aluguel"}
        />

        <InputExpense name="Valor" placeholder={"Ex: R$ 500"} />

        <ButtonExpense title="Adicionar" />
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
    marginLeft: 58,
    fontSize: 30,
    fontWeight: "bold",
  },
  wrapperInput: {
    height: 500,
    marginTop: "20%",
    width: "80%",
  },
});
