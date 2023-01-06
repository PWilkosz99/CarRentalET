import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet, Text, TouchableOpacity, View,
} from "react-native";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

function HomeScreen() {
  const navigation = useNavigation();

  const handleRedirect = () => {
    navigation.navigate('Search');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome on Car Rental page!
      </Text>
      <Text style={styles.subtitle}>
        Click on Search button to find a car!
      </Text>
      <TouchableOpacity
        onPress={handleRedirect}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  text: {
    color: "black",
  },
  title: {
    color: "black",
    fontSize: 40,
    paddingBottom: 80,
    fontWeight: "bold"
  },
  subtitle: {
    color: "black",
    fontSize: 20,
    paddingBottom: 40,
  }
});
