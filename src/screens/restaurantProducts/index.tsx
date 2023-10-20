import React, { useContext } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import {styles} from './styles'

export default function RestaurantProducts({navigation}) {
    const {restaurantProducts} = useContext(AuthContext)

    function showOnMap(){
        return  navigation.push('Home')
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <Pressable style={styles.formButton} onPress={showOnMap}>
                    <Text style={styles.textButton}>Mostrar no mapa</Text>
                </Pressable>
            </View>
            <Text>PRODUTOS</Text>
            <FlatList
            data={restaurantProducts}
            renderItem={({item}) => <Text>{item.desc}</Text>}
            keyExtractor={item => item.id}
            />
        </View>
    );
}
