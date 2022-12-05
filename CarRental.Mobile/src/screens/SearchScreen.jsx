import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';

const SearchScreen = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <>
      <DatePicker
        onSelectedChange={date => setSelectedDate(date)}
        mode="calendar"
      />
      <TouchableOpacity>
        <Text>Register</Text>
      </TouchableOpacity>
    </>
    // start date(next) -> end date(search) -> car tiles -> car details -> reservation
  );
};

export default SearchScreen