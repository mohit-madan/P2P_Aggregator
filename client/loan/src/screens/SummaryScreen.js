import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card, Button } from "react-native-paper";
import Header from "../components/Header";
export default function SummaryScreen({navigation}){
    return(
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.heading1}>ACTIVE LOANS</Text>
                </View>
                <View style={styles.card}>
                    <Card 
                        mode="outlined"
                        >
                        <Card.Title title="Loan 1 Summary"/>
                        <Card.Content>
                        <View style={styles.column}>
                            <View style={styles.item}>
                                <Text style={styles.heading2}>
                                    Amount  
                                </Text>
                                <Text style={styles.cardText}> ₹ 10,000</Text>
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.heading2}>
                                    Interest P.A.
                                </Text>
                                <Text style={styles.cardText}> 14.5%</Text>
                            </View>
                        </View>
                        <View style={styles.column}>
                            <View style={styles.item}>
                                <Text style={styles.heading2}>
                                    Term
                                </Text>
                                <Text style={styles.cardText}>18 months</Text>
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.heading2}>
                                    Tot. Interest
                                </Text>
                                <Text style={styles.cardText}> ₹ 2,175</Text>
                            </View>
                        </View>
                        </Card.Content>
                        <Card.Actions>
                            <Button mode="contained" style={{margin:10}}>Pay EMI</Button>
                        </Card.Actions>
                    </Card>
                </View>

                <View style={styles.card}>
                    <Card 
                        mode="outlined"
                        >
                        <Card.Title title="Loan 2 Summary"/>
                        <Card.Content>
                        <View style={styles.column}>
                            <View style={styles.item}>
                                <Text style={styles.heading2}>
                                    Amount  
                                </Text>
                                <Text style={styles.cardText}> ₹ 15,000</Text>
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.heading2}>
                                    Interest P.A.
                                </Text>
                                <Text style={styles.cardText}> 13.7%</Text>
                            </View>
                        </View>
                        <View style={styles.column}>
                            <View style={styles.item}>
                                <Text style={styles.heading2}>
                                    Term
                                </Text>
                                <Text style={styles.cardText}>24 months</Text>
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.heading2}>
                                    Tot. Interest
                                </Text>
                                <Text style={styles.cardText}> ₹ 4,110</Text>
                            </View>
                        </View>
                        </Card.Content>
                        <Card.Actions>
                            <Button mode="contained" style={{margin:10}}>Pay EMI</Button>
                        </Card.Actions>
                    </Card>
                </View>            
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        paddingBottom: 20,
    },
    heading1: {
        fontWeight:'bold',
        marginTop:40,
        fontSize:18,
        textAlign:'center'
    },
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
    card: {
        width:'100%',
        marginTop:20,
    },
    cardText:{
        color: 'black',
        fontSize: 18,
    },
    column: {
        // width: '30%',
        flexDirection:'row',
        justifyContent:'space-around',
        display: 'flex',
    },
    item: {
        marginTop: 10,
    },
    button: {
        position: 'absolute',
        bottom: 10,
        padding: 20,
    }
})