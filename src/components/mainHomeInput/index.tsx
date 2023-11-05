import React, { useState, useContext } from 'react';
import { TextInput, View, StyleSheet, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/auth'

const MainHomeInput = (onUpdate) => {
    const { searchRestaurants } = useContext(AuthContext)
    const [text, setText] = useState('');

    const handleSearch = () => {
        searchRestaurants(text)
    };

    return (
        <SafeAreaView >
            <View style={styles.searchContainer}>
                <Ionicons
                    name="search"
                    size={24}
                    color="black"
                    onPress={handleSearch}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={setText}
                    value={text}
                    placeholder="Busque por um restaurante"
                />
            </View>
        </SafeAreaView>
    );
};

export default MainHomeInput;
