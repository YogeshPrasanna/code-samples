import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import zomato from "./../api/zomato"

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null)
    const [photos, setPhotos] = useState(null)

    //console.log(result)

    const getResult = async (id) => {
        try {
            const response = await zomato.get(`/restaurant`, {
                params: {
                    res_id: id,
                }
            });
            setResult(response.data)
            setPhotos(response.data.photos)

            // console.log('hey', resutls)
            //setErrorMessage('')
        } catch (err) {
            //setErrorMessage('something went wrong')
        }
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        return null
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={photos}
                keyExtractor={(elem) => elem.photo.id}
                renderItem={(item) => {
                    console.log(item)
                    return <Image style={styles.image} source={{ uri: item.item.photo.url }} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: 250,
        borderRadius: 5,
        marginBottom: 5
    },

});

export default ResultsShowScreen