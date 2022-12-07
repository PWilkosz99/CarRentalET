import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const SearchResults = () => {
    return (
        <ScrollView>
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
                <TouchableOpacity onPress={() => { }} style={styles.button}>
                    <Text>Details</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default SearchResults

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 400,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 30,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
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
    },
    image: {
        height: 180,
        width: '100%',
        resizeMode: 'contain',
    },
    button: {
        backgroundColor: '#0782F9',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
    }
})