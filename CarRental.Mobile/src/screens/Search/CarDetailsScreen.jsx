import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'

const CarDetailsScreen = ({ route, navigation }) => {

    const { car, startDate, endDate } = route.params;

    console.log(car)

    const handleClick = () => {
        console.log('rent')
        navigation.navigate('UserDataScreen')
    }

    let fd = new Date()
    fd.setFullYear(startDate.substring(0, 4));
    fd.setMonth(startDate.substring(5, 7) - 1);
    fd.setDate(startDate.substring(8, 10));

    let ud = new Date()
    ud.setFullYear(endDate.substring(0, 4));
    ud.setMonth(endDate.substring(5, 7) - 1);
    ud.setDate(endDate.substring(8, 10));

    var duration = (ud.getDate() - fd.getDate());

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{car.model.manufacturer} {car.model.model}</Text>
                <Image style={styles.image} source={{ uri: `https://objectstorage.eu-frankfurt-1.oraclecloud.com/p/m5ndEg9KfkvjeJs149ntmrL205mZTMOctjPNO2pQqqaVPlz52NRgDNJT6QUDCLpb/n/fre7obdqx6ap/b/car-rental-bucket/o/${car.model.id}.jpg` }} />
                <View style={styles.textContainer}>
                    <View style={styles.row}><MaterialCommunityIcons name="calendar-start" style={styles.icon} /><Text style={styles.text}>Start date: <Text style={styles.value}>{fd.toLocaleDateString()}</Text></Text></View>
                    <View style={styles.row}><MaterialCommunityIcons name="calendar-end" style={styles.icon} /><Text style={styles.text}>End date: <Text style={styles.value}>{ud.toLocaleDateString()}</Text></Text></View>
                    <View style={styles.row}><MaterialCommunityIcons name="calendar-arrow-right" style={styles.icon} /><Text style={styles.text}>Duration: <Text style={styles.value}>{duration}</Text> days</Text></View>
                    <View style={styles.row}><MaterialCommunityIcons name="cash" style={styles.icon} /><Text style={styles.text}>Cost per day: <Text style={styles.value}>{car.costPerDay}$</Text>/day</Text></View>
                    <View style={styles.row}><MaterialCommunityIcons name="cash-multiple" style={styles.icon} /><Text style={styles.text}>Summary cost: <Text style={styles.value}>{car.costPerDay * duration}$</Text></Text></View>
                </View>
                <TouchableOpacity onPress={handleClick} style={styles.button}>
                    <Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CarDetailsScreen

const styles = StyleSheet.create({
    container: {
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
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        padding: 20,
        color: 'black'
    },
    textContainer: {
        flex: 1,
        flexWrap: 'wrap',
        width: '90%',
        marginTop: 20,
    },
    text: {
        paddingVertical: 7,
        fontSize: 20,
        color: 'black',
        fontWeight: "400",
    },
    icon: {
        color: 'black',
        fontSize: 30,
        marginRight: 10,
        paddingTop: 5,
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
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        letterSpacing: 5,
    },
    row: {
        width: '90%',
        padding: 1,
        color: 'black',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    value: {
        fontWeight: "900",
    }
})