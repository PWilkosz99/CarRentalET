import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import HomeScreen from './HomeScreen';
import TestScreen from './TestScreen';
import CustomDrawer from './CustomDrawer';

const DrawerContent = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Reservations" component={HomeScreen} />
            <Drawer.Screen name="Rent" component={HomeScreen} />
            <Drawer.Screen name="Test" component={TestScreen} />
            <Drawer.Screen name="Logout" component={TestScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerContent

const styles = StyleSheet.create({})