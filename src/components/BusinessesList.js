import React from "react"
import { Text, View, StyleSheet, FlatList } from "react-native"
import BusinessDetails from "./BusinessDetails"

const BusinessesList = ({ title, businesses }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title} </Text>
      {/* <Text>
        Number or {title} Businesses: {businesses.length}
      </Text> */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={businesses}
        keyExtractor={business => business.id}
        renderItem={({ item }) => (
          <BusinessDetails details={item}></BusinessDetails>
        )}
      ></FlatList>
    </View>
  )
}
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 5
  }
})
export default BusinessesList
