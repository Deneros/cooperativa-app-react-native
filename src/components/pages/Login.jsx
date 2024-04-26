import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useForm, Controller } from 'react-hook-form';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ButtonCard from "../ButtonCard";
import theme from "../../theme";
import users from "../../data/users";

const Login = ({ navigation, setUser }) => {
    const { control, handleSubmit, errors } = useForm();
    const [showPassword, setShowPassword] = useState(false)

    const login = (data) => {
        const user = users.find(user => user.email === data.email && user.password === data.password)
        if (user) {
            setUser(user)
            if (user.role === 'adviser')
                navigation.navigate('Adviser', { prueba: 'acceso' })
            else if (user.role === 'consultant')
                navigation.navigate('Consultant', { prueba: 'acceso' })
        }
    }

    const recoverPassword = () => { }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
                <View style={{ gap: 10 }}>
                    <View style={{ marginVertical: '5%' }}>
                        <Text style={styles.title}>Bienvenido!</Text>
                        <Text style={styles.subtitle}>Por favor inicia sesión para continuar</Text>
                    </View>

                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder="Correo"
                                style={styles.textInput}
                            />
                        )}
                        name="email"
                        rules={{ required: true }}
                    />
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View>
                                <TextInput
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    placeholder="Contraseña"
                                    style={styles.textInput}
                                    secureTextEntry={!showPassword}
                                />
                                <TouchableOpacity
                                    style={styles.btnPassword}
                                    onPress={() => setShowPassword(!showPassword)}
                                >
                                    <MaterialCommunityIcons name={showPassword ? 'eye-outline' : 'eye-off-outline'} size={20} />
                                </TouchableOpacity>
                            </View>
                        )}
                        name="password"
                        rules={{ required: true }}
                    />
                    <TouchableOpacity
                        onPress={recoverPassword}
                    >
                        <Text style={styles.textRecoveryPassword}>Olvidé mi contraseña</Text>
                    </TouchableOpacity>

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                            style={styles.btnLogin}
                            onPress={handleSubmit(login)}
                        >
                            <Text style={styles.textLogin}>Iniciar sesión</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View style={styles.optionsContainer}>
                        <ButtonCard icon='account-outline' text='Registrarme en la app' position='center' />
                        <ButtonCard icon='headset' text='Atención al cliente' position='center' />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
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
        marginTop: '5%'
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
        marginTop: 30,
    },
})

export default Login