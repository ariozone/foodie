import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import SearchBar from "../components/SearchBar"
import useBusinesses from "../hooks/useBusinesses"
import BusinessesList from "../components/BusinessesList"

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
        <View>
          <Text>Found {results.length} restaurants.</Text>

          <BusinessesList title='$'></BusinessesList>
          <BusinessesList title='$$'></BusinessesList>
          <BusinessesList title='$$$'></BusinessesList>
        </View>
      )}
    </View>
  )
}
const Styles = StyleSheet.create({})
export default SearchScreen
