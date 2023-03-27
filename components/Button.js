import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Button = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={props.onPress}>
        <Text style={styles.textBtn}>{props.title}</Text>
      </TouchableOpacity>
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
});

export default Button;
