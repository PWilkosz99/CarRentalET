import React from "react";
import {
  StyleSheet, Text, View, Image, TouchableOpacity, Alert,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import renderer from "react-test-renderer";

describe("Reservations", () => {
  it("has 1 child with args", () => {
    const tree = renderer.create(<ReservationsTester />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it("has 1 child without args", () => {
    const tree = renderer.create(<ReservationsTester reservations="aaaa" />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it("renders correctly with no reservations", () => {
    const tree = renderer
      .create(<ReservationsTester />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with reservations", () => {
    const tree = renderer
      .create(<ReservationsTester reservations="aaaa" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Reservations Card", () => {
  const res = {
    vehicle: {
      model: {
        manufacturer: "Test1",
      },
    },
  };

  it("has 4 child with args", () => {
    const tree = renderer.create(<ReservationsTesterCard reservation={res} />).toJSON();
    expect(tree.children.length).toBe(4);
  });

  it("renders correctly with reservations", () => {
    const tree = renderer.create(<ReservationsTesterCard reservation={res} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// temrporary solution
function ReservationsTester(props) {
  const { reservations } = props;
  if (!reservations) {
    return (
      <View>
        <Text>No reservations</Text>
      </View>
    );
  }
  return (
    <View>
      {reservations}
    </View>
  );
}

function ReservationsTesterCard(props) {
  const { reservation } = props;
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {reservation.vehicle.model.manufacturer}
        {" "}
        {reservation.vehicle.model.model}
      </Text>
      <Image style={styles.image} source={{ uri: `https://objectstorage.eu-frankfurt-1.oraclecloud.com/p/m5ndEg9KfkvjeJs149ntmrL205mZTMOctjPNO2pQqqaVPlz52NRgDNJT6QUDCLpb/n/fre7obdqx6ap/b/car-rental-bucket/o/${reservation.vehicle.model.id}.jpg` }} />
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <MaterialCommunityIcons name="calendar-start" style={styles.icon} />
          <Text style={styles.text}>
            Start date:
            <Text style={styles.value}>{(new Date(reservation.startDate)).toLocaleDateString()}</Text>
          </Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="calendar-end" style={styles.icon} />
          <Text style={styles.text}>
            End date:
            <Text style={styles.value}>{(new Date(reservation.endDate)).toLocaleDateString()}</Text>
          </Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="cash" style={styles.icon} />
          <Text style={styles.text}>
            Cost:
            <Text style={styles.value}>
              {reservation.cost}
              {" "}
              $
            </Text>
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.button}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
