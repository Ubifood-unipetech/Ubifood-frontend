import React, { useContext } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { styles } from './styles'

export default function RestaurantProducts({ navigation, route }) {
    const { restaurantProducts } = useContext(AuthContext)
    const selectedRestaurant = route.params.restaurantData
    
    function showOnMap() {
        return navigation.push('Home')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.restaurantTitle}>{selectedRestaurant.name}</Text>
                <Text style={styles.productsTitle}>Cardápio</Text>
            </View>
            <FlatList
                data={restaurantProducts}
                renderItem={({ item }) =>
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemLabel}>{item.label}</Text>
                        <Text style={styles.itemDesc}>{item.desc}</Text>
                        <Text style={styles.ItemPrice}>R$ {item.price}</Text>
                    </View>}
                keyExtractor={item => item.id}
            />

            <View style={styles.buttonContainer}>
                <Pressable style={styles.formButton} onPress={showOnMap}>
                    <Text style={styles.textButton}>Ver no mapa</Text>
                </Pressable>
            </View>
        </View>
    );
}
