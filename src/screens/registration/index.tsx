import React, {useContext, useState} from "react";
import {Pressable, Text, TextInput, View } from "react-native";
import {styles} from './styles';
import axios from "axios";
import {AuthContext} from '../../contexts/auth'

export default function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const {registration} = useContext(AuthContext)
  function handleRegister(){
    registration(name, lastName, username, password)
  }
    return (
      <View style={styles.container}>
      <Text style={styles.formTitle}>Registration</Text>
      <TextInput style={styles.formInput}
        placeholder="Informe seu nome"
        keyboardType="default"
        autoCapitalize="none"
        autoComplete="name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput style={styles.formInput}
        placeholder="Informe seu sobrenome"
        keyboardType="default"
        autoCapitalize="none"
        autoComplete="name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput style={styles.formInput}
        placeholder="Informe seu username"
        keyboardType="default"
        autoCapitalize="none"
        autoComplete="name"
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
        onPress={handleRegister}
      >
        <Text style={styles.textButton}>cadastrar</Text>
      </Pressable>
    
     
    </View>
    );
  }
