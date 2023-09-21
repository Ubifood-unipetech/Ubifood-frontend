import React from "react";
import {Text, View , StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn  from '../screens/signIn';
import Home from '../screens/home';

import AuthProvider from "../contexts/auth";

const Stack = createNativeStackNavigator();

export default function StackComponent() {
  return (
    <NavigationContainer>
        <AuthProvider>
            <Stack.Navigator>
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </AuthProvider>
    </NavigationContainer>
  );
}