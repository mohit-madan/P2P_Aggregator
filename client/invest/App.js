import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./src/core/theme";
import { HomeScreen, PoolSummary, InvestForm } from "./src/screens";
// import { View, Text, TouchableOpacity } from 'react-native';
import ProfileScreen from "./src/screens/ProfileScreen";
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PoolSummary" component={PoolSummary} />
      <Stack.Screen name="InvestForm" component={InvestForm} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home" 
        >
          <Tab.Screen 
            name="Home" 
            component={RootNavigator} 
            options={{
              tabBarLabel:'Home',
              tabBarIcon: ()=>(
                <MaterialIcons name="home" size={24} color="black" />
                )        
              }} />
          <Tab.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{
              tabBarLabel:'Investments',
              tabBarIcon: ()=>(
                <MaterialIcons name="monetization-on" size={24} color="black" />
                )        
              }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
