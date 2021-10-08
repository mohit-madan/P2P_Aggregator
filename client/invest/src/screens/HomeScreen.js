import React from "react";
import Background from "../components/Background";
import Paragraph from "../components/Paragraph";
import Header from "../components/Header";
import Button from "../components/Button";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { useNavigation } from '@react-navigation/core';

export default function HomeScreen() {
  const navigation = useNavigation();
  const onPress = (risk) => {
    navigation.navigate('PoolSummary', {risk:risk});
  }
  return (
    <Background>
      <ScrollView style={{ flex: 1 }}>
            <View style={{width:'100%', marginTop:40}}>
              <Header>Hi Mohit,</Header>
            </View>
            <View
              style={{
                height: 2,
                backgroundColor: "#E538C8",
                alignSelf: "stretch",
                marginBottom: 20,
              }}
            />
            <Text style={styles.description}>
              Invest in P2P Lending Pools of various risk profiles
            </Text>
            <View style={{
              marginBottom:20
            }}>
              <Card mode="outlined" onPress={()=> onPress("Low")}>
                <Card.Title title="Investment Pool 1" subtitle="Annual Return: 12%"/>
                <Button>Explore</Button>
              </Card>
            </View>
            <View style={{
              marginBottom:20
            }}
            >
              <Card mode="outlined" onPress={()=> onPress("Medium")}>
                <Card.Title title="Investment Pool 2" subtitle="Annual Return: 15%" />
                <Button>Explore</Button>
              </Card>
            </View>
            <View style={{
              marginBottom:20
            }}            
            >
              <Card mode="outlined" onPress={()=> onPress("High")}>
                <Card.Title title="Investment Pool 3" subtitle="Annual Return: 18%" />
                <Button>Explore</Button>
              </Card>
            </View>
      </ScrollView>
    </Background>
  );
}

const styles= StyleSheet.create({
  description:{
   fontSize:18,
   marginBottom:20 
  }
})