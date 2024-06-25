import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Modal, Button, StyleSheet, TouchableOpacity } from 'react-native';

interface IProps {
    content: string
    modalVisible: boolean,
    isSuccessCreate: boolean,
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalCustomRole = ({ content, modalVisible, isSuccessCreate, setModalVisible }: IProps) => {
    const onPress = () => {
        router.push("/home")
        setModalVisible(!modalVisible)
    }
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{content}</Text>
                        {isSuccessCreate ?
                            (<TouchableOpacity
                                style={styles.button}
                                onPress={onPress}
                            >
                                <Text style={styles.textStyle}>Go to HomeScreen</Text>
                            </TouchableOpacity>) : <View></View>}
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: '#ddd',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default ModalCustomRole
