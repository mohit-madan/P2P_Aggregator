import React, { useEffect, useState } from "react";
import Background from "../components/Background";
import Paragraph from "../components/Paragraph";
import Header from "../components/Header";
import Button from "../components/Button";
import { ActivityIndicator, View, Text, ScrollView } from "react-native";
import { Card, Title } from "react-native-paper";
import { BarChart, PieChart } from "react-native-gifted-charts";
import config from "../../config";
export default function Complete({ navigation }) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      fetchData();
    }, 5000);
  }, []);

  const onPress = () => {
    navigation.navigate('LoanForm');
  }

  const fetchData = async () => {
    try {
      const response = await fetch(`${config.BACKEND_URL}/get-data/`);
      const json = await response.json();
      let transactions = json["account"]["transactions"]["transaction"];
      let total_amount = 0;
      let num_debit = 0;
      let num_credit = 0;
      transactions.forEach((element) => {
        if (element["type"] === "DEBIT") {
          num_debit += 1;
          total_amount += +element["amount"];
        }
        if (element["type"] === "CREDIT") {
          num_credit += 1;
          total_amount += +element["amount"];
        }
      });
      const pieData = [
        { value: num_debit, color: "#7928EB", text: "Debit" },
        { value: num_credit, color: "#560CCE", text: "Credit" },
      ];

      setData({
        name: json["account"]["profile"]["holders"]["holder"][0]["name"],
        account: json["account"]["maskedAccNumber"],
        pan: json["account"]["profile"]["holders"]["holder"][0]["pan"],
        balance: json["account"]["summary"]["currentBalance"],
        total_amount: total_amount,
        pie_data: pieData,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Background>
      <ScrollView style={{ flex: 1 }}>
        {isLoading ? (
          <>
            <Header>Consent successfully approved</Header>
            <Paragraph >
              Please wait while we fetch your financial data.
            </Paragraph>
            <ActivityIndicator size="large" color="#0000ff" />
          </>
        ) : (
          <>
            <Header>Hi {data["name"].split(" ")[0]},</Header>
            <View
              style={{
                height: 2,
                backgroundColor: "#E538C8",
                alignSelf: "stretch",
                marginBottom: 20,
              }}
            />
            <Paragraph
              style={{
                marginBottom: 10,
                textAlign: "left",
              }}
            >
              Based on your profile you are eligible for upto ₹5 lac @ 13% p.a.
            </Paragraph>
            <View style={{
              marginBottom:20,
              marginTop:40
            }}
            >
              <Card mode="outlined" onPress={()=> onPress()}>
                <Card.Title title="Get Loan" />
                <Text style={{marginLeft:20}}>Get money in your account in &lt; 24hrs</Text>
                <Button>Apply Now</Button>
              </Card>
            </View>
        
            {/* <View
              style={{
                height: 2,
                backgroundColor: "#E538C8",
                alignSelf: "stretch",
                marginBottom: 10,
              }}
            /> */}
            
            {/* <Button
              mode="outlined"
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "StartScreen" }],
                })
              }
            >
              Go home
            </Button> */}
          </>
        )}
      </ScrollView>
    </Background>
  );
}
