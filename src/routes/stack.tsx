import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, TouchableOpacity } from "react-native";

import SignIn from '../screens/signIn';
import Home from '../screens/home';
import Registration from '../screens/registration';
import Restaurants from '../screens/restaurants';
import RestaurantProducts from '../screens/restaurantProducts'

import AuthProvider from "../contexts/auth";

const Stack = createNativeStackNavigator();

const Arrow = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handleGoBack}>
      <Image
        source={require('../assets/seta.png')}
        style={{ width: 45, height: 45 }}
      />
    </TouchableOpacity>
  );
};


export default function StackComponent() {

  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignIn} options={{ header: () => null }} />
          <Stack.Screen name="Home" component={Home} options={({ navigation }) => ({ headerStyle: { backgroundColor: "#151E27" }, title: "", headerLeft: () => <Arrow navigation={navigation} />, })} />
          <Stack.Screen name="Registration" component={Registration} options={{ header: () => null }} />
          <Stack.Screen name="Restaurants" component={Restaurants} />
          <Stack.Screen name="RestaurantProducts" component={RestaurantProducts} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}