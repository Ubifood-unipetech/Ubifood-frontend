import React, { useState, useContext } from 'react';
import { TextInput, View, StyleSheet, SafeAreaView } from 'react-native';
import {styles} from './styles';
import { Ionicons } from '@expo/vector-icons';
import {AuthContext} from '../../contexts/auth'

const MainHomeInput = () => {
    const {searchRestaurants} = useContext(AuthContext)
    const [text, setText] = useState('');

    const handleSearch = () => {
        // Handle searching with the text input
        console.log(`Searching for text: ${text}`);
        searchRestaurants(text)
    };

    return (
        <SafeAreaView >
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={setText}
                    value={text}
                    placeholder="Search"
                />
                <Ionicons
                    name="search"
                    size={24}
                    color="black"
                    onPress={handleSearch}
                />
            </View>
        </SafeAreaView>
    );
};

export default MainHomeInput;
