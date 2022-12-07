import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StartDateScreen from './StartDateScreen';
import EndDateScreen from './EndDateScreen';
import SearchResultsScreen from './SearchResultsScreen';
import UserDataScreen from './UserDataScreen';
import PaymentInfoScreen from './PaymentInfoScreen';
import CarDetailsScreen from './CarDetailsScreen';
import HomeScreen from '../HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const SearchScreen = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="StartDateScreen" component={StartDateScreen} />
      <Stack.Screen options={{ headerShown: false }} name="EndDateScreen" component={EndDateScreen} />
      <Stack.Screen options={{ headerShown: true }} name="SearchResultsScreen" component={SearchResultsScreen} />
      <Stack.Screen options={{ headerShown: false }} name="CarDetailsScreen" component={CarDetailsScreen} />
      <Stack.Screen options={{ headerShown: false }} name="UserDataScreen" component={UserDataScreen} />
      <Stack.Screen options={{ headerShown: false }} name="PaymentInfoScreen" component={PaymentInfoScreen} />
      <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default SearchScreen

const styles = StyleSheet.create({

})