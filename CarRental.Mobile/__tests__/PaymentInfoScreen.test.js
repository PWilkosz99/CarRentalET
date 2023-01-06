import {
  StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity,
} from "react-native";
import React from "react";
import renderer from "react-test-renderer";

describe("PaymentInfoScreen", () => {
  const cardNumber = "1234567890123456";
  const expirationDate = "12/22";
  const cvv = "123";
  const cardholder = "John Doe";

  const cardNumber2 = "aaaa";
  const expirationDate2 = "bbbb";
  const cvv2 = "cccc";
  const cardholder2 = "dddd";

  it("has 1 child", () => {
    const tree = renderer.create(<PaymentInfoScreenTester cardNumber={cardNumber} expirationDate={expirationDate} cvv={cvv} cardHolder={cardholder} />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<PaymentInfoScreenTester cardNumber={cardNumber} expirationDate={expirationDate} cvv={cvv} cardHolder={cardholder} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 1 child case2 ", () => {
    const tree = renderer.create(<PaymentInfoScreenTester cardNumber={cardNumber2} expirationDate={expirationDate2} cvv={cvv2} cardHolder={cardholder2} />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it("renders correctly case 2", () => {
    const tree = renderer.create(<PaymentInfoScreenTester cardNumber={cardNumber2} expirationDate={expirationDate2} cvv={cvv2} cardHolder={cardholder2} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly mixed values", () => {
    const tree = renderer.create(<PaymentInfoScreenTester cardNumber={cardNumber2} expirationDate={expirationDate2} cvv={cvv} cardHolder={cardholder} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// temrporary solution
function PaymentInfoScreenTester(props) {
  const {
    cardNumber, expirationDate, cvv, cardholder,
  } = props;

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Provide payment informations</Text>
        <View style={styles.inputContaier}>
          <TextInput
            placeholder="Cardnumber"
            value={cardNumber}
            autoCompleteType="name"
            onChangeText={(text) => setCardNumber(text)}
            placeholderTextColor="gray"
            style={styles.input}
          />
          <TextInput
            placeholder="Expiration date"
            value={expirationDate}
            autoCompleteType="name"
            onChangeText={(text) => setExpirationDate(text)}
            placeholderTextColor="gray"
            style={styles.input}
          />
          <TextInput
            placeholder="CVV"
            value={cvv}
            autoCompleteType="name"
            onChangeText={(text) => setCvv(text)}
            placeholderTextColor="gray"
            style={styles.input}
          />
          <TextInput
            placeholder="Cardholder"
            value={cardholder}
            autoCompleteType="name"
            onChangeText={(text) => setCardHolder(text)}
            placeholderTextColor="gray"
            style={styles.input}
          />
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
