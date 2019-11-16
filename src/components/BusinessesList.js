import React from "react"
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native"
import { withNavigation } from "react-navigation"
import BusinessDetails from "./BusinessDetails"

const BusinessesList = ({ title, businesses, navigation }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{businesses.length > 0 && title} </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={businesses}
        keyExtractor={business => business.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("BusinessShow", { id: item.id })}
          >
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
export default withNavigation(BusinessesList)
