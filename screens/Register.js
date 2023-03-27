import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Input from "../components/Input";
import TextAccount from "../components/TextAccount";
import Button from "../components/Button";

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperInput}>
        <Text style={styles.register}>Cadastre-se</Text>

        <Input name="Email" placeholder={"Insira seu email"} />

        <Input name="Senha" placeholder={"Insira sua senha"} />

        <Button title="Registrar" />

        <TextAccount
          primary="Já possui uma conta?"
          secundary=" Entrar"
          onPress={() => navigation.navigate("Login")}
        />
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
    fontSize: 30,
    fontWeight: "bold",
  },
  wrapperInput: {
    height: 500,
    marginTop: "20%",
    width: "80%",
  },
});
