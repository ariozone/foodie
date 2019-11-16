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
      <View style={styles.searchStyles}>
        <SearchBar
          query={query}
          onQueryChange={setQuery}
          onSubmit={() => searchApi(query)}
        ></SearchBar>
      </View>
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <ScrollView>
          <View style={styles.BusinessesListStyles}>
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
  // searchStyles: { backgroundColor: "#B8ECFF" },
  // BusinessesListStyles: { backgroundColor: "#B8ECFF" }
})
export default SearchScreen
