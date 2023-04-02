import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

const ButtonDrawerEmoji = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={props.onPress}>
        <Entypo name={props.iconName} size={24} color={props.iconColor} />
        <Text style={styles.textBtn}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: "70%",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  img: {
    height: 30,
    width: 30,
  },
  textBtn: {
    color: "#fff",
    marginLeft: 8,
    fontWeight: "bold",
  },
});

export default ButtonDrawerEmoji;
