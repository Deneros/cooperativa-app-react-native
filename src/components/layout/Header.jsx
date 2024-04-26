import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import theme from "../../theme";
import img from "../../../assets/logo.png";
import { FontAwesome6 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Header = ({ user }) => {
    useEffect(() => {
        console.log(user)
    }, [])

    return (
        <View style={styles.body}>
            {user ? (
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <View style={styles.containerImage}>
                            <Image source={img} style={styles.image} />
                        </View>
                        <View style={styles.iconsContainer}>
                            <FontAwesome6 style={styles.icon} name="message" size={23} color="white" />
                            <Feather style={styles.icon} name="help-circle" size={24} color="white" />
                            <Entypo style={styles.icon} name="paypal" size={24} color="white" />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.greetingText}>Buen día,</Text>
                        <Text style={styles.usernameText}>Asesor Nicolas</Text>
                    </View>
                </View>
            ) : (
                <View style={{ marginVertical: 20 }}>
                    <View style={styles.containerImage}>
                        <Image source={img} style={styles.imageLogout} />
                    </View>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: theme.colors.primary,
        borderBottomStartRadius: 7,
        borderBottomEndRadius: 7
    },
    container: {
        padding: 10,
        paddingBottom: 20,
        gap: 10
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerImage: {
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 100,
    },
    image: {
        width: 50,
        height: 50,
        objectFit: 'contain',
        borderRadius: 100,
        margin: 10,
    },
    imageLogout: {
        width: 200,
        height: 65,
        borderRadius: 100,
        objectFit: 'contain'
    },
    iconsContainer: {
        flexDirection: 'row',
    },
    icon: {
        marginRight: 7,
    },
    greetingText: {
        color: 'white',
        fontSize: theme.fontSizes.subHeading,
    },
    usernameText: {
        color: 'white',
        fontSize: theme.fontSizes.title,
    },
});

export default Header;