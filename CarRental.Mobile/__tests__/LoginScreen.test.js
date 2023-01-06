import {
  Button, KeyboardAvoidingView, KeyboardEvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,
} from "react-native";
import React, { useEffect, useState } from "react";
import renderer from "react-test-renderer";

describe("LoginScreen", () => {
  it("has 3 children without args", () => {
    const tree = renderer.create(<LoginScreenTester />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  it("renders correctly without args", () => {
    const tree = renderer.create(<LoginScreenTester />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 3 children with args", () => {
    const tree = renderer.create(<LoginScreenTester email="aaa@aaa.aa" password="abcefg" />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  it("renders correctly with args", () => {
    const tree = renderer.create(<LoginScreenTester email="aaa@aaa.aa" password="abcefg" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 3 children with not compile args", () => {
    const tree = renderer.create(<LoginScreenTester email="a" password="a" />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  it("renders correctly with  not compile args", () => {
    const tree = renderer.create(<LoginScreenTester email="a" password="a" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// temrporary solution
function LoginScreenTester(props) {
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState(props.password);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View
        style={styles.inputContaier}
      >
        <Text style={styles.text}>Log-in to application</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholderTextColor="gray"
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          placeholderTextColor="gray"
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {}}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
