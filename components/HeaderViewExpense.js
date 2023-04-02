import { StyleSheet, Text, View, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const HeaderViewExpense = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.title}>{props.title}</Text>
      <AntDesign name={props.iconName} size={24} color={props.iconColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#f85f6a",
    fontSize: 12,
  },
  title: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 20,
  },
});

export default HeaderViewExpense;
