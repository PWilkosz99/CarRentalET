import { StyleSheet, Text, View } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'

export default function CustomDrawer(props) {
    return (
        <View style={styles.view}>
            <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
                {/* <ImageBackground source={require('../assets/images/DrawerBackground.jpg')} style={styles.image}>
                    <Image /> */}
                <Text style={styles.text}>test@testa.aaa</Text>
                {/* </ImageBackground> */}
                <View style={styles.drawerItem}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    container: {
        backgroundColor: 'lightblue'
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    drawerItem: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20,
    }
})