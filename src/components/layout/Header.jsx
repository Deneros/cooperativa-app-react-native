import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import theme from "../../theme";
import img from "../../../assets/logo.png";
import Constants from 'expo-constants';
import { FontAwesome6 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Header = ({ user }) => {

    useEffect(() => {
        console.log(user)
    }, [])



    return (
        <View style={[styles.body, { height: user ? '25%' : '20%', borderBottomStartRadius: 7, borderBottomEndRadius: 7 }]}>

            {user ? (
                <View>
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
                    <View style={styles.textContainer}>
                        <Text style={styles.greetingText}>Buen dia,</Text>
                        <Text style={styles.usernameText}>Asesor Nicolas</Text>
                    </View>
                </View>
            ) : (
                <View>
                    <View style={[styles.containerImage, { marginTop: '15%', marginLeft: 0 }]}>
                        <Image source={img} style={[styles.imageLogout, { resizeMode: 'contain', }]} />
                    </View>

                </View>
            )}


        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: theme.colors.primary
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Constants.statusBarHeight,
    },
    containerImage: {
        // padding: 10,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 100,
        marginLeft: 10
    },
    image: {
        width: 65,
        height: 50,
        borderRadius: 100,
        // resizeMode: 'contain'
    },
    imageLogout: {
        width: 200,
        height: 65,
        borderRadius: 100,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Constants.statusBarHeight,
        marginRight: 10,
    },
    icon: {
        marginRight: 7,
    },
    textContainer: {
        marginLeft: 15,
        marginTop: 10,
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