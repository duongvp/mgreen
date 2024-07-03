
import { StyleSheet, Image, Platform, View, Text, TextInput, TouchableOpacity, Button, ScrollView, RefreshControl } from 'react-native';
import { ItemStatus } from './ItemStatus';
import React, { useEffect, useState } from 'react';
import { houseHoldService } from '@/service/houseHold';
import { ScheduleStateType } from '@/constant/schedule';
import useInforUserStore from '@/store/useStoreUser';
import { UserRole } from '@/constant/user';
import { deliveryStaffService } from '@/service/deliveryStaff';

export default function ReciveScreen() {
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
            if (role == 0) {
                res = await houseHoldService.get(ScheduleStateType.DeliveryAccepted)
            } else if (role == 1) {
                res = await deliveryStaffService.get(ScheduleStateType.DeliveryAccepted)
            }
            const data = await res.json();
            setArr(data)
        }
        fetchApi()
    }, [refreshing, check])

    const handleDeliveryStaffAccept = async (id: any) => {
        const res = await deliveryStaffService.patchConfirmReceiveSchedule(id, 0)
        console.log("🚀 ~ handleDeliveryStaffAccept ~ res:", res)
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
                                <ItemStatus style={styles.titleStatus} title="Đã xác nhận" item={item} />
                                {
                                    role == UserRole.DeliveryStaff && (
                                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", paddingBottom: 10, paddingRight: 10, borderTopWidth: 1, borderColor: "#ccc" }}>
                                            <TouchableOpacity style={styles.btnSubmit} onPress={() => handleDeliveryStaffAccept(item.id)}>
                                                <Text style={{ textAlign: "center", color: "#fff", fontSize: 17 }}>Lấy Hàng</Text>
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
        marginTop: 10,
        backgroundColor: "#fff",
        height: "auto",
    },
    btnSubmit: {
        marginTop: 5,
        backgroundColor: "#81A263",
        width: 85,
        paddingVertical: 10,
        borderRadius: 5,
    }
});
