import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

const Profile = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.source} style={styles.user} />
      <Text style={styles.label}>{props.name}</Text>
      <Text style={styles.email}>{props.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  user: {
    height: 80,
    width: 80,
  },
  label: {
    fontWeight: "bold",
    marginTop: 10,
    color: "#fff",
  },
  email: {
    color: "#fff",
  },
});

export default Profile;
