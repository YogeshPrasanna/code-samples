import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, } from 'react-native'
import ResutlsDetail from './ResultsDetail'
import { withNavigation } from 'react-navigation'

const ResultsList = ({ title, results, navigation }) => {

    if (!results.length) {
        return null;
    }
    //console.log("Results", results)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {/* <Text>
                {results[0].name}
            </Text> */}
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={(elem) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Results', { id: elem.item.id })}>
                            <ResutlsDetail result={elem.item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    container: {
        marginBottom: 25
    }
})

export default withNavigation(ResultsList)