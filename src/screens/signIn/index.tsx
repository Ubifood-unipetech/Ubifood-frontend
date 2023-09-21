import { StatusBar } from "expo-status-bar";
import React, {useContext, useState} from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import {styles} from './styles';

import {AuthContext} from '../../contexts/auth';

export default function SignIn({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {signIn} = useContext(AuthContext)

  function handleLogin(){
    signIn(username, password)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>login no unifood</Text>
      <TextInput style={styles.formInput}
        placeholder="Informe o username"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput style={styles.formInput}
        placeholder="informe a senha"
        autoCapitalize="none"
        secureTextEntry
        value={password}
        onChangeText={(pass) => setPassword(pass)}
      />
      <Pressable 
        style={styles.formButton}
        onPress={handleLogin}
      >
        <Text style={styles.textButton}>logar</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>esqueci minha senha</Text>
        </Pressable>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>novo user</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

