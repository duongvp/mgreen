import { deliveryStaffService } from '@/service/deliveryStaff';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Modal, Button, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

interface IProps {
    modalVisible: boolean,
    idOrder: any,
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalQuantity = ({ modalVisible, idOrder, setModalVisible }: IProps) => {
    const [quantity, setQuantity] = useState('1');

    const onPress = async () => {
        const res = await deliveryStaffService.patchConfirmReceiveSchedule(idOrder, quantity)
        setModalVisible(!modalVisible)
    }
    const handleQuantityChange = (text: any) => {
        if (/^\d*$/.test(text)) {
            setQuantity(text);
        }
    };
    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Confirm actual quantity (kg)</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            value={quantity}
                            onChangeText={handleQuantityChange}
                            placeholder="Enter quantity"
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={onPress}
                        >
                            <Text style={styles.textStyle}>Confirm</Text>
                        </TouchableOpacity>
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
    input: {
        height: 40,
        width: 60,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 8,
        fontSize: 16,
        marginBottom: 15,
        textAlign: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: '#fff',
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
        fontWeight: "600",
        textAlign: 'center',
    },
});

export default ModalQuantity
