import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import ButtonCard from "../ButtonCard";
import StyledText from "../StyledText";
import documents from "../../data/documents";

const Documents = () => {
    return (
        <View style={styles.container}>
            <StyledText fontSize='subHeading' fontWeight='bold' style={{ fontWeight: 'bold' }}>Selecciona una opción</StyledText>
            <ScrollView contentContainerStyle={styles.documents}>
                {documents.map((document) =>
                    <ButtonCard icon={document.icon} text={document.text} />
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        gap: 20
    },
    documents: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10
    }
})

export default Documents;
