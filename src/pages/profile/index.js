import { View, Text, StyleSheet } from "react-native";

export default function Profile(){

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Welcome to your profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#e69138",
  },
  title:{
    fontSize: 20,
    color: "#000000",
  }
})