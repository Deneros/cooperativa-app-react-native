import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./pages/Login.jsx";
import Advisor from "./pages/Advisor.jsx";
import Consultant from "./pages/Consultant.jsx";

const Stack = createNativeStackNavigator();

const Main = () => {
    const [user, setUser] = useState(); // Corregir aquí

    return (
        <View style={mainStyle.layout}>
            <Header user={user} />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name='Login'
                        options={{ headerShown: false }}
                    >
                        {props => <Login {...props} setUser={setUser} />}
                    </Stack.Screen>
                    <Stack.Screen
                        name='Advisor'
                        component={Advisor}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name='Consultant'
                        options={{ headerShown: false }}
                    >
                        {props => <Consultant {...props} />}
                    </Stack.Screen>
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
