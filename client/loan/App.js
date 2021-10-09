import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from "./src/core/theme";
import { StartScreen, Complete, Dashboard, LoanForm, SummaryScreen, HomeScreen } from "./src/screens";
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function RootNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Complete"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Complete" 
        component={Complete}
        options={{
          tabBarLabel:'Home',
          tabBarIcon: ()=>(
            <MaterialIcons name="home" size={24} color="black" />
            )        
          }} />
      <Tab.Screen 
        name="Summary" 
        component={SummaryScreen} 
        options={{
          tabBarLabel:'Summary',
          tabBarIcon: ()=>(
            <MaterialIcons name="dashboard" size={24} color="black" />
            )        
          }}
        />
    </Tab.Navigator>
  );
};


export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="RootNavigator" component={RootNavigator} /> 
          <Stack.Screen name="LoanForm" component={LoanForm} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
