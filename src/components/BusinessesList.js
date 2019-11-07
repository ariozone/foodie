import React from "react"
import { Text, View, StyleSheet } from "react-native"

const BusinessesList = ({ title, businesses }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title} </Text>
      <Text>
        Number or {title} Businesses: {businesses.length}
      </Text>
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
