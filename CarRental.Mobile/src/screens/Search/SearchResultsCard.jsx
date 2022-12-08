import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchResultsCard = ({ navigation, car, startDate, endDate }) => {

    const showDetails = () => {
        navigation.navigate('CarDetailsScreen', { car, startDate, endDate });
    }

    return (
        <View style={styles.card}>
            <Text style={styles.title}>{car.model.manufacturer} {car.model.model}</Text>
            <Image style={styles.image} source={{ uri: `https://objectstorage.eu-frankfurt-1.oraclecloud.com/p/m5ndEg9KfkvjeJs149ntmrL205mZTMOctjPNO2pQqqaVPlz52NRgDNJT6QUDCLpb/n/fre7obdqx6ap/b/car-rental-bucket/o/${car.model.id}.jpg` }} />
            <View style={styles.textContainer}>
                <View style={styles.row}><Ionicons name="cash-outline" style={styles.icon} /><Text style={styles.text}>{car.costPerDay}$/day</Text></View>
                <View style={styles.row}><Ionicons name="snow-outline" style={styles.icon} /><Text style={styles.text}>#TODO</Text></View>
                <View style={styles.row}><FontAwesome name="gear" style={styles.icon} /><Text style={styles.text}>#TODO</Text></View>
                <View style={styles.row}><MaterialCommunityIcons name="fuel" style={styles.icon} /><Text style={styles.text}>{car.model.fuel}</Text></View>
                <View style={styles.row}><MaterialCommunityIcons name="car-door" style={styles.icon} /><Text style={styles.text}>delete?</Text></View>
                {/* ?//AXES//PROD */}
                <View style={styles.row}><MaterialCommunityIcons name="car-turbocharger" style={styles.icon} /><Text style={styles.text}>{car.model.hPs}HPs</Text></View>
                <View style={styles.row}><MaterialCommunityIcons name="car-hatchback" style={styles.icon} /><Text style={styles.text}>{car.model.type}</Text></View>
                <View style={styles.row}><MaterialCommunityIcons name="car-seat" style={styles.icon} /><Text style={styles.text}>{car.model.seats}</Text></View>
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 10,
        marginBottom: 10,
    },
    row: {
        width: '45%',
        padding: 1,
        color: 'black',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    text: {
        color: 'black',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        fontWeight: "700"
    },
    icon: {
        fontSize: 30,
        color: 'black',
    },
    image: {
        height: 180,
        width: '90%',
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