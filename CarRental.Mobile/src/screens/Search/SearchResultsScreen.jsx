import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import SearchResultsCard from './SearchResultsCard'
import { auth } from '../../../firebase'

const SearchResultsScreen = ({ route, navigation }) => {

    [startDate, endDate] = [route.params]

    // console.log(`Bearer ${auth.currentUser.stsTokenManager.accessToken}`)

    useEffect(() => {
        (
            async () => {
                try {
                    console.log(new Date())
                    const responde = await fetch('http://localhost:5000/api/GetCars')
                    // , {
                    // headers: new Headers({
                    //     'Authorization': `Bearer ${auth.currentUser.stsTokenManager.accessToken}`,
                    //     'Content-Type': 'application/json'
                    // }),
                    // });
                    const content = await responde.json();
                    console.log(content)
                } catch (error) {
                    console.log(error)
                }


            }
        )();
    }, []);

    // var cars = [1, 2, 3, 4]

    // var results = cars.map((car) => <SearchResultsCard navigation={navigation} />)

    return (
        <ScrollView>
            {/* {results} */}
        </ScrollView>
    )
}

export default SearchResultsScreen

const styles = StyleSheet.create({

})