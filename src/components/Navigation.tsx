/** @format */
import { StyleSheet, Text, View } from "react-native";

export default function Navigation() {
  return (
    <View style={styles.navView}>
      <Text style={styles.navContainer}>Home</Text>
      <Text style={styles.navContainer}>project 1</Text>
      <Text style={styles.navContainer}>project 2</Text>
      <Text style={styles.navContainer}>project 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navView: {
    flex: 1,
    flexDirection: "row",
    backgrondColor: "black",
  },
  navContainer: {
    flex: 1,
    backgrondColor: "gray",
    color: "white",
    border: "1px solid",
    borderRadius: 15,
    fontSize: 12,
    fontWeight: "500",
  },
});
