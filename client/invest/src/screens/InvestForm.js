import React from "react";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

export default function InvestForm({ navigation }) {
    const [number, setNumber] = useState({ value: "", error: "" });
    const handleInvest = () => {
        navigation.navigate("Profile");
    }
    return(
        <View style={styles.container}>
            <ScrollView>
                <Header>Investment Form</Header>
                <View>
                    <Text style={styles.label}>Amount ₹</Text>
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
                <Button mode="contained" onPress={handleInvest}>Invest</Button>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
      },
    label: {
        fontWeight:'bold',
        marginTop:10,
    },
    picker: {
        marginTop: 10,
        marginBottom:20,
        maxWidth: '75%',
    }
})