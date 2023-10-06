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

    function logout(user){
        const url = `${baseUrl}/api/logout/`;

        const headers = {
        Authorization: `Bearer ${user.access}`,
        };

        axios
        .delete(url, { headers })
        .then((response) => {
            console.log(`Logout bem-sucedido! tchau ${user.username}`, response.data);
            navigation.navigate('SignIn')
            alert(`até breve ${user.username} 👋`)
        })
        .catch((error) => {
            console.error("Erro ao fazer logout:", error);
        });
    
    }

    async function registration(name, lastName, username, pass){
        try {
            const url = `${baseUrl}/api/register/`;
            const userData = {
              username: username,
              first_name: name,
              last_name: lastName,
              password: pass,
            };
            const response = await axios.post(url, userData);
            console.log("Cadastro bem-sucedido!", response.data);
      
            // Redireciona o usuário para a tela de login ou executa outras ações necessárias
            navigation.navigate('SignIn');
      
            // Exibe uma mensagem para o usuário
            alert('Cadastro bem-sucedido! Faça login para continuar.');
          } catch (error) {
            // Lida com erros, se ocorrerem
            console.error("Erro ao fazer cadastro:", error);
            alert('Erro ao fazer cadastro. Tente novamente mais tarde.');
          }
    }

    async function searchRestaurants(text){
        const response = await axios.get(`${baseUrl}/api/restaurants`);
        // Selecione apenas o campo results
        const results = response.data.results.map((result) => result);
        const filteredResults = results.filter((result) => result.name.startsWith(text));
        console.log(filteredResults);
    }

    return(
        <AuthContext.Provider value={{signIn, user, logout, registration, searchRestaurants}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;