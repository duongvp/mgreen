import { StyleSheet, Image, Platform, View, Text, TextInput, TouchableOpacity, Button, ScrollView, RefreshControl } from 'react-native';
import { ItemStatus } from './ItemStatus';
import React, { useEffect, useState } from 'react';
import { houseHoldService } from '@/service/houseHold';
import { ScheduleStateType } from '@/constant/schedule';
import useInforUserStore from '@/store/useStoreUser';
import { UserRole } from '@/constant/user';
import { deliveryStaffService } from '@/service/deliveryStaff';
import { StaffService } from '@/service/staff';
import ModalQuantity from '../popup/ModalQuantity';

export default function DeliveryAcceptedScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [idOrder, setIdOrder] = useState(false)
    const role = useInforUserStore((state: any) => state.role);
    const [arr, setArr] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 500);
    }, []);

    useEffect(() => {
        const fetchApi = async () => {
            let res
            if (role == UserRole.HouseHold) {
                res = await houseHoldService.get(ScheduleStateType.DeliveryAccepted)
            } else if (role == UserRole.DeliveryStaff) {
                res = await deliveryStaffService.get(ScheduleStateType.DeliveryAccepted)
            } else if (role == UserRole.CollectorStaff) {
                res = await StaffService.get(ScheduleStateType.DeliveryAccepted)
            }
            const data = await res.json();
            setArr(data)
        }
        !modalVisible && fetchApi()
    }, [refreshing, modalVisible])

    const handleDeliveryStaffAccept = async (id: any) => {
        setIdOrder(id)
        setModalVisible(true)
    }

    return (
        <ScrollView refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
            <View style={styles.container}>
                {
                    arr.map((item: any, index) => (
                        <View key={index}>
                            <View style={styles.content}>
                                <ItemStatus style={styles.titleStatus} title="Confirm" item={item} />
                                {/* {
                                    role == UserRole.DeliveryStaff && (
                                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", paddingBottom: 10, paddingRight: 10, borderTopWidth: 1, borderColor: "#ccc" }}>
                                            <TouchableOpacity style={styles.btnSubmit} onPress={() => handleDeliveryStaffAccept(item.id)}>
                                                <Text style={{ textAlign: "center", color: "#fff", fontSize: 17 }}>Lấy Hàng</Text>
                                            </TouchableOpacity>
                                        </View>)
                                } */}
                                {
                                    role == UserRole.DeliveryStaff && (
                                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", paddingVertical: 3, paddingBottom: 6, marginHorizontal: 12, borderTopWidth: 1, borderColor: "#F6F5F5" }}>
                                            <TouchableOpacity style={styles.btnSubmit} onPress={() => handleDeliveryStaffAccept(item.id)}>
                                                <Text style={{ textAlign: "center", color: "#fff", fontSize: 14, fontWeight: 500 }}>Received</Text>
                                            </TouchableOpacity>
                                        </View>)
                                }
                            </View>
                        </View>
                    ))
                }
            </View>
            <ModalQuantity modalVisible={modalVisible} idOrder={idOrder} setModalVisible={setModalVisible} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: "100%",
        gap: 10,
    },
    titleStatus: { color: "#7C73C0", fontSize: 16, fontWeight: 500 },
    content: {
        borderLeftColor: "#7C73C0",
        borderLeftWidth: 4,
        marginTop: 6,
        marginHorizontal: 8,
        borderRadius: 6,
        backgroundColor: "#fff",
        height: "auto",
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
            }
        }),
    },
    btnSubmit: {
        marginTop: 5,
        backgroundColor: "#81A263",
        width: 85,
        paddingVertical: 10,
        borderRadius: 5,
    }
});
