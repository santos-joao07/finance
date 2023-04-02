import { StyleSheet, Text, View, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Card = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>

      <View style={styles.icons}>
        <AntDesign name="delete" size={24} color={props.iconColor} />
        <AntDesign name="edit" size={24} color={props.iconColor} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#ebebeb",
    paddingBottom: 10,
  },
  icons: {
    width: "20%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  input: {
    paddingLeft: 10,
    borderColor: "#ebebeb",
    backgroundColor: "#dee2e6",
  },
});

export default Card;
