import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from './styles';
import { Image } from "react-native";


import { AuthContext } from '../../contexts/auth';

export default function SignIn({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext)

  function handleLogin() {
    signIn(username, password)
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/login_image.png")} style={styles.image}></Image>
      <Text style={styles.formTitle}>Bem-vindo de volta!</Text>
      <TextInput style={styles.formInput}
        placeholder="Nome de usuário"
        keyboardType="default"
        autoCapitalize="none"
        autoComplete="username"
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
        onPress={handleLogin}
      >
        <Text style={styles.textButton}>logar</Text>
      </Pressable>
      <View style={styles.subContainer}>
        {/* <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>esqueci minha senha</Text>
        </Pressable> */}
        <Pressable
          style={styles.subButton}
          onPress={() => navigation.navigate('Registration')}
        >
          <Text style={styles.subTextButton}>É novo aqui? Cadastre-se</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

