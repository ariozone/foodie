import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import SearchBar from "../components/SearchBar"
import yelp from "../services/httpServices"

const SearchScreen = () => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: { limit: 50, term: query, location: "irvine" }
    })
    setResults(response.data.businesses)
  }

  return (
    <View>
      <SearchBar
        query={query}
        onQueryChange={setQuery}
        onSubmit={searchApi}
      ></SearchBar>
      <Text>Found {results.length} restaurants.</Text>
    </View>
  )
}
const Styles = StyleSheet.create({})
export default SearchScreen
