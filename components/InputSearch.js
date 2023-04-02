import { StyleSheet, Text, View, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const InputSearch = (props) => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={24} color="gray" />
      <TextInput style={styles.input} placeholder={props.placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#dee2e6",
  },
  input: {
    paddingLeft: 10,
    borderColor: "#ebebeb",
    backgroundColor: "#dee2e6",
  },
});

export default InputSearch;
