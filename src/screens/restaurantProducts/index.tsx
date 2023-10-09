import React, { useContext } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import {styles} from './styles'

export default function RestaurantProducts({navigation}) {
    const {restaurantProducts} = useContext(AuthContext)
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View>
                <Pressable style={styles.formButton} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.textButton}>HOME</Text>
                </Pressable>
                <Pressable style={styles.formButton}>
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
