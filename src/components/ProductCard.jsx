import React from "react";
import { View, StyleSheet, Text, TouchableOpacity  } from "react-native";
import StyledText from "./StyledText.jsx";
import theme from "../theme.js";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';






const CardHeader = ({ title, id }) => (
    <View style={styles.header}>
        <View style={styles.headerContent}>
            <View style={styles.headerMark} />
                <View style={{marginRight:10}}>
                    { id ==='ca' && (
                        <MaterialCommunityIcons name="piggy-bank-outline" size={24} color="black" />
                    )}
                    { id ==='cc' && (
                        <MaterialIcons name="account-balance-wallet" size={24} color="black" />
                    )}
                    { id ==='tc' && (
                        <Ionicons name="receipt-outline" size={24} color="black" />
                    )}
                    { id ==='ch' && (
                        <AntDesign name="home" size={24} color="black" />
                    )}
                </View>
            <StyledText fontSize='subHeading' fontWeight='bold' style={styles.title}>{title}</StyledText>
        </View>
        <View>
            <TouchableOpacity>
                <Ionicons style={styles.menu} name="options-outline" size={24} color="black" />
            </TouchableOpacity>
        </View>
    </View>
);

const CardBody = (props) => (
    <View style={styles.body}>
    {props.accountNumber && (
        <StyledText style={styles.item}>Numero de Cuenta: {props.accountNumber}</StyledText>
    )}

    {props.balance && (
        <StyledText style={styles.item}>Saldo Disponible: {props.balance} {props.currency}</StyledText>
    )}

    {props.cardNumber && (
        <StyledText style={styles.item}>Numero de Tarjeta: {props.cardNumber}</StyledText>
    )}

    {props.creditLimit && (
        <StyledText style={styles.item}>Cupo de Compras: {props.creditLimit} {props.currency}</StyledText>
    )}

    {props.loanNumber && (
        <StyledText style={styles.item}>Numero de Préstamo: {props.loanNumber}</StyledText>
    )}

    {props.loanAmount && (
        <StyledText style={styles.item}>Monto del Préstamo: {props.loanAmount} {props.currency}</StyledText>
    )}

    {props.remainingBalance && (
        <StyledText style={styles.item}>Saldo Restante: {props.remainingBalance} {props.currency}</StyledText>
    )}
    </View>
);

const CardFooter = () => (
    <View style={styles.footer}>
    </View>
);

const ProductCard = (props) => (
    <View key={Math.random().toString()} style={styles.container}>
        <CardHeader title={props.product} id={props.id} />
        <CardBody {...props} />
        <CardFooter />
    </View>
);


const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginLeft:2,
        marginRight:2
    },
    
    header: {
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
        marginTop:20,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center', 
        height: '100%'
    },
    icon: {
        marginRight: 5, 
    },
    title: {
        marginRight: 5,
    },
    menu: {
        // fontSize: 20, 
        marginRight:15
    },
    body: {
        paddingTop: '8%',
        marginBottom: 10,
        marginLeft: '15%',
        height: 125,
        fontSize: theme.fontSizes.subHeading,
    },
    item: {
        marginBottom: 20,
        fontSize: theme.fontSizes.body
    },
    footer: {
    },
    headerMark: {
        height: '100%',
        width: 5,
        backgroundColor: theme.colors.third,
        marginRight: 10
    }
});

export default ProductCard;
