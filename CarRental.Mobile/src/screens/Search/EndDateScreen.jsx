import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import DatePicker, { getToday } from 'react-native-modern-datepicker';

const EndDateScreen = ({ route, navigation }) => {

  const { startDate } = route.params;

  const [endDate, setEndDate] = useState('');

  const handleClick = () => {
    if (!endDate) return alert('Please select end date');
    if (startDate >= endDate) return alert('End date must be after start date');
    if (endDate < getToday()) return alert('End date must be after today')

    navigation.navigate('SearchResultsScreen', { startDate, endDate })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select end date</Text>
      <Text style={styles.subtitle}>Date you want to end rent your car</Text>
      <DatePicker
        style={styles.picker}
        onSelectedChange={date => setEndDate(date)}
        mode="calendar"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
        <Text style={styles.buttonText}>Go back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClick} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EndDateScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 30,
    color: 'black'
  },
  picker: {
    height: '50%',
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '45%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 3,
}
})