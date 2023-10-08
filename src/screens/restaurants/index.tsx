import React, { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import { AuthContext } from '../../contexts/auth';


const Item = ({restaurant}: ItemProps) => (
    <View>
      <Text>{restaurant}</Text>
    </View>
);

export default function Restaurants() {
    const {pesqRestaurants} = useContext(AuthContext)
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>RESTAURANTES</Text>
            <FlatList
            data={pesqRestaurants}
            renderItem={({item}) => <Item restaurant={item.name} />}
            keyExtractor={item => item.id}
            />
        </View>
    );
}
