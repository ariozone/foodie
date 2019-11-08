import React from "react"
import { View, StyleSheet, Text, Image } from "react-native"

const BusinessDetails = ({ details }) => {
  return (
    <View style={styles.container}>
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
    marginBottom: 5
  },
  nameStyles: {
    fontWeight: "bold"
  },
  reviewStyles: {
    color: "gray"
  },
  container: {
    marginLeft: 10
  }
})
export default BusinessDetails
