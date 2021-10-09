import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "../components/Button";
import Header from "../components/Header";

export default function HomeScreen({navigation}){
    const handleClick = () => {
        navigation.navigate("StartScreen");
    }
    return(
        <View style={styles.container}>
            <Header><Text style={{color:'black'}}>Welcome to P2P Lending App</Text></Header>
            <Header>Provide Access to your Bank Statements to Apply for Loans</Header>
            <Button onPress={handleClick} mode="contained">Continue</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 160,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
})