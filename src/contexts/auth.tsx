import React, {createContext, useState, useEffect} from "react";
import {useNavigation} from '@react-navigation/native'
import axios from "axios";
export const AuthContext = createContext({})

const baseUrl = process.env.BASEURL

function AuthProvider({children}){

    const [user, setUser] = useState();
    const navigation = useNavigation();
    const [pesqRestaurants, setPesqRestaurants] = useState([]);
    const [restaurantProducts, setRestaurantProducts] = useState([]);
    const [location, setLocation] = useState([]);
    const [mapRegion, setMapRegion] = useState([]);


    async function signIn(username, password){
        try{
            if (username !== "" && password !== ""){
                const response = await axios.post(`${baseUrl}/api/login/`, {
                    username: username,
                    password: password,
                });
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

    async function searchRestaurants(text: string){
        const response = await axios.get(`${baseUrl}/api/restaurants?filter="name__icontains":"${text}"`);
        setPesqRestaurants(response.data.results);
        navigation.navigate('Restaurants')
    }

    async function detailRestaurantProducts(restaurantId: number){
        const response = await axios.get(`${baseUrl}/api/products?filter="restaurant":${restaurantId}/`);
        setRestaurantProducts(response.data.results)
        navigation.navigate('RestaurantProducts')
    }

    return(
        <AuthContext.Provider value={{signIn, user, setMapRegion, mapRegion, location, setLocation, logout, registration, searchRestaurants, pesqRestaurants, detailRestaurantProducts, restaurantProducts}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;