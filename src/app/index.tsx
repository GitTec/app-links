import { StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/colors";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo ao Links!!</Text>
      <Text style={styles.title}>Vai de Links??</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.gray[500],
  },
  title: {
    color: colors.green[900],
    fontSize: 25,
    fontWeight: "bold",
  },
});
