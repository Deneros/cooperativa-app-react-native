import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from "../theme";

const ButtonCard = ({ icon, text, position = 'left' }) => {

    return (
        <TouchableOpacity
            style={[styles.container, { alignItems: position == 'left' ? 'flex-start' : position == 'right' ? 'flex-end' : position }]}
        // onPress={() => console.log('hello!)}
        >
            <View style={styles.icon}>
                <MaterialCommunityIcons name={icon} size={30} />
            </View>
            <Text style={{ textAlign: position }}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 5,
        minWidth: 140,
        height: 175,
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 30,
        backgroundColor: theme.colors.white,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: theme.colors.lightGray,
    },
    icon: {
        padding: 5,
        borderRadius: 99,
        borderColor: theme.colors.lightGray,
        borderWidth: 1,
        justifyContent: 'center'
    }
})

export default ButtonCard;
