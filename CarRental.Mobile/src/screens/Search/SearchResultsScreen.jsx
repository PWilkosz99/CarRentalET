import { StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import SearchResultsCard from './SearchResultsCard'

const SearchResultsScreen = ({ route, navigation }) => {

    [startDate, endDate] = [route.params]
    console.log(startDate, endDate)


    var cars = [1, 2, 3, 4]

    var results = cars.map((car) => <SearchResultsCard navigation={navigation}/>)

    return (
        <ScrollView>
            {results}
        </ScrollView>
    )
}

export default SearchResultsScreen

const styles = StyleSheet.create({

})