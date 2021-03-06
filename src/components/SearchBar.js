import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"

const SearchBar = ({ query, onQueryChange, onSubmit }) => {
  return (
    <View style={styles.background}>
      <Feather name='search' style={styles.iconStyle}></Feather>
      <TextInput
        placeholder='Search'
        style={styles.inputStyle}
        value={query}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={onQueryChange}
        onEndEditing={onSubmit}
      ></TextInput>
    </View>
  )
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 10,
    margin: 15,
    flexDirection: "row"
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    marginHorizontal: 15,
    alignSelf: "center"
  }
})
export default SearchBar
