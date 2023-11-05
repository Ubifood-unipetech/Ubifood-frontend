import React, { useContext, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from './styles';
import axios from "axios";
import { AuthContext } from '../../contexts/auth'
import { Image } from "react-native";

export default function Registration({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const { registration } = useContext(AuthContext)
  function handleRegister() {
    registration(name, lastName, username, password)
  }
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/register_image.png")} style={styles.image}></Image>
      <Text style={styles.formTitle}>Vamos começar!</Text>
      <TextInput style={styles.formInput}
        placeholder="Nome"
        keyboardType="default"
        autoCapitalize="none"
        autoComplete="name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput style={styles.formInput}
        placeholder="Sobrenome"
        keyboardType="default"
        autoCapitalize="none"
        autoComplete="name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput style={styles.formInput}
        placeholder="Nome de usuário"
        keyboardType="default"
        autoCapitalize="none"
        autoComplete="name"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput style={styles.formInput}
        placeholder="Senha"
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

      <Pressable
        style={styles.subButton}
        onPress={() => navigation.navigate('SignIn')}
      >
        <Text style={styles.subTextButton}>Já possui uma conta? Clique aqui</Text>
      </Pressable>
    </View>
  );
}
