import React, {createContext, useState} from "react";
import {useNavigation} from '@react-navigation/native'
import axios from "axios";
export const AuthContext = createContext({})

const baseUrl = process.env.BASEURL

function AuthProvider({children}){

    const [user, setUser] = useState();
    const navigation = useNavigation();

    async function signIn(username, password){
        try{
            if (username !== "" && password !== ""){
                const response = await axios.post(`${baseUrl}/api/login/`, {
                    username: username,
                    password: password,
                });
                console.log(`data => ${JSON.stringify(response.data)}`)
                const { access } = response.data;
                if (access) {
                    setUser({
                    username: username,
                    status: 'ATIVO',
                    access: access, // Armazene o token JWT
                    });
                    navigation.navigate('Home');
                } else {
                    alert('Falha na autenticação. Verifique suas credenciais.');
                }
            }else{
                alert('OPA OPA OPA\ntem que digitar o username e a senha meu patrao')
            }
        }catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Erro ao fazer login. Tente novamente mais tarde.');
        }
    }

    return(
        <AuthContext.Provider value={{signIn, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;