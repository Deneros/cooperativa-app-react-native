import React from "react";
import ProductList from "../ProductList.jsx";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import StyledText from "../StyledText.jsx";
import theme from "../../theme.js";

const Advisor = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.options}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <StyledText fontSize='subHeading' fontWeight='bold' style={{ fontWeight: 'bold' }}>Tus productos</StyledText>
                </View>
                <View style={{ flexDirection: 'row', gap: 20 }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Documents', { prueba: 'acceso' })}
                    >
                        <MaterialCommunityIcons name="file-document-multiple-outline" size={24} color={theme.colors.primary} />
                    </TouchableOpacity>
                </View>
            </View>
            <ProductList />
        </View>
    )
}

const styles = StyleSheet.create({
    options: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 20
    }
})

export default Advisor