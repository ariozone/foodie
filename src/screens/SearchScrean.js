import React from "react"
import { View, Text, StyleSheet } from "react-native"
import SearchBar from "../components/SearchBar"

const SearchScreen = () => {
  const [query, setQuery] = React.useState("")
  return (
    <View>
      <SearchBar
        query={query}
        onQueryChange={input => setQuery(input)}
      ></SearchBar>
      <Text>Searching for: {query}</Text>
    </View>
  )
}
const Styles = StyleSheet.create({})
export default SearchScreen
