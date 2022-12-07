import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StartDateScreen from './StartDateScreen';
import EndDateScreen from './EndDateScreen';
import SearchResults from './SearchResults';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SearchScreen = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="StartDateScreen" component={StartDateScreen} />
      <Stack.Screen options={{ headerShown: false }} name="EndDateScreen" component={EndDateScreen} />
      <Stack.Screen options={{ headerShown: true }} name="SearchResults" component={SearchResults} />
    </Stack.Navigator>
  );
};

export default SearchScreen

const styles = StyleSheet.create({

})