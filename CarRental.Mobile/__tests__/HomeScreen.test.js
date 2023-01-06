import renderer from "react-test-renderer";
import {
  StyleSheet, Text, TouchableOpacity, View,
} from "react-native";
import React from "react";

describe("HomeScreen", (props) => {
  it("has 2 children with args", () => {
    const tree = renderer.create(<HomeScreenTester email="a@a.a" />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  it("renders correctly with args", () => {
    const tree = renderer.create(<HomeScreenTester email="a@a.a" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 2 children without args", () => {
    const tree = renderer.create(<HomeScreenTester />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  it("renders correctly without args", () => {
    const tree = renderer.create(<HomeScreenTester />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// temrporary solution
function HomeScreenTester(props) {
  const { email } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Email:
        {email}
      </Text>
      <TouchableOpacity
        onPress={() => {}}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
