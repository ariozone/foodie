import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"
import SearchBar from "../components/SearchBar"
import useBusinesses from "../hooks/useBusinesses"

const SearchScreen = () => {
  const [query, setQuery] = useState("")
  const [searchApi, results, errorMessage] = useBusinesses()

  return (
    <View>
      <SearchBar
        query={query}
        onQueryChange={setQuery}
        onSubmit={() => searchApi(query)}
      ></SearchBar>
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <Text>Found {results.length} restaurants.</Text>
      )}
    </View>
  )
}
const Styles = StyleSheet.create({})
export default SearchScreen
