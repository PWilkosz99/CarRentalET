import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CarDetailsScreen = ({ navigation }) => {

    const handleClick = () => {
        console.log('rent')
        navigation.navigate('UserDataScreen')
        // , { startDate, endDate, car }
    }

    return (
        <View style={styles.container}>
            {/* <Text>A lot of informations about car :)</Text> */}
            <View style={styles.card}>
                <Text style={styles.title}>Mark + Model</Text>
                {/* <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} /> */}
                <Image style={styles.image} source={require('./Eiffel_Tower.jpg')} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Example prop</Text>
                    <Text style={styles.text}>Example prop</Text>
                    <Text style={styles.text}>Example prop</Text>
                    <Text style={styles.text}>Example prop</Text>
                    <Text style={styles.text}>Example prop</Text>
                    <Text style={styles.text}>Example prop</Text>
                    <Text style={styles.text}>Example prop</Text>
                    <Text style={styles.text}>Example prop</Text>
                </View>
                <TouchableOpacity onPress={handleClick} style={styles.button}>
                    <Text>Rent</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CarDetailsScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    card: {
        flex: 1,
        width: '90%',
        backgroundColor: 'white',
        margin: 20,
        borderRadius: 30,
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        padding: 20,
    },
    textContainer: {
        flex: 1,
        flexWrap: 'wrap',
        width: '90%',
        marginTop: 20,
    },
    text: {
        width: '90%',
        padding: 5,
    },
    image: {
        height: 180,
        width: '90%',
        resizeMode: 'contain',
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 15,
    }
})