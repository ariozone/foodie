import React from "react"
import { View, Image, Text, StyleSheet, FlatList } from "react-native"
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
  if (!business) return null
  return (
    <View style={styles.businessStyles}>
      <Text style={styles.textStyles}>{business.name} </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={business.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return (
            <Image source={{ uri: item }} style={styles.imageStyles}></Image>
          )
        }}
      ></FlatList>
    </View>
  )
}
const styles = StyleSheet.create({
  businessStyles: {
    alignItems: "center",
    marginTop: 10
  },
  textStyles: {
    fontSize: 18
  },
  imageStyles: {
    height: 200,
    width: 300,
    margin: 5
  }
})
export default BusinessShowScreen
