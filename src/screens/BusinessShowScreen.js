import React from "react"
import { View, Image, Text, StyleSheet, FlatList } from "react-native"
import yelp from "../services/httpServices"

import MapView, { Marker } from "react-native-maps"

const BusinessShowScreen = ({ navigation }) => {
  const [business, setBusiness] = React.useState(null)
  const id = navigation.getParam("id")

  const getBusiness = async businessId => {
    const response = await yelp.get("/" + businessId)
    setBusiness(response.data)
  }

  React.useEffect(() => {
    getBusiness(id)
  }, [id])

  if (!business) return null
  const { latitude, longitude } = business.coordinates
  return (
    <View style={styles.businessStyles}>
      <Text style={styles.textStyles}>{business.name}</Text>
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
      <MapView
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        style={styles.mapStyles}
      >
        <Marker
          coordinate={{ latitude, longitude }}
          title={business.name}
          description={business.is_closed ? "Closed" : "Open"}
        />
      </MapView>
    </View>
  )
}
const styles = StyleSheet.create({
  businessStyles: {
    alignItems: "center",

    backgroundColor: "black"
  },
  textStyles: {
    fontSize: 20,
    color: "white",
    marginVertical: 10
  },
  imageStyles: {
    height: 200,
    width: 350,
    margin: 5
  },
  mapStyles: {
    width: "100%",
    height: 400,
    margin: 5
  }
})
export default BusinessShowScreen
