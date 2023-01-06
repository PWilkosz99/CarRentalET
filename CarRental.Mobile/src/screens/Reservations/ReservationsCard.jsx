import {
  StyleSheet, Text, View, Image, TouchableOpacity, Alert,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { auth } from '../../../firebase';

function ReservationsCard({ reservation }) {
  const makeAlert = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure?',
      [
        {
          text: 'Yes',
          onPress: handleCancel,
          style: 'cancel',
        },
        { text: 'No' },
      ],
    );
  };

  const handleCancel = async () => {
    const res = await fetch(`http://localhost:5000/api/DeleteReservation/${reservation.id}`, {
      headers: new Headers({
        Authorization: `Bearer ${auth.currentUser.stsTokenManager.accessToken}`,
        'Content-Type': 'application/json',
      }),
      method: 'DELETE',
    });
    if (res.ok) {
      Alert.alert(
        'Success',
        'Reservation cancelled',
        [
          {
            text: 'OK',
            style: 'default',
          },
        ],
      );
    } else {
      Alert.alert(
        'Error',
        'Something went wrong',
        [
          {
            text: 'OK',
            style: 'default',
          },
        ],
      );
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {reservation.vehicle.model.manufacturer}
        {' '}
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
              {' '}
              $
            </Text>
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={makeAlert} style={styles.button}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ReservationsCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    color: 'black',
  },
  text: {
    color: 'black',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: '700',
  },
  image: {
    height: 180,
    width: '90%',
    resizeMode: 'contain',
  },
  textContainer: {
    width: '90%',
    marginTop: 10,
    marginBottom: 10,
  },
  icon: {
    fontSize: 35,
    color: 'black',
  },
  row: {
    width: '90%',
    padding: 1,
    color: 'black',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  value: {
    fontWeight: '900',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 5,
  },
});
