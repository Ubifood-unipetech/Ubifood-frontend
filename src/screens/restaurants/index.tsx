import React, { useContext } from 'react';
import { FlatList, Pressable, Text, View, Image } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { styles } from './styles';



function Item({ id, name, coordinates, banner }: ItemProps) {
    const { detailRestaurantProducts } = useContext(AuthContext)
    const { mapRegion, setMapRegion } = useContext(AuthContext);
    return (
        <View>
            <Pressable
                style={styles.itemContainer}
                onPress={() => {
                    setMapRegion({
                        latitude: coordinates[1],
                        longitude: coordinates[0],
                        latitudeDelta: 0.0070,
                        longitudeDelta: 0.0070,
                    });
                    detailRestaurantProducts(id);
                }}
            >
                <Image source={ banner ? {uri: banner} : require("../../assets/restaurant_default_icon.png")} style={styles.image}></Image>
                <Text style={styles.itemTitle}>{name}</Text>
            </Pressable>
        </View>
    )
}

export default function Restaurants() {
    const { pesqRestaurants } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Resultados</Text>
            </View>


            <FlatList
                data={pesqRestaurants}
                renderItem={({ item }) => <Item id={item.id} name={item.name} coordinates={item.coordinates.coordinates} banner={item.banner} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
