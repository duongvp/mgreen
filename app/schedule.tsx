import React, { useState } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FormatTimeUtil } from '@/utils/FormatTimeUtil';
import { houseHoldService } from '@/service/houseHold';
import ModalCustom from '@/components/popup/Modal';
import { TimePicker } from '@/components/TimePicker';
import { DatePickerCustom } from '@/components/DatePickerCustom';

export type selectDate = Date | undefined

export default function Page() {
    const currentDate = new Date()
    const [quantity, setQuantity] = useState('1');
    const [startTime, setStartTime] = useState<selectDate>(currentDate);
    const [date, setDate] = useState<selectDate>(currentDate);
    const [endTime, setEndTime] = useState<selectDate>(new Date(currentDate.getTime() + 3600000));
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [contentPopup, setContentPopup] = useState("")

    const showModal = () => {
        setModalVisible(true);
        setTimeout(() => {
            setModalVisible(false);
        }, 3000); // 3 seconds
    };

    function convertToLocalTime(timestamp: number): Date {
        // Create a new Date object using the timestamp
        const date = new Date(timestamp * 1000); // Convert to milliseconds

        // Return the local date
        return date;
    }

    const handleSechedule = async () => {
        try {
            if (startTime && endTime) {
                const body = {
                    date: date,
                    startTime: FormatTimeUtil.formatDateToTime(startTime),
                    endTime: FormatTimeUtil.formatDateToTime(endTime),
                    quantity: Number(quantity),
                    scheduleState: 0
                }
                const res = await houseHoldService.post(body)
                if (res.status == 200) {
                    setContentPopup("Scheduled successfully")
                } else {
                    setContentPopup("Scheduled failed")
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
            <Text style={[styles.label, styles.margin]}>Choose time</Text>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingRight: 10, marginBottom: 10 }}>
                <Text style={[styles.label]}>Date:</Text>
                <DatePickerCustom date={date} setDate={setDate} />
            </View>
            <SafeAreaView style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingRight: 10 }}>
                    <Text style={[styles.label]}>From:</Text>
                    {(startTime) && (
                        <TimePicker date={startTime} setDate={setStartTime} />
                    )}
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Text style={[styles.label]}>To:</Text>
                    {(endTime) && (
                        <TimePicker date={endTime} setDate={setEndTime} minimumDate={startTime} />
                    )}
                </View>
            </SafeAreaView>
            <View style={{ height: 1, width: "100%", backgroundColor: "#ccc", marginVertical: 24 }}></View>
            <View>
                <Text style={[styles.label, styles.margin]}>
                    Weight(Kg):</Text>
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
                <Text style={{ textAlign: "center", color: "#fff", fontSize: 17 }}>Order</Text>
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
        marginBottom: 6,
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
        marginTop: 12
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