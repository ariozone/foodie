import React from "react"
import { Text, View, StyleSheet } from "react-native"

const BusinessesList = ({ title }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title} Businesses</Text>
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
