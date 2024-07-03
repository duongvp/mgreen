import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { IdataAcc } from '../home/DashBoard';

export const TotalUserPieChart = ({ item }: { item: IdataAcc }) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxShadow}>
        <Text style={[styles.text, styles.title]}>{item.title}</Text>
        <Text style={[styles.text, styles.quantity]}>{item.quantity}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  boxShadow: {
    height: 100,
    borderRadius: 7,
    display: "flex",
    gap: 20,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 3 },
        backgroundColor: 'white',
        shadowOpacity: 0.2,
        shadowRadius: 7,
      },
      android: {
        elevation: 6, // Increase elevation to make the shadow more visible
      },
    }),
  },
  title: {
    paddingTop: 10,
    fontSize: 15,
    fontWeight: 500
  },
  text: {
    textAlign: "center"
  },
  quantity: {
    fontSize: 18
  }
});