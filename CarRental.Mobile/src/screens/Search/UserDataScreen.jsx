import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import React from 'react'

const UserDataScreen = ({ route, navigation }) => {

    const { car, startDate, endDate, cost } = route.params;

    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [city, setCity] = React.useState('');
    const [country, setCountry] = React.useState('');
    const [postalCode, setPostalCode] = React.useState('');
    const [drivingLicense, setDrivingLicense] = React.useState('');

    const handleClick = () => {
        if(!firstname) return alert('Please provide your firstname');
        if(!lastname) return alert('Please provide your lastname');
        if(!phone) return alert('Please provide your phone number');
        if(!address) return alert('Please provide your address');
        if(!city) return alert('Please provide your city');
        if(!country) return alert('Please provide your country');
        if(!postalCode) return alert('Please provide your postal code');
        if(!drivingLicense) return alert('Please provide your driving license');

        const user = {
            firstname,
            lastname,
            phone,
            address,
            city,
            country,
            postalCode,
            drivingLicense
        }

        navigation.navigate('PaymentInfoScreen', {user, car, startDate, endDate, cost})
    }


    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Provide informations about you</Text>
                <View style={styles.inputContaier}>
                    <TextInput
                        placeholder="Firstname"
                        value={firstname}
                        autoCompleteType="name"
                        onChangeText={text => setFirstname(text)}
                        placeholderTextColor='gray'
                        style={styles.inputSmall} />
                    <TextInput
                        placeholder="Lastname"
                        value={lastname}
                        autocompleteType="name"
                        onChangeText={text => setLastname(text)}
                        placeholderTextColor='gray'
                        style={styles.inputSmall} />
                    <TextInput
                        placeholder="Phone"
                        value={phone}
                        autoCompleteType="tel"
                        onChangeText={text => setPhone(text)}
                        placeholderTextColor='gray'
                        style={styles.input} />
                    <TextInput
                        placeholder="City"
                        value={city}
                        autoCompleteType="address-level2"
                        onChangeText={text => setCity(text)}
                        placeholderTextColor='gray'
                        style={styles.inputSmall} />
                    <TextInput
                        placeholder="Postal code"
                        value={postalCode}
                        autoCompleteType="postal-code"
                        onChangeText={text => setPostalCode(text)}
                        placeholderTextColor='gray'
                        style={styles.inputSmall} />
                    <TextInput
                        placeholder="Address"
                        value={address}
                        autoCompleteType="street-address"
                        onChangeText={text => setAddress(text)}
                        placeholderTextColor='gray'
                        style={styles.input} />
                    <TextInput
                        placeholder="Country"
                        value={country}
                        autoCompleteType="country-name"
                        onChangeText={text => setCountry(text)}
                        placeholderTextColor='gray'
                        style={styles.input} />
                    <TextInput
                        placeholder="Driving license number"
                        value={drivingLicense}
                        autoCompleteType="cc-number"
                        onChangeText={text => setDrivingLicense(text)}
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

export default UserDataScreen

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
        height: 50,
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