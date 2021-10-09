import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import Header from "../components/Header";
export default function PoolSummary({navigation, route}){
    const handlePress = () => {
        navigation.navigate('InvestForm');
    }
    return(
        <View style={styles.container}>
            <View>
                <Header>P2P Lending Pool</Header>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={styles.subHeading}>Risk Profile: </Text>
                    <Text>{route?.params.risk}</Text>
                </View>
            </View>
            <View style={styles.column}>
                <View style={styles.item}>
                    <Text style={styles.heading2}>Min. Investment</Text>
                    <Text>₹ 100</Text>
                </View>                
                <View style={styles.item}>
                    <Text style={styles.heading2}>Current Pool Size</Text>
                    <Text>₹ 1 cr</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.heading2}>Avg. Contribution</Text>
                    <Text>₹ 1000</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.heading2}>Avg. default Rate</Text>
                    <Text>4%</Text>
                </View>
            </View>
            <View style={styles.column}>
                <View style={styles.item}>                                
                    <Text style={styles.heading2}>Hist. Returns</Text>
                    {route?.params?.risk==="High" ? <Text>18%</Text> : route?.params?.risk==="Medium" ? <Text>15%</Text> : route?.params?.risk==="Low" ? <Text>12%</Text> : <Text>9%</Text>}
                    
                </View>
                <View style={styles.item}>                                
                    <Text style={styles.heading2}>Total Investers</Text>
                    <Text>1000</Text>
                </View>
                <View style={styles.item}>                                
                    <Text style={styles.heading2}>Total borrowers</Text>
                    <Text>887</Text>
                </View>
            </View>
            <View>

            </View>
            <View style={styles.button}>
                <Button mode="contained" onPress={handlePress}>Invest Now</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    subHeading: {
        fontWeight:'bold',
        color: 'grey',
        fontSize: 18,
    },
    heading2: {
        fontWeight:'bold',
        color: 'grey',
        fontSize: 16,
    },
    container: {
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff' // if you want to fill rows left to right: ;
      },
    column: {
        width: '50%',
    },
    item: {
        marginTop: 20,
    },
    button: {
        position: 'absolute',
        bottom: 10,
        padding: 20,
    }
})