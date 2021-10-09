import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, Button } from "react-native-paper";
import Header from "../components/Header";
export default function ProfileScreen({navigation, route}){
    const [amount1, setAmount1] = useState(35250);
    const [current1, setCurrent1] = useState(37224);

    const handleAction = (action, amount, current) => {
        navigation.navigate('Amount', {action:action, amount:amount, current:current})
    }

    return(
        <ScrollView>
        <View style={styles.container}>
            <View style={{width:'100%', marginTop:40}}>
                <Header>Your Investments</Header>
                <View
                style={{
                    height: 2,
                    backgroundColor: "#E538C8",
                    alignSelf: "stretch",
                    marginBottom: 20,
                }}
                />
            </View>
            <View style={styles.card}>
                    <Card 
                        mode="outlined"
                        >
                        <Card.Title title="Investment 1 Summary"/>
                        <Card.Content>
                        <View style={styles.column}>
                            <View style={styles.item}>
                                <Text style={styles.heading2}>
                                    Started  
                                </Text>
                                <Text style={styles.cardText}>17 Jul '21</Text>
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.heading2}>
                                    Annual Int.
                                </Text>
                                <Text style={styles.cardText}>upto 12%</Text>
                            </View>
                        </View>
                        <View style={styles.column}>
                            <View style={styles.item}>
                                <Text style={styles.heading2}>
                                    Invested
                                </Text>
                                <Text style={styles.cardText}>₹ {(route?.params?.action==="invest") ? (amount1 + parseInt(route?.params?.amount)): (route?.params?.action==="withdraw") ? (amount1 - parseInt(route?.params?.amount)) : amount1}</Text>
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.heading2}>
                                    Current
                                </Text>
                                <Text style={styles.cardText}>₹ {(route?.params?.action==="invest") ? (current1 + parseInt(route?.params?.amount)): (route?.params?.action==="withdraw") ? (current1 - parseInt(route?.params?.amount)) : current1}</Text>
                            </View>
                        </View>
                        </Card.Content>
                        <Card.Actions style={{marginTop:10, alignSelf:'center'}}>
                            <Button 
                                mode="contained" 
                                onPress={() => handleAction('withdraw', amount1, current1)}
                            >Withdraw</Button>
                            <Button 
                                mode="contained" 
                                style={{marginLeft:18}} 
                                onPress={() => handleAction('invest',amount1, current1)}
                            >Invest More</Button>
                        </Card.Actions>
                    </Card>
                </View>   
                {/* <View style={styles.card}>
                    <Card 
                        mode="outlined"
                        >
                        <Card.Title title="Investment 2 Summary"/>
                        <Card.Content>
                        <View style={styles.column}>
                            <View style={styles.item}>
                                <Text style={styles.heading2}>
                                    Started  
                                </Text>
                                <Text style={styles.cardText}>2 Jun '21</Text>
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.heading2}>
                                    Annual Int.
                                </Text>
                                <Text style={styles.cardText}>upto 12.6%</Text>
                            </View>
                        </View>
                        <View style={styles.column}>
                            <View style={styles.item}>
                                <Text style={styles.heading2}>
                                    Invested
                                </Text>
                                <Text style={styles.cardText}>₹ 21,450</Text>
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.heading2}>
                                    Current
                                </Text>
                                <Text style={styles.cardText}>₹ 22,450</Text>
                            </View>
                        </View>
                        </Card.Content>
                        <Card.Actions style={{marginTop:10, alignSelf:'center'}}>
                            <Button mode="contained">Withdraw</Button>
                            <Button mode="contained" style={{marginLeft:18}}>Invest More</Button>
                        </Card.Actions>
                    </Card>
                </View>     */}
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    heading2: {
        fontWeight:'bold',
        color: 'grey',
        fontSize: 20,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    column: {
        flexDirection:'row',
        justifyContent:'space-around',
    },
    item: {
        marginTop: 20,
    },
    button: {
        position: 'absolute',
        bottom: 10,
        padding: 20,
    },
    card: {
        width:'100%',
        marginTop:20,
    },
    cardText:{
        color: 'black',
        fontSize: 18,
    },
})