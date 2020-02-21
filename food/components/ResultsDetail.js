import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.featured_image || result.thumb }} />
            <Text style={styles.name}>
                {result.name}
            </Text>
            <Text>{result.user_rating.aggregate_rating} stars , {result.user_rating.votes} reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 10
    },
    image: {
        height: 150,
        width: 250,
        borderRadius: 5,
        marginBottom: 5
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default ResultsDetail