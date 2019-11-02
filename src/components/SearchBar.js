import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Feather name='search' size={30}></Feather>
      <Text>Search Bar</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 10,
    margin: 15
  }
})
export default SearchBar
