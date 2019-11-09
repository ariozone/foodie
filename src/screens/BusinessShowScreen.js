import React from "react"
import { View, Image, Text, StyleSheet } from "react-native"

const BusinessShowScreen = ({ navigation }) => {
  return (
    <View>
      <Text>BusinessShowScreen: {navigation.getParam("id")} </Text>
    </View>
  )
}
const styles = StyleSheet.create({})
export default BusinessShowScreen
