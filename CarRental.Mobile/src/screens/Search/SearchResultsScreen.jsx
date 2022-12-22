import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import SearchResultsCard from './SearchResultsCard';

function SearchResultsScreen({ route, navigation }) {
  const [cars, setCars] = useState();
  const { startDate, endDate } = route.params;

  useEffect(() => {
    (
      async () => {
        try {
          const fd = new Date();
          fd.setFullYear(startDate.substring(0, 4));
          fd.setMonth(startDate.substring(5, 7) - 1);
          fd.setDate(startDate.substring(8, 10));

          const ud = new Date();
          ud.setFullYear(endDate.substring(0, 4));
          ud.setMonth(endDate.substring(5, 7) - 1);
          ud.setDate(endDate.substring(8, 10));

          const responde = await fetch('http://localhost:5000/api/GetAvaliableCars', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              startDate: fd,
              endDate: ud,
            }),
          });
          console.log(responde);
          const content = await responde.json();
          setCars(content);
          console.log(content);
        } catch (error) {
          console.log(error);
        }
      }
    )();
  }, []);

  const results = cars?.map((car) => <SearchResultsCard navigation={navigation} key={car.id} car={car} startDate={startDate} endDate={endDate} />);

  return (
    <ScrollView>
      {results}
    </ScrollView>
  );
}

export default SearchResultsScreen;

const styles = StyleSheet.create({

});
