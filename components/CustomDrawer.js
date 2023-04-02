import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Profile from "../components/Profile";
import ButtonDrawer from "../components/ButtonDrawer";
import ButtonDrawerEmoji from "../components/ButtonDrawerEmoji";

function CustomDrawer({ navigation, ...props }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Profile
          source={require("../assets/user.png")}
          name={"Lourival do Python"}
          email={"lourivalformal@email.com"}
        />

        <View style={styles.body}>
          <ButtonDrawer
            iconName="barschart"
            iconColor="white"
            title={"Relatórios"}
            onPress={() => navigation.navigate("Register")}
          />

          <ButtonDrawer
            iconName="checkcircle"
            iconColor="white"
            title={"Inserir ganhos"}
            onPress={() => navigation.navigate("AddGain")}
          />

          <ButtonDrawerEmoji
            iconName="emoji-happy"
            iconColor="white"
            title={"Visualizar ganhos"}
            onPress={() => navigation.navigate("ViewGain")}
          />

          <ButtonDrawerEmoji
            iconName="emoji-sad"
            iconColor="white"
            title={"Visualizar despesas"}
            onPress={() => navigation.navigate("ViewExpense")}
          />

          <ButtonDrawer
            iconName="minuscircle"
            iconColor="white"
            title={"Inserir despesas"}
            onPress={() => navigation.navigate("AddExpense")}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.text}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  wrapper: {
    marginTop: 80,
    height: "80%",
    width: "100%",
    alignItems: "center",
  },
  body: {
    height: "32%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 350,
  },
  user: {
    height: 80,
    width: 80,
    borderRadius: 20,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CustomDrawer;
