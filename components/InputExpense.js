import { StyleSheet, Text, View, TextInput } from "react-native";

const InputEdit = (props) => {
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
    alignItems: "center",
  },
  label: {
    fontWeight: "bold",
    marginTop: 30,
    color: "#f85f6a",
    fontSize: 32,
  },
  input: {
    marginTop: 20,
    paddingLeft: 116,
    height: 40,
    width: "90%",
    borderBottomWidth: 1,
    borderColor: "#ebebeb",
  },
});

export default InputEdit;
