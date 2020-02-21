import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import SearchBar from './../components/SearchBar'
import zomato from '../api/zomato'
import useResults from '../hooks/useResults'
import ResultsList from "./../components/ResultsList"

const SearchScreen = () => {

    // console.log(props)
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        let maxCost = 0;
        let minCost = 0;
        if (price == '$') {
            minCost = 0;
            maxCost = 800;
        } else if (price == '$$') {
            minCost = 801;
            maxCost = 1700;
        } else {
            minCost = 1701;
            maxCost = 9000;
        }
        //console.log(results.filter(elem => (elem.restaurant.average_cost_for_two >= minCost && elem.restaurant.average_cost_for_two <= maxCost)).map(elem => elem.restaurant))
        return results.filter(elem => (elem.restaurant.average_cost_for_two >= minCost && elem.restaurant.average_cost_for_two <= maxCost)).map(elem => elem.restaurant)
    }

    // console.log("Results: ", results.filter(elem => elem.restaurant.average_cost_for_two <= 400).length)

    if (results && results.length) {
        return (
            <View style={styles.container}>
                <SearchBar
                    term={term}
                    onTermChange={(newTerm) => setTerm(newTerm)}
                    onTermSubmit={searchApi}
                />
                {errorMessage ? <Text>{errorMessage}</Text> : null}
                <ScrollView>
                    <ResultsList
                        title="Cost Effective"
                        results={filterResultsByPrice('$')}
                    />
                    <ResultsList
                        title="Bit Pricier"
                        results={filterResultsByPrice('$$')}
                    />
                    <ResultsList
                        title="Big Spender"
                        results={filterResultsByPrice('$$$')}
                    />
                </ScrollView>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <Text>Laoding</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        flex: 1
    }
})

export default SearchScreen