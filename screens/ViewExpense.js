import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import InputSearch from "../components/InputSearch";
import HeaderViewExpense from "../components/HeaderViewExpense";
import Card from "../components/Card";

export default function ViewExpense({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperInput}>
        <HeaderViewExpense
          name="Gastos"
          title="Gastos do mês"
          iconName="plus"
          iconColor="#f85f6a"
        />

        <InputSearch placeholder="Pesquisar ganho" />

        <View style={styles.cardView}>
          <Card title="Aluguel" iconColor="#f85f6a" />
          <Card title="Conta de luz" iconColor="#f85f6a" />
          <Card title="Conta de água" iconColor="#f85f6a" />
          <Card title="Cartão de crédito" iconColor="#f85f6a" />
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
