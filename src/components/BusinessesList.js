import React from "react"
import { Text, View, StyleSheet, FlatList } from "react-native"

const BusinessesList = ({ title, businesses }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title} </Text>
      <Text>
        Number or {title} Businesses: {businesses.length}
      </Text>
      <FlatList
        horizontal
        data={businesses}
        keyExtractor={business => business.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      ></FlatList>
    </View>
  )
}
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green"
  }
})
export default BusinessesList
