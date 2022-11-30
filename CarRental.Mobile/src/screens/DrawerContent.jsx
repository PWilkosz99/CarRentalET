import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import HomeScreen from './HomeScreen';
import TestScreen from './TestScreen';

const DrawerContent = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Test" component={TestScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerContent

const styles = StyleSheet.create({})