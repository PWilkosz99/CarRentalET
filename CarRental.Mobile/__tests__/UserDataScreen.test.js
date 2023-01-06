import React from "react";
import {
  StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView,
} from "react-native";
import renderer from "react-test-renderer";

describe("UserDataScreen", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<UserDataScreenTester />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<UserDataScreenTester />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// temrporary solution
function UserDataScreenTester() {
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [postalCode, setPostalCode] = React.useState("");
  const [drivingLicense, setDrivingLicense] = React.useState("");

  const handleClick = () => {
    if (!firstname) return alert("Please provide your firstname");
    if (!lastname) return alert("Please provide your lastname");
    if (!phone) return alert("Please provide your phone number");
    if (!address) return alert("Please provide your address");
    if (!city) return alert("Please provide your city");
    if (!country) return alert("Please provide your country");
    if (!postalCode) return alert("Please provide your postal code");
    if (!drivingLicense) return alert("Please provide your driving license");

    const user = {
      firstname,
      lastname,
      phone,
      address,
      city,
      country,
      postalCode,
      drivingLicense,
    };

    navigation.navigate("PaymentInfoScreen", {
      user, car, startDate, endDate, cost,
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Provide informations about you</Text>
        <View style={styles.inputContaier}>
          <TextInput
            placeholder="Firstname"
            value={firstname}
            autoCompleteType="name"
            onChangeText={(text) => setFirstname(text)}
            placeholderTextColor="gray"
            style={styles.inputSmall}
          />
          <TextInput
            placeholder="Lastname"
            value={lastname}
            autocompleteType="name"
            onChangeText={(text) => setLastname(text)}
            placeholderTextColor="gray"
            style={styles.inputSmall}
          />
          <TextInput
            placeholder="Phone"
            value={phone}
            autoCompleteType="tel"
            onChangeText={(text) => setPhone(text)}
            placeholderTextColor="gray"
            style={styles.input}
          />
          <TextInput
            placeholder="City"
            value={city}
            autoCompleteType="address-level2"
            onChangeText={(text) => setCity(text)}
            placeholderTextColor="gray"
            style={styles.inputSmall}
          />
          <TextInput
            placeholder="Postal code"
            value={postalCode}
            autoCompleteType="postal-code"
            onChangeText={(text) => setPostalCode(text)}
            placeholderTextColor="gray"
            style={styles.inputSmall}
          />
          <TextInput
            placeholder="Address"
            value={address}
            autoCompleteType="street-address"
            onChangeText={(text) => setAddress(text)}
            placeholderTextColor="gray"
            style={styles.input}
          />
          <TextInput
            placeholder="Country"
            value={country}
            autoCompleteType="country-name"
            onChangeText={(text) => setCountry(text)}
            placeholderTextColor="gray"
            style={styles.input}
          />
          <TextInput
            placeholder="Driving license number"
            value={drivingLicense}
            autoCompleteType="cc-number"
            onChangeText={(text) => setDrivingLicense(text)}
            placeholderTextColor="gray"
            style={styles.input}
          />
        </View>
        <TouchableOpacity onPress={handleClick} style={styles.button}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
