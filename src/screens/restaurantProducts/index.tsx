import React, { useContext } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { styles } from './styles'

export default function RestaurantProducts({ navigation }) {
    const { restaurantProducts } = useContext(AuthContext)

    function showOnMap() {
        return navigation.push('Home')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.formButton} onPress={showOnMap}>
                    <Text style={styles.textButton}>Mostrar no mapa</Text>
                </Pressable>
            </View>
            <Text style={styles.productsTitle}>PRODUTOS</Text>
            <FlatList
                data={restaurantProducts}
                renderItem={({ item }) => 
                <View style={styles.itemContainer}>
                    <Text style={styles.itemLabel}>{item.label}</Text>
                    <Text style={styles.itemDesc}>{item.desc}</Text>
                
                </View>}
                
                keyExtractor={item => item.id}
            />
        </View>
    );
}