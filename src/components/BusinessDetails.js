import React from "react"
import { View, StyleSheet, Text, Image } from "react-native"

const BusinessDetails = ({ details }) => {
  return (
    <View>
      <Image
        style={styles.imageStyles}
        source={{ uri: details.image_url }}
        title={details.name}
      ></Image>
      <Text style={styles.nameStyles}>{details.name}</Text>
      <Text style={styles.reviewStyles}>
        {details.rating} Stars, {details.review_count} Reviews
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  imageStyles: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginHorizontal: 5
  },
  nameStyles: {
    fontWeight: "bold"
  },
  reviewStyles: {
    color: "gray"
  }
})
export default BusinessDetails
