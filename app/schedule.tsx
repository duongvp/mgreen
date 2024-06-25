import React, { useState } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { DatePickerCustom } from '@/components/DatePickerCustom';
import { FormatTimeUtil } from '@/utils/FormatTimeUtil';
import { houseHoldService } from '@/service/houseHold';
import ModalCustom from '@/components/popup/Modal';

export type selectDate = Date | undefined

export default function Page() {
    const currentDate = new Date()
    const [quantity, setQuantity] = useState('1');
    const [startTime, setStartTime] = useState<selectDate>(currentDate);
    const [endTime, setEndTime] = useState<selectDate>(new Date(currentDate.getTime() + 3600000));
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [contentPopup, setContentPopup] = useState("")

    const showModal = () => {
        setModalVisible(true);
        setTimeout(() => {
            setModalVisible(false);
        }, 3000); // 3 seconds
    };

    const handleSechedule = async () => {
        try {
            if (startTime && endTime) {
                const body = {
                    date: new Date().toISOString(),
                    startTime: FormatTimeUtil.formatDateToTime(startTime),
                    endTime: FormatTimeUtil.formatDateToTime(endTime),
                    quantity: Number(quantity),
                    scheduleState: 0
                }
                const res = await houseHoldService.post(body)
                if (res.status == 200) {
                    setContentPopup("Đặt lịch thành công")
                } else {
                    setContentPopup("Đặt lịch thất bại")
                }
                showModal()
            }
        } catch (error) {
            setContentPopup("Đặt lịch thất bại")
            showModal()
        }
    }

    const handleQuantityChange = (text: any) => {
        if (/^\d*$/.test(text)) {
            setQuantity(text);
        }
    };

    const increaseQuantity = () => {
        setQuantity((prevQuantity) => (parseInt(prevQuantity) + 1).toString());
    };

    const decreaseQuantity = () => {
        setQuantity((prevQuantity) => {
            const newQuantity = parseInt(prevQuantity) - 1;
            return newQuantity >= 0 ? newQuantity.toString() : '0';
        });
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={[styles.label, styles.margin]}>Lựa chọn thời gian</Text>
            <SafeAreaView style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingRight: 10 }}>
                    <Text style={[styles.label]}>Từ:</Text>
                    {(startTime) && (
                        <DatePickerCustom date={startTime} setDate={setStartTime} />
                    )}
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Text style={[styles.label]}>Đến:</Text>
                    {(endTime) && (
                        <DatePickerCustom date={endTime} setDate={setEndTime} minimumDate={startTime} />
                    )}
                </View>
            </SafeAreaView>
            <View style={{ paddingTop: 10 }} >
                <Text style={[styles.label, styles.margin]}>Số lượng:</Text>
                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={decreaseQuantity} style={styles.button}>
                        <AntDesign name="minus" size={24} color="black" />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={quantity}
                        onChangeText={handleQuantityChange}
                        placeholder="Enter quantity"
                    />
                    <TouchableOpacity onPress={increaseQuantity} style={styles.button}>
                        <AntDesign name="plus" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.btnSubmit} onPress={handleSechedule}>
                <Text style={{ textAlign: "center", color: "#fff", fontSize: 17 }}>Đặt lịch</Text>
            </TouchableOpacity>
            <ModalCustom content={contentPopup} modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View >
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
    },
    margin: {
        marginBottom: 10,
        fontWeight: 700,

    },
    center: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        marginTop: 15
    },
    input: {
        height: 40,
        width: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 8,
        fontSize: 16,
        textAlign: 'center',
    },
    button: {
        paddingHorizontal: 10,
        backgroundColor: "#ccc",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    btnSubmit: {
        marginTop: 20,
        backgroundColor: "#81A263",
        width: 85,
        paddingVertical: 10,
        borderRadius: 5,
    }
})