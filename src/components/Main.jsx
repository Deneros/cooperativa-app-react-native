import React, { useState } from "react";
import { View, StyleSheet, StatusBar, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./pages/Login.jsx";
import Adviser from "./pages/Adviser.jsx";
import Consultant from "./pages/Consultant.jsx";
import Documents from "./pages/Documents.jsx";
import theme from "../theme.js";

const Stack = createNativeStackNavigator();

const Main = () => {
    const [user, setUser] = useState(''); // Corregir aquí

    return (
        <View style={mainStyle.layout}>
            <StatusBar backgroundColor={theme.colors.primary} />
            <Header user={user} />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ animation: 'none' }}>
                    <Stack.Screen
                        name='Login'
                        options={{ headerShown: false }}
                    >
                        {props => <Login {...props} setUser={setUser} />}
                    </Stack.Screen>
                    <Stack.Screen
                        name='Adviser'
                        component={Adviser}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='Consultant'
                        component={Consultant}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='Documents'
                        component={Documents}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            <Footer />
        </View>
    )
}

const mainStyle = StyleSheet.create({
    layout: {
        flex: 1,
    }
})

export default Main;
