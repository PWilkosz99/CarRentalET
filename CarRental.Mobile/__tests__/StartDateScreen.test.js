import React, { useState } from "react";
import renderer from "react-test-renderer";
import {
  StyleSheet, TouchableOpacity, Text, View,
} from "react-native";

describe("StartDateScreen", () => {
  it("has 3 children", () => {
    const tree = renderer.create(<StartDateScreenTester />).toJSON();
    expect(tree.children.length).toBe(3);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<StartDateScreenTester />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// temrporary solution
function StartDateScreenTester() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select start date</Text>
      <Text style={styles.subtitle}>Date you want to rent your car</Text>
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
