import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import StyledText from "./StyledText.jsx";
import theme from "../theme.js";
import { MaterialCommunityIcons, Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';

const states = {
    1: "#c7e0b0",
    2: "#FF8585"
}

const CardHeader = (props) => (
    <View style={styles.header}>
        <View style={styles.headerContent}>
            <View style={styles.headerMark} />
            {props.hasIcon &&
                <View style={{ marginRight: 10 }}>
                    {props.id === 'as' &&
                        <MaterialCommunityIcons name="account-outline" size={24} color="black" />}
                    {props.id === 'aa' && (
                        <MaterialCommunityIcons name="piggy-bank-outline" size={24} color="black" />
                    )}
                    {props.id === 'cra' && (
                        <Ionicons name="receipt-outline" size={24} color="black" />
                    )}
                    {props.id === 'coa' && (
                        <MaterialCommunityIcons name="handshake-outline" size={24} color="black" />
                    )}
                    {props.id === 'cca' && (
                        <MaterialCommunityIcons name="cash-multiple" size={24} color="black" />
                    )}
                </View>}
            <StyledText fontSize='subHeading' fontWeight='bold' style={styles.title}>{props.title}</StyledText>
            {props.id === 'as' &&
                <Text style={{
                    backgroundColor: states[props.state.id],
                    paddingVertical: 1,
                    paddingHorizontal: 5,
                    marginLeft: 10,
                    borderRadius: 5
                }}>
                    {props.state.name}
                </Text>
            }
        </View>
        <View>
            <TouchableOpacity>
                <Ionicons style={styles.menu} name="ellipsis-horizontal" size={24} color={theme.colors.primary} />
            </TouchableOpacity>
        </View>
    </View>
);

const CardBody = (props) => (
    <View style={styles.body}>
        {props.children && (
            <View>{props.children}</View>
        )}

        {props.name && (
            <StyledText style={styles.item}>{props.name}</StyledText>
        )}

        {props.phone && (
            <StyledText style={styles.item}>Celular: {props.phone}</StyledText>
        )}

        {props.email && (
            <StyledText style={styles.item}>Correo: {props.email}</StyledText>
        )}

        {props.entity && (
            <StyledText style={styles.item}>Entidad: {props.entity}</StyledText>
        )}

        {props.balance && (
            <View>
                <StyledText style={styles.item}>Saldo disponible</StyledText>
                <StyledText style={{ fontSize: 20 }}>{props.balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</StyledText>
            </View>
        )}

        {props.credits && (
            <View>
                {props.credits.map((credit) =>
                    <View key={Math.random().toString()} style={{ flexDirection: 'row' }}>
                        <Text style={{ flex: 1 }}>{credit.name}</Text>
                        <Text style={{ flex: 0.5 }}>{credit.type}</Text>
                        <Text style={{ flex: 1 }}>{credit.value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Text>
                    </View>
                )}
            </View>
        )}

        {props.partnerships && (
            <View>
                {props.partnerships.map((partnership) =>
                    <View key={Math.random().toString()} style={{ flexDirection: 'row' }}>
                        <Text style={{ flex: 1 }}>{partnership.name}</Text>
                        <Text style={{ flex: 0.5 }}>{partnership.type}</Text>
                        <Text style={{ flex: 1 }}>{partnership.value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Text>
                    </View>
                )}
            </View>
        )}

        {props.creditLimits && (
            <View>
                {props.creditLimits.map((creditLimit) =>
                    <View key={Math.random().toString()} style={{ flexDirection: 'row' }}>
                        <Text style={{ flex: 1 }}>{creditLimit.name}</Text>
                        <Text style={{ flex: 1 }}>{creditLimit.value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</Text>
                        <Text style={{ flex: 0.5 }}>{creditLimit.percentage * 100 + "%"}</Text>
                    </View>
                )}
            </View>
        )}
    </View>
);

const CardFooter = (props) => (
    <View style={styles.footer}>
    </View>
);

const ConsultantInfoCard = (props) => {
    return (
        <View
            key={Math.random().toString()}
            style={styles.container}
        >
            <CardHeader {...props} />
            <CardBody {...props} />
            <CardFooter {...props} />
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
        borderRadius: 8,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginHorizontal: 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingVertical: 10,
        marginRight: 15,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    body: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    item: {
        marginBottom: 5,
        fontSize: theme.fontSizes.body
    },
    footer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    headerMark: {
        height: '100%',
        width: 5,
        backgroundColor: theme.colors.primary,
        marginRight: 10
    },
});

export default ConsultantInfoCard;
