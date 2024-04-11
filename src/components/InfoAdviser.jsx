import React from "react";
import { View, Text } from "react-native";
import advisers from "../data/advisers.js";


const AdviserList = () => {
    return (
        <View>
            {advisers.map(adviser => (
                <View key={adviser.id}>
                    <Text>{adviser.name}</Text>
                </View>
            ))}
        </View>
    )
}

export default AdviserList