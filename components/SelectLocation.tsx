import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const SelectLocation = () => {
    return (
        <View style={[styles.userText, styles.address]}>
            <Text>Phường / Xã</Text>
            <Text>Hà Giang1</Text>
            <AntDesign name="caretdown" size={20} color="#898989" />
        </View>
    )
}

const styles = StyleSheet.create({
    userText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingStart: 10,
        paddingVertical: 15
    },
    address: {
        justifyContent: 'space-between'
    }
});
