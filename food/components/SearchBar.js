import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle} name="search" />
            <TextInput
                style={styles.inputStyle}
                value={term}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={newTerm => onTermChange(newTerm)}
                placeholder="Search"
                onEndEditing={() => onTermSubmit(term)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        // padding: 10,
        marginBottom: 15,
        height: 50,
        borderRadius: 15,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar