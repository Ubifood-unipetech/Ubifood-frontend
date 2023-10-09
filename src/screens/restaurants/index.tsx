import React, { useContext } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { AuthContext } from '../../contexts/auth';



function Item ({id, restaurant}: ItemProps) {
    const {detailRestaurantProducts} = useContext(AuthContext)
    return (
    <View>
        <Pressable onPress={() => {
            console.log(`id: ${id} - restaurante: ${restaurant}`)
            detailRestaurantProducts(id)
            }}>
            <Text>{restaurant}</Text>
        </Pressable>
    </View>
)
}

export default function Restaurants() {
    const {pesqRestaurants} = useContext(AuthContext)
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>RESTAURANTES</Text>
            <FlatList
            data={pesqRestaurants}
            renderItem={({item}) => <Item id={item.id} restaurant={item.name}/>}
            keyExtractor={item => item.id}
            />
        </View>
    );
}
