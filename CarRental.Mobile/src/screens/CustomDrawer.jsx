import { StyleSheet, Text, View } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';

export default function CustomDrawer(props) {
    return (
        <View style={styles.mainView}>
            <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
                {/* <ImageBackground source={require('../assets/images/DrawerBackground.jpg')} style={styles.image}>
                    <Image /> */}
                <Text style={styles.text}>test@testa.aaa</Text>
                {/* </ImageBackground> */}
                <View style={styles.drawerItem}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => { }} style={styles.button}>
                    <View style={styles.btnContent}>
                    <Icon name="exit-outline" size={22} color="black"/>
                    <Text style={styles.logout}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
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
    },
    footer:
    {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: 'lightgray',
        color: 'black',
    },
    button:
    {
        paddingVertical: 15,
        // backgroundColor: 'red'
    },
    logout:
    {
        fontSize: 22,
        fontFamily: 'Roboto-Medium',
        marginLeft: 15,
        color: 'black'
    },
    btnContent:
    {
        flexDirection: 'row',
        alignItems: 'center',
    }
})