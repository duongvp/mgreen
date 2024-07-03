import { StyleSheet, Image, Platform, View, Text, TextInput, TouchableOpacity, Button, ScrollView, RefreshControl } from 'react-native';
import { ItemStatus } from './ItemStatus';
import React, { useEffect, useState } from 'react';
import { houseHoldService } from '@/service/houseHold';
import { ScheduleStateType } from '@/constant/schedule';
import useInforUserStore from '@/store/useStoreUser';
import { UserRole } from '@/constant/user';
import { deliveryStaffService } from '@/service/deliveryStaff';
import { StaffService } from '@/service/staff';

export default function DoneScreen() {
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
                res = await houseHoldService.get(ScheduleStateType.StaffReceived)
            } else if (role == UserRole.DeliveryStaff) {
                res = await deliveryStaffService.get(ScheduleStateType.StaffReceived)
            } else if (role == UserRole.CollectorStaff) {
                res = await StaffService.get(ScheduleStateType.StaffReceived)
            }
            const data = await res.json();
            setArr(data)
        }
        fetchApi()
    }, [refreshing, check])

    return (
        <ScrollView refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
            <View style={styles.container}>
                {
                    arr.map((item: any, index) => (
                        <View style={styles.content}>
                            <View key={index}>
                                <ItemStatus style={styles.titleStatus} title="Success" item={item} />
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
        marginTop: 7
    },
    titleStatus: { color: "green", fontSize: 16, fontWeight: 500 },
    btnSubmit: {
        marginTop: 5,
        backgroundColor: "#81A263",
        width: 85,
        paddingVertical: 10,
        borderRadius: 5,
    },
    content: {
        borderLeftColor: "green",
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
});
