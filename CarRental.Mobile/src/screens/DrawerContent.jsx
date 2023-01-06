import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "./HomeScreen";
import ReseravationsScreen from "./Reservations/ReseravationsScreen";
import CustomDrawer from "./CustomDrawer";
import SearchScreen from "./Search/SearchScreen";
import ContactUsScreen from "./ContactUsScreen";

function DrawerContent() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{ headerShown: true, drawerLabelStyle: styles.drawerLabel, drawerActiveTintColor: "blue" }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="home-outline" style={styles.icon} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Search"
        component={SearchScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="car-outline" style={styles.icon} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Reservations"
        component={ReseravationsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="calendar-outline" style={styles.icon} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="people-outline" style={styles.icon} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact us"
        component={ContactUsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="help" style={styles.icon} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerContent;

const styles = StyleSheet.create({
  icon: {
    fontSize: 22,
  },
  drawerLabel: {
    marginLeft: 5,
    fontSize: 18,
    fontFamily: "Roboto-Medium",
  },
});
