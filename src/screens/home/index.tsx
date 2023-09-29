import React, {useContext} from "react";
import {Pressable, Text, View } from "react-native";
import {styles} from './styles';
import axios from "axios";
import {AuthContext} from '../../contexts/auth'

const baseUrl = process.env.BASEURL

export default function HomeScreen() {
  // const nome = useContext(AuthContext)
  const {nome, user} = useContext(AuthContext)
  const {logout} = useContext(AuthContext)
  
  function handleLogout() {
    logout(user)
  }

    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        {/* <Text>Bem vindo {nome['nome']}</Text> */}
        <Text>Bem vindo {nome}</Text>
        <Text>Username: {user.username}</Text>
        <Pressable 
        style={styles.formButton}
        onPress={handleLogout}
      >
        <Text style={styles.textButton}>sair</Text>
      </Pressable>
      </View>
    );
  }
