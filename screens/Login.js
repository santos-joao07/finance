import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Input from "../components/Input";
import TextAccount from "../components/TextAccount";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      <View style={styles.wrapper}>
        <Text style={styles.login}>Login</Text>
        <Text style={styles.text}>Olá! Bom ver você de novo.</Text>

        <Input name="Email" placeholder={"Insira seu email"} />

        <Input name="Senha" placeholder={"Insira sua senha"} />

        <Button title="Entrar" onPress={() => navigation.navigate("Home")} />

        <TextAccount
          primary="Não possui uma conta?"
          secundary=" Cadastre-se"
          onPress={() => navigation.navigate("Register")}
        />

        <TouchableOpacity>
          <Text style={styles.resetPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

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
  logo: {
    height: 200,
    width: 200,
    marginTop: 100,
    borderRadius: 20,
  },
  wrapper: {
    height: 550,
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
  textBtn: {
    color: "#fff",
  },
  resetPassword: {
    marginLeft: "28%",
    marginTop: 100,
    color: "#000",
  },
});
