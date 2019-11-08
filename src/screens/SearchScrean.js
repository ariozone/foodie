import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
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
      )}
    </View>
  )
}
const Styles = StyleSheet.create({
  container: {
    marginHorizontal: 10
  }
})
export default SearchScreen
