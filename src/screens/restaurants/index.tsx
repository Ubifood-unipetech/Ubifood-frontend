import React, { useContext } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { AuthContext } from '../../contexts/auth';



function Item ({id, name, coordinates}: ItemProps) {
    const {detailRestaurantProducts} = useContext(AuthContext)
    const {mapRegion, setMapRegion} = useContext(AuthContext);
    return (
    <View>
        <Pressable onPress={() => {
             setMapRegion({
                latitude: coordinates[1],
                longitude: coordinates[0],
                latitudeDelta: 0.0070,
                longitudeDelta: 0.0070,
            });
            detailRestaurantProducts(id)
            }}>
            <Text>{name}</Text>
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
            renderItem={({item}) => <Item id={item.id} name={item.name} coordinates={item.coordinates.coordinates}/>}
            keyExtractor={item => item.id}
            />
        </View>
    );
}
