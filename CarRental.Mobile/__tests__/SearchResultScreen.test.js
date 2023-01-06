import {
  StyleSheet, Text, View, Image, TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import renderer from "react-test-renderer";

describe("SearchResultCard", () => {
  const car = {
    model: {
      manufacturer: "test",
    },
  };
  it("has 3 children with args", () => {
    const tree = renderer.create(<SearchResultCardTester car={car} />).toJSON();
    expect(tree.children.length).toBe(4);
  });

  it("renders correctly wikth args", () => {
    const tree = renderer.create(<SearchResultCardTester car={car} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("SearchResult", () => {
  const cars10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const cars4 = [1, 2, 3, 4];
  const cars0 = [];
  const car1 = [1];

  it("has 10 children with 10 args", () => {
    const tree = renderer.create(<SearchResultTester cars={cars10} />).toJSON();
    expect(tree.children.length).toBe(10);
  });

  it("renders correctly with 10 args", () => {
    const tree = renderer.create(<SearchResultTester cars={cars10} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 4 children with 4 args", () => {
    const tree = renderer.create(<SearchResultTester cars={cars4} />).toJSON();
    expect(tree.children.length).toBe(4);
  });

  it("renders correctly with 4 args", () => {
    const tree = renderer.create(<SearchResultTester cars={cars4} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 1 children with 1 arg", () => {
    const tree = renderer.create(<SearchResultTester cars={car1} />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it("renders correctly with 1 arg", () => {
    const tree = renderer.create(<SearchResultTester cars={car1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('has 3 children with 0 args', () => {
  //     const tree = renderer.create(<SearchResultTester cars={cars0} />).toJSON();
  //     expect(tree.children.length).toBe(null);
  // });

  it("renders correctly withh 0 args", () => {
    const tree = renderer.create(<SearchResultTester cars={cars0} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// temrporary solution
function SearchResultTester(props) {
  const cardef = {
    model: {
      manufacturer: "test",
    },
  };
  const { cars } = props;
  const compnts = cars?.map((car) => <SearchResultCardTester car={cardef} key={car} />);
  return (
    <View>
      {compnts}
    </View>
  );
}

function SearchResultCardTester(props) {
  const { car } = props;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {car.model.manufacturer}
        {" "}
        {car.model.model}
      </Text>
      <Image style={styles.image} source={{ uri: `https://objectstorage.eu-frankfurt-1.oraclecloud.com/p/m5ndEg9KfkvjeJs149ntmrL205mZTMOctjPNO2pQqqaVPlz52NRgDNJT6QUDCLpb/n/fre7obdqx6ap/b/car-rental-bucket/o/${car.model.id}.jpg` }} />
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <Ionicons name="cash-outline" style={styles.icon} />
          <Text style={styles.text}>
            {car.costPerDay}
            $/day
          </Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="snow-outline" style={styles.icon} />
          <Text style={styles.text}>{car.model.airConditioning}</Text>
        </View>
        <View style={styles.row}>
          <FontAwesome name="gear" style={styles.icon} />
          <Text style={styles.text}>{car.model.gearbox}</Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="fuel" style={styles.icon} />
          <Text style={styles.text}>{car.model.fuel}</Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="car-door" style={styles.icon} />
          <Text style={styles.text}>delete?</Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="car-turbocharger" style={styles.icon} />
          <Text style={styles.text}>
            {car.model.hPs}
            HPs
          </Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="car-hatchback" style={styles.icon} />
          <Text style={styles.text}>{car.model.type}</Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="car-seat" style={styles.icon} />
          <Text style={styles.text}>{car.model.seats}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => { }} style={styles.button}>
        <Text style={styles.buttonText}>Details</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
