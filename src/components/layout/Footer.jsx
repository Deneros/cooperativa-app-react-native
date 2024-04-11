import React from "react";
import { View, StyleSheet, Text } from "react-native";
import theme from "../../theme";

const Footer = ({children}) => {
    return (
    <View style={styles.body}>
        {children}
    </View>
    )
}

const styles = StyleSheet.create({
    body:{
        backgroundColor:theme.colors.primary,
        height:'5%'

    }
})

export default Footer