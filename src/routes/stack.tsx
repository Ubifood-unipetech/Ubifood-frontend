import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn  from '../screens/signIn';
import Home from '../screens/home';
import Registration from '../screens/registration';
import Restaurants from '../screens/restaurants';
import RestaurantProducts from '../screens/restaurantProducts'

import AuthProvider from "../contexts/auth";

const Stack = createNativeStackNavigator();

export default function StackComponent() {

  return (
    <NavigationContainer>
        <AuthProvider>
            <Stack.Navigator>
                <Stack.Screen name="SignIn" component={SignIn} options={{ header: () => null }} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="Restaurants" component={Restaurants} />
                <Stack.Screen name="RestaurantProducts" component={RestaurantProducts} />
            </Stack.Navigator>
        </AuthProvider>
    </NavigationContainer>
  );
}