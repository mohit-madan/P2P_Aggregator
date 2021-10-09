import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import TextInput from '../components/TextInput';
import Button from "../components/Button";
import Header from "../components/Header";
import { amountValidator } from "../helpers/amountValidator";

export default function Amount({navigation, route}){
    const [number, setNumber]=useState({ value: "", error: "" });
    const [loading, setLoading]=useState(false);
    const handleAction = () =>{
        setLoading(true);
        const amountError = amountValidator(route.params, number.value);
        if(amountError){
            setNumber({value:number.value, error:amountError})
        }
        else{
            navigation.navigate("Profile", {amount:number.value, action:route.params.action})
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Header>
                    Enter Amount you want to {route.params.action}
                </Header>
                {(route?.params?.action==="withdraw") && <Text style={{fontSize:18}}>Max Limit: ₹ {route?.params?.current}</Text>}
            </View>
            <TextInput
                label="Amount"
                returnKeyType="next"
                value={number.value}
                onChangeText={(text) => setNumber({ value: text, error: "" })}
                error={!!number.error}
                errorText={number.error}
                keyboardType="number-pad"
            />
            <Button mode="contained" onPress={handleAction}>
                {route.params.action} Amount
            </Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    header:{
        paddingTop:100,
    }
})