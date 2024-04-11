import React from "react";
import { Text, Button, View } from "react-native";

function sumar(a , b){
    return  a + b 
}

const Login = ({navigation, setUser}) => {
    return (
        <View>
            <Text>Hola soy login</Text>
            <Button 
                title="Sign in"
                onPress={() => navigation.navigate('Advisor', { prueba: 'acceso' })}
            />
        </View>
    )
}

export default Login