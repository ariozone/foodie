import React, { useState } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import SearchBar from "../components/SearchBar"
import useBusinesses from "../hooks/useBusinesses"
import BusinessesList from "../components/BusinessesList"

const SearchScreen = () => {
  const [query, setQuery] = useState("")
  const [searchApi, results, errorMessage] = useBusinesses()

  const filterByPrice = price => {
    return results.filter(result => result.price === price)
  }
  return (
    <>
      <SearchBar
        style={styles.searchStyle}
        query={query}
        onQueryChange={setQuery}
        onSubmit={() => searchApi(query)}
      ></SearchBar>
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <ScrollView>
          <View>
            <BusinessesList
              businesses={filterByPrice("$")}
              title='$'
            ></BusinessesList>
            <BusinessesList
              businesses={filterByPrice("$$")}
              title='$$'
            ></BusinessesList>
            <BusinessesList
              businesses={filterByPrice("$$$")}
              title='$$$'
            ></BusinessesList>
            <BusinessesList
              businesses={filterByPrice("$$$$")}
              title='$$$$'
            ></BusinessesList>
          </View>
        </ScrollView>
      )}
    </>
  )
}
const styles = StyleSheet.create({
  searchStyles: {}
})
export default SearchScreen
