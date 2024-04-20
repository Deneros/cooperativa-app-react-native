import React, { useState } from "react";
import { FlatList, StyleSheet, View, Text, TextInput } from "react-native";
import consultant from "../data/consultant.js";
import ConsultantInfoCard from "./ConsultantInfoCard.jsx";
import theme from "../theme.js";

const ConsultantInfo = () => {
    const [idCard, setIdCard] = useState('')
    const [keys, setKeys] = useState({
        "cea": {
            "title": "Cédula del Asociado",
            "keys": [],
            "isEditable": true,
            "hasIcon": false
        },
        "as": {
            "title": "Asociado",
            "keys": ["name", "phone", "email", "entity", "state"]
        },
        "aa": {
            "title": "Aportes del Asociado",
            "keys": ["balance"]
        },
        "cra": {
            "title": "Créditos del Asociado",
            "keys": ["credits"]
        },
        "coa": {
            "title": "Convenios del Asociado",
            "keys": ["partnerships"],
        },
        "cca": {
            "title": "Cupos de crédito del Asociado",
            "keys": ["creditLimits"]
        }
    })

    // Dividir datos de un JSON en un array de varios JSONs
    const splitData = (data, keys) => {
        let dividedData = []

        Object.keys(keys).forEach(id => {
            let newJson = {}
            newJson['id'] = id
            newJson['title'] = keys[id].title
            if (keys[id]?.isEditable) newJson['isEditable'] = keys[id].isEditable
            if (keys[id]?.hasIcon) newJson['hasIcon'] = keys[id].hasIcon
            Object.keys(data).forEach(key => {
                if (keys[id].keys.includes(key)) {
                    newJson[key] = data[key]
                }
            })

            dividedData.push(newJson)
        });

        return dividedData
    }

    return (
        <View>
            <FlatList
                contentContainerStyle={styles.containerInfo}
                data={splitData(consultant, keys)}
                renderItem={({ item: data }) => {
                    if (data.isEditable) {
                        return <ConsultantInfoCard {...data}>
                            <TextInput
                                placeholder="Ej: 1234567890"
                                style={styles.textInput}
                                value={idCard}
                                onChangeText={setIdCard}
                            />
                        </ConsultantInfoCard>
                    } else {
                        return <ConsultantInfoCard {...data} />
                    }

                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerInfo: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        gap: 20
    },
    textInput: {
        paddingBottom: 3,
        borderBottomWidth: 1,
        width: '75%'
    },
});

export default ConsultantInfo;