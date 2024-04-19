import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import theme from "../../theme";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ButtonCard from "../ButtonCard";

const Login = ({ navigation, setUser }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const recoverPassword = () => { }

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <View style={{ gap: 10 }}>
                <View style={{ marginVertical: 30 }}>
                    <Text style={styles.title}>Bienvenido!</Text>
                    <Text style={styles.subtitle}>Por favor inicia sesión para continuar</Text>
                </View>

                <TextInput
                    placeholder="Correo"
                    style={styles.textInput}
                    value={email}
                    onChangeText={setEmail}
                />
                <View>
                    <TextInput
                        placeholder="Contraseña"
                        style={styles.textInput}
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity
                        style={styles.btnPassword}
                        onPress={toggleShowPassword}
                    >
                        <MaterialCommunityIcons name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={20} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={recoverPassword}
                >
                    <Text style={styles.textRecoveryPassword}>Olvidé mi contraseña</Text>
                </TouchableOpacity>

                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.btnLogin}
                        onPress={() => navigation.navigate('Advisor', { prueba: 'acceso' })}
                    >
                        <Text style={styles.textLogin}>Iniciar sesión</Text>
                    </TouchableOpacity>
                </View>
            </View >

            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <View style={styles.optionsContainer}>
                    <ButtonCard icon='account-outline' text='Registrarme en la app' position='center' />
                    <ButtonCard icon='headset' text='Atención al cliente' position='center' />
                </View>
            </View >
        </View >
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subtitle: {
        textAlign: 'center',
    },
    btnLogin: {
        width: '75%',
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        textAlign: 'center',
        padding: 15,
        marginTop: 20
    },
    textLogin: {
        textAlign: 'center',
        color: theme.colors.textTertiary,
        fontSize: 17,
    },
    textInput: {
        backgroundColor: theme.colors.white,
        padding: 7,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    btnPassword: {
        position: 'absolute',
        right: 0,
        width: 40,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textRecoveryPassword: {
        textAlign: 'right',
        textDecorationLine: 'underline',
        color: theme.colors.primary
    },
    optionsContainer: {
        flexDirection: 'row',
        gap: 20,
    },
})

export default Login