import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet } from "react-native"
import SearchBar from "../components/SearchBar"
import yelp from "../services/httpServices"

const SearchScreen = () => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    searchApi()
  }, [])

  const searchApi = async searchQuery => {
    try {
      const response = await yelp.get("/search", {
        params: { limit: 50, term: searchQuery, location: "irvine" }
      })
      setResults(response.data.businesses)
    } catch (err) {
      setErrorMessage("Oops! Something went wrong")
    }
  }

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
