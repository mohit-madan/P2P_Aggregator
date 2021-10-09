import React from "react";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Picker} from '@react-native-picker/picker';
import Background from "../components/Background";
import Header from "../components/Header";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { termValidator } from "../helpers/termValidator";
export default function LoanForm({ navigation }) {
    const [term, setTerm] = useState({ value: "", error: "" });
    const [amount, setAmount] = useState({value: "", error: ""})
    const [purpose, setPurpose] = useState("Wedding expenses");
    const [multiplier, setMultiplier] = useState(14.5);
    
    const handleClick = () => {
        const termError = termValidator(term.value);
        if(termError){
            setTerm({value:term.value, error:termError})
        }
        else{
            navigation.navigate("Summary", {term:term.value, amount:amount.value, multiplier:multiplier});
        }
    }
    return(
        <Background>
            <View style={styles.container}>
                <ScrollView>
                    <Header>Tell us more about yourself</Header>
                    <View>
                        <Text style={styles.label}>Purpose of the Loan</Text>
                    </View>
                    <Picker 
                        style={styles.picker}
                        selectedValue={purpose}
                        onValueChange={(itemValue, itemIndex) => {
                                setPurpose(itemValue);
                                if(itemIndex===0){
                                    setMultiplier(14.5)
                                }
                                else{
                                    setMultiplier(12)
                                }
                            }
                          }>
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
                        <Text style={styles.label}>Available Loan Vendors</Text>
                        {   
                            (purpose==="Wedding expenses") ?
                            <Text style={styles.item}>LendingKart, I2I FUnding</Text> :
                            <Text style={styles.item}>LiquiLoans, EasyCredit</Text>
                        }
                    </View>
                    <View>
                        <Text style={styles.label}>Loan Amount</Text>
                    </View>
                    <TextInput 
                        label="Amount"
                        returnKeyType="next"
                        value={amount.value}
                        onChangeText={(text) => setAmount({ value: text, error: "" })}
                        error={!!amount.error}
                        errorText={amount.error}
                        keyboardType="number-pad"
                    />
                    <View>
                        <Text style={styles.label}>Term in Months</Text>
                    </View>
                    <TextInput 
                        label="Months"
                        returnKeyType="next"
                        value={term.value}
                        onChangeText={(text) => setTerm({ value: text, error: "" })}
                        error={!!term.error}
                        errorText={term.error}
                        keyboardType="number-pad"
                    />
                    <View>
                    <Text style={styles.label}>Applicable Interest Rate </Text>{   
                            (purpose==="Wedding expenses") ?
                            <Text style={styles.item}>14.5%</Text> :
                            <Text style={styles.item}>12%</Text>
                        }
                    </View>
                    <Button style={{marginTop:20}} onPress={handleClick} mode="contained">Apply</Button>
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
        fontSize:18,
    },
    item: {
        fontSize:18,
        margin:10,
    },
    picker: {
        marginTop: 10,
        marginBottom:20,
        maxWidth: '75%',
    }
})