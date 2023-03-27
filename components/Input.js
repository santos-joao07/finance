import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

const Input = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.name}</Text>
      <TextInput style={styles.input} placeholder={props.placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    color: "#989eb1",
  },
  label: {
    fontWeight: "bold",
    marginTop: 30,
    color: "#00fa41",
  },
  input: {
    height: 40,
    width: "90%",
    borderBottomWidth: 1,
    padding: 10,
    borderColor: "#ebebeb",
  },
});

export default Input;
