import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

function HomeScreen() {
  const navigation = useNavigation();

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigation.replace('Login');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Email:
        {auth.currentUser?.email}
      </Text>
      <TouchableOpacity
        onPress={handleLogOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  text: {
    color: 'black',
  },
});
