import React from "react"
import { View, Image, Text, StyleSheet } from "react-native"
import yelp from "../services/httpServices"

const BusinessShowScreen = ({ navigation }) => {
  const [business, setBusiness] = React.useState(null)
  const id = navigation.getParam("id")
  const getBusiness = async id => {
    const response = await yelp.get("/" + id)
    setBusiness(response.data)
  }
  React.useEffect(() => {
    getBusiness(id), []
  })
  return (
    <View>
      <Text>BusinessShowScreen: {business && business.name} </Text>
    </View>
  )
}
const styles = StyleSheet.create({})
export default BusinessShowScreen
