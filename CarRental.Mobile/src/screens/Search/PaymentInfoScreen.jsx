import {
  StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity,
} from 'react-native';
import React from 'react';
import { auth } from '../../../firebase';

function PaymentInfoScreen({ route, navigation }) {
  const {
    user, car, startDate, endDate, cost,
  } = route.params;

  const [cardNumber, setCardNumber] = React.useState('');
  const [expirationDate, setExpirationDate] = React.useState('');
  const [cvv, setCvv] = React.useState('');
  const [cardholder, setCardHolder] = React.useState('');

  const handleClick = async () => {
    const fd = new Date();
    fd.setFullYear(startDate.substring(0, 4));
    fd.setMonth(startDate.substring(5, 7) - 1);
    fd.setDate(startDate.substring(8, 10));

    const ud = new Date();
    ud.setFullYear(endDate.substring(0, 4));
    ud.setMonth(endDate.substring(5, 7) - 1);
    ud.setDate(endDate.substring(8, 10));

    const exp = (`${20 + expirationDate.substring(3, 7)}-${expirationDate.substring(0, 2)}`);

    if (!cardNumber) return alert('Please provide your card number');
    if (cardNumber.length < 16) return alert('Please provide a valid card number');

    if (!expirationDate) return alert('Please provide your expiration date');
    if (expirationDate.length < 5) return alert('Please provide a valid expiration date');
    if (expirationDate[2] !== '/') return alert('Please provide a valid expiration date');
    if (expirationDate[0] > 1) return alert('Please provide a valid expiration date');
    if (expirationDate[0] === 1 && expirationDate[1] > 2) return alert('Please provide a valid expiration date');
    if (expirationDate[3] > 2) return alert('Please provide a valid expiration date');
    if (expirationDate[3] === 2 && expirationDate[4] > 3) return alert('Please provide a valid expiration date');

    if (!cvv) return alert('Please provide your cvv');
    if (cvv.length < 3) return alert('Please provide a valid cvv');

    if (!cardholder) return alert('Please provide your cardholder');
    const response = await fetch('http://localhost:5000/api/ReserveCar', {
      method: 'POST',
      headers: new Headers({
        Authorization: `Bearer ${auth.currentUser.stsTokenManager.accessToken}`,
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({

        StartDate: fd,
        EndDate: ud,

        VehicleId: car.id,

        Firstname: user.firstname,
        Lastname: user.lastname,
        Phone: user.phone,
        Address: user.address,
        City: user.city,
        Country: user.country,
        PostalCode: user.postalCode,
        DrivingLicense: user.drivingLicense,

        CardNumber: cardNumber,
        CardDate: exp,
        CVV: cvv,
        CardOwnerName: cardholder,

        Cost: cost,
      }),
    });

    console.log(response.status);
    console.log(response.statusText);
    console.log(response.json());

    if (response.status === 201) {
      alert('Car reserved successfully');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Drawer' }],
      });
    } else {
      alert('Something went wrong');
    }
  };

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
        <TouchableOpacity onPress={handleClick} style={styles.button}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default PaymentInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  card: {
    width: '90%',
    backgroundColor: 'white',
    margin: 40,
    borderRadius: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 30,
    color: 'black',
  },
  inputContaier: {
    width: '80%',
    marginBottom: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#f0f6f6',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 10,
    color: 'black',
    borderWidth: 1,
    borderColor: '#000000',
    width: '100%',
    height: 50,
  },
  inputSmall: {
    backgroundColor: '#f0f6f6',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 10,
    color: 'black',
    borderWidth: 1,
    borderColor: '#000000',
    width: '45%',
    height: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 3,
  },
});
