import React from "react";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Picker} from '@react-native-picker/picker';
import Background from "../components/Background";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

export default function LoanForm({ navigation }) {
    const [date, setDate] = useState(new Date());
    const [number, setNumber] = useState({ value: "", error: "" });

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
      };
    return(
        <Background>
            <View style={styles.container}>
                <ScrollView>
                    <Header>Tell us more about yourself</Header>
                    <View>
                        <Text style={styles.label}>Purpose of the Loan</Text>
                    </View>
                    <Picker style={styles.picker}>
                        <Picker.Item label="Wedding expenses" value="Wedding expenses" />
                        <Picker.Item label="Credit Card Payment" value="Credit Card Payment" />
                    </Picker>

                    <View>
                        <Text style={styles.label}>Maximum Qualification</Text>
                    </View>
                    <Picker style={styles.picker}>
                        <Picker.Item label="Diploma" value="Diploma" />
                        <Picker.Item label="Graduate" value="Graduate" />
                        <Picker.Item label="Post graduate" value="Post graduate" />
                        <Picker.Item label="12th class" value="12th class" />
                        <Picker.Item label="Others" value="Others" />
                    </Picker>
                    <View>
                        <Text style={styles.label}>PinCode of current Residence</Text>
                    </View>
                    <TextInput 
                        label="PinCode"
                        returnKeyType="next"
                        value={number.value}
                        onChangeText={(text) => setNumber({ value: text, error: "" })}
                        error={!!number.error}
                        errorText={number.error}
                        keyboardType="number-pad"
                    />
                    <Button mode="contained">Apply</Button>
                </ScrollView>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
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