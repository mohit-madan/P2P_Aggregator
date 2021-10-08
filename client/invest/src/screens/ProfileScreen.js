import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, Button } from "react-native-paper";
import Header from "../components/Header";
export default function ProfileScreen({navigation}){
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
                                    Profit  
                                </Text>
                                <Text style={styles.cardText}> ₹ 1,974</Text>
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.heading2}>
                                    P&L
                                </Text>
                                <Text style={styles.cardText}>  +5.6%</Text>
                            </View>
                        </View>
                        <View style={styles.column}>
                            <View style={styles.item}>
                                <Text style={styles.heading2}>
                                    Invested
                                </Text>
                                <Text style={styles.cardText}>₹ 35,250</Text>
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.heading2}>
                                    Current
                                </Text>
                                <Text style={styles.cardText}>₹ 37,224</Text>
                            </View>
                        </View>
                        </Card.Content>
                    </Card>
                </View>   
                <View style={styles.card}>
                    <Card 
                        mode="outlined"
                        >
                        <Card.Title title="Investment 2 Summary"/>
                        <Card.Content>
                        <View style={styles.column}>
                            <View style={styles.item}>
                                <Text style={styles.heading2}>
                                    Profit  
                                </Text>
                                <Text style={styles.cardText}> ₹ 1,000</Text>
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.heading2}>
                                    P&L
                                </Text>
                                <Text style={styles.cardText}>  +4.6%</Text>
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
                    </Card>
                </View>    
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