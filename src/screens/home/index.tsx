import React, {useContext} from "react";
import {Text, View } from "react-native";
import {styles} from './styles';

import {AuthContext} from '../../contexts/auth'

export default function HomeScreen() {

  // const nome = useContext(AuthContext)
  const {nome, user} = useContext(AuthContext)
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        {/* <Text>Bem vindo {nome['nome']}</Text> */}
        <Text>Bem vindo {nome}</Text>
        <Text>Username: {user.username}</Text>
      </View>
    );
  }
