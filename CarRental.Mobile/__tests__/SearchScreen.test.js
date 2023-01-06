import {
  StyleSheet, Text, View, Image, TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import renderer from "react-test-renderer";

describe("SearchScreen", () => {
  const car = {
    model: {
      airConditioning: "test",
    },
  };

  it("has 2 children", () => {
    const tree = renderer.create(<SearchScreenTester car={car} />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<SearchScreenTester car={car} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// temrporary solution
function SearchScreenTester(props) {
  const { car } = props;

  return (
    <View style={styles.row}>
      <Ionicons name="snow-outline" style={styles.icon} />
      <Text style={styles.text}>{car.model.airConditioning}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
