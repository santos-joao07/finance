import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import InputSearch from "../components/InputSearch";
import HeaderViewGain from "../components/HeaderViewGain";
import Card from "../components/Card";

export default function ViewGain({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperInput}>
        <HeaderViewGain
          name="Ganhos"
          title="Ganho do mês"
          iconName="plus"
          iconColor="#00fa41"
        />

        <InputSearch placeholder="Pesquisar ganho" />

        <View style={styles.cardView}>
          <Card title="Salário" iconColor="#00fa41" />
          <Card title="Vale Aliememtação" iconColor="#00fa41" />
          <Card title="Bolsa" iconColor="#00fa41" />
          <Card title="Freelancer" iconColor="#00fa41" />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  cardView: {
    marginTop: 50,
  },
  wrapperInput: {
    height: 500,
    marginTop: "10%",
    width: "80%",
  },
});
