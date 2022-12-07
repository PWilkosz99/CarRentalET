import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const PaymentInfoScreen = ({ navigation }) => {

  const [cardNumber, setCardNumber] = React.useState('');
  const [expirationDate, setExpirationDate] = React.useState('');
  const [cvv, setCvv] = React.useState('');
  const [cardholder, setCardHolder] = React.useState('');

  const handleClick = () => {
    //validation
    navigation.reset({
      index: 0,
      routes: [{ name: 'Drawer' }],
    });
  }


  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Provide payment informations</Text>
        <View style={styles.inputContaier}>
          <TextInput
            placeholder="Cardnumber"
            value={cardNumber}
            autoCompleteType="name"
            onChangeText={text => setCardNumber(text)}
            placeholderTextColor='gray'
            style={styles.input} />
          <TextInput
            placeholder="Expiration date"
            value={expirationDate}
            autoCompleteType="name"
            onChangeText={text => setExpirationDate(text)}
            placeholderTextColor='gray'
            style={styles.input} />
          <TextInput
            placeholder="CVV"
            value={cvv}
            autoCompleteType="name"
            onChangeText={text => setCvv(text)}
            placeholderTextColor='gray'
            style={styles.input} />
          <TextInput
            placeholder="Cardholder"
            value={cardholder}
            autoCompleteType="name"
            onChangeText={text => setCardHolder(text)}
            placeholderTextColor='gray'
            style={styles.input} />
        </View>
        <TouchableOpacity onPress={handleClick} style={styles.button}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default PaymentInfoScreen

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
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 30,
    color: 'black'
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
    height: 50
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
    height: 50
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 3,
  }
})