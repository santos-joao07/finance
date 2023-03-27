import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const TextAccount = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.textFooterPrimary}>
          {props.primary}
          <Text style={styles.textFooterSecundary}> {props.secundary}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textFooterPrimary: {
    marginLeft: "14%",
    marginTop: 50,
    color: "#989eb1",
  },
  textFooterSecundary: {
    color: "#000",
    fontWeight: "bold",
  },
});

export default TextAccount;
