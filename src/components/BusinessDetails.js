import React from "react"
import { View, StyleSheet, Text, Image } from "react-native"

const BusinessDetails = ({ details }) => {
  return (
    <View>
      <Text>{details.name}</Text>
    </View>
  )
}
const styles = StyleSheet.create({})
export default BusinessDetails
