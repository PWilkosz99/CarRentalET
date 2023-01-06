import { useNavigation } from "@react-navigation/native";
import {
    StyleSheet, Text, TouchableOpacity, View,
} from "react-native";
import React from "react";

function ContactUsScreen() {
    const navigation = useNavigation();

    const handleRedirect = () => {
        navigation.navigate('Search');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle}>
                You can contact us on this email:
            </Text>
            <Text style={styles.title}>
                email@carrental.com
            </Text>
        </View>
    );
}

export default ContactUsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#0782F9",
        width: "60%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
    },
    text: {
        color: "black",
    },
    title: {
        color: "black",
        fontSize: 40,
        paddingBottom: 80,
        fontWeight: "bold"
    },
    subtitle: {
        color: "black",
        fontSize: 20,
        paddingBottom: 40,
    }
});
