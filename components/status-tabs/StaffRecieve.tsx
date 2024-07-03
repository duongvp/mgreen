import { StyleSheet, Image, Platform, View, Text, TextInput, TouchableOpacity, Button, ScrollView, RefreshControl } from 'react-native';
import { ItemStatus } from './ItemStatus';
import React, { useEffect, useState } from 'react';
import { houseHoldService } from '@/service/houseHold';
import { ScheduleStateType } from '@/constant/schedule';
import useInforUserStore from '@/store/useStoreUser';
import { UserRole } from '@/constant/user';
import { deliveryStaffService } from '@/service/deliveryStaff';
import { StaffService } from '@/service/staff';

export default function StaffReciveScreen() {
    const role = useInforUserStore((state: any) => state.role);
    const [arr, setArr] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const [check, setCheck] = useState(false)

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
                res = await houseHoldService.get(ScheduleStateType.DeliveryReceived)
            } else if (role == UserRole.DeliveryStaff) {
                res = await deliveryStaffService.get(ScheduleStateType.DeliveryReceived)
            } else if (role == UserRole.CollectorStaff) {
                res = await StaffService.get(ScheduleStateType.DeliveryReceived)
            }
            const data = await res.json();
            setArr(data)
        }
        fetchApi()
    }, [refreshing, check])

    const handleDeliveryStaffAccept = async (id: any) => {
        await StaffService.patchAcceptSchedule(id)
        setCheck(!check)
        // navigation.navigate('Đã nhận hàng')
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
                                <ItemStatus style={styles.titleStatus} title="Delivering" item={item} />
                                {/* {
                                    role == UserRole.CollectorStaff && (
                                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", paddingBottom: 10, paddingRight: 10, borderTopWidth: 1, borderColor: "#ccc" }}>
                                            <TouchableOpacity style={styles.btnSubmit} onPress={() => handleDeliveryStaffAccept(item.id)}>
                                                <Text style={{ textAlign: "center", color: "#fff", fontSize: 17 }}>Lấy Hàng</Text>
                                            </TouchableOpacity>
                                        </View>)
                                } */}
                                {
                                    role == UserRole.CollectorStaff && (
                                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", paddingVertical: 3, paddingBottom: 6, marginHorizontal: 12, borderTopWidth: 1, borderColor: "#F6F5F5" }}>
                                            <TouchableOpacity style={styles.btnSubmit} onPress={() => handleDeliveryStaffAccept(item.id)}>
                                                <Text style={{ textAlign: "center", color: "#fff", fontSize: 14, fontWeight: 500 }}>Done</Text>
                                            </TouchableOpacity>
                                        </View>)
                                }
                            </View>
                        </View>
                    ))
                }
            </View>
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
    titleStatus: { color: "#008DDA", fontSize: 16, fontWeight: 500 },
    content: {
        borderLeftColor: "#008DDA",
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
