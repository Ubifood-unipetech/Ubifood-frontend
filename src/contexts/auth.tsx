import React, {createContext, useState} from "react";
import {useNavigation} from '@react-navigation/native'
import axios from "axios"; // Importe o axios

export const AuthContext = createContext({})

function AuthProvider({children}){

    const [user, setUser] = useState();
    const navigation = useNavigation();

    function signIn(username, password){
        if (username !== "" && password !== ""){
            setUser({
                username: username,
                status: 'ATIVO',
            })
            navigation.navigate('Home')
        }else{
            alert('OPA OPA OPA\ntem que digitar o username e a senha meu patrao')
        }
    }
    return(
        <AuthContext.Provider value={{nome: 'FULANO FRAGA', signIn, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;