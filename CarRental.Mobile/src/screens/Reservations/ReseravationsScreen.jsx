import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import ReservationsCard from './ReservationsCard'
import { auth } from '../../../firebase'


const ReseravationsScreen = () => {

    [res, setRes] = useState();

    useEffect(() => {
        (
            async () => {
                try {
                    const responde = await fetch('http://localhost:5000/api/GetReservedCars', {
                        headers: new Headers({
                            'Authorization': `Bearer ${auth.currentUser.stsTokenManager.accessToken}`,
                            'Content-Type': 'application/json'
                        }),
                    });

                    if (responde.ok) {
                        const content = await responde.json();
                        setRes(content);
                        console.log(content)
                    }

                } catch (error) {
                    console.log(error)
                }

            }
        )();

    }, [])


    const reservations = res?.map((r) => <ReservationsCard reservation={r} key={r.id} />)

    console.log(reservations)

    if (!reservations) {
        return (
            <View>
                <Text style={styles.text}>No reservations</Text>
            </View>
        )
    } else {
        return (
            <ScrollView>
                {reservations}
            </ScrollView>
        )
    }
}

export default ReseravationsScreen

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 200,
    }
})