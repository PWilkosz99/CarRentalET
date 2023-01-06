import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet, TouchableOpacity, Text, View,
} from "react-native";
import DatePicker, { getToday } from "react-native-modern-datepicker";

function StartDateScreen() {
  const [startDate, setStartDate] = useState("");

  const navigation = useNavigation();

  const handleClick = () => {
    if (!startDate) return alert("Please select start date");
    if (startDate < getToday()) return alert("Start date must be after today");
    navigation.navigate("EndDateScreen", { startDate });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select start date</Text>
      <Text style={styles.subtitle}>Date you want to rent your car</Text>
      <DatePicker
        style={styles.picker}
        onSelectedChange={(date) => setStartDate(date)}
        mode="calendar"
      />
      <TouchableOpacity onPress={handleClick} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
    // start date(next) -> end date(search) -> car tiles -> car details -> reservation
  );
}

export default StartDateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 30,
    color: "black",
  },
  picker: {
    height: "50%",
    width: "100%",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 5,
  },
});
