import React from "react"
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native"
import BusinessDetails from "./BusinessDetails"

const BusinessesList = ({ title, businesses, navigation }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{businesses.length > 0 && title} </Text>
      {/* <Text>
        Number or {title} Businesses: {businesses.length}
      </Text> */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={businesses}
        keyExtractor={business => business.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("BusinessShow")}>
            <BusinessDetails details={item}></BusinessDetails>
          </TouchableOpacity>
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
