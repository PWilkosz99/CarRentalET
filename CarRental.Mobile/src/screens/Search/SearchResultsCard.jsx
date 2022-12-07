import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const SearchResultsCard = ({navigation}) => {

    const showDetails = () => {
        navigation.navigate('CarDetailsScreen')
    }

    return (
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
            <TouchableOpacity onPress={showDetails} style={styles.button}>
                <Text style={styles.buttonText}>Details</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SearchResultsCard

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 400,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        color: 'black'
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 10,
    },
    text: {
        width: '45%',
        padding: 1,
        color: 'black'
    },
    image: {
        height: 180,
        width: '100%',
        resizeMode: 'contain',
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 5,
    }
})