import { StyleSheet, View, Text, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { ItemStatus } from './ItemStatus';
import React, { useEffect, useState } from 'react';
import { houseHoldService } from '@/service/houseHold';
import { ScheduleStateType } from '@/constant/schedule';
import useInforUserStore from '@/store/useStoreUser';
import { UserRole } from '@/constant/user';

export default function ReciveScreen() {
    const {role} = useInforUserStore((state:any) => state.role);
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
            const res = await houseHoldService.get(ScheduleStateType.Pending)
            const data = await res.json();
            setArr(data)
        }
        fetchApi()
    }, [refreshing])

    const handleDeliveryStaffAccept = () => {
      
    }

    return (
        <ScrollView refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
            <View style={styles.container}>
                {
                    arr.map((item, index) => (
                        <View key={index}>
                            <View style={styles.content}>
                                <ItemStatus style={styles.titleStatus} title="Đã lấy hàng" item={item} />
                                {
                                    role == UserRole.DeliveryStaff && (
                                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", paddingBottom: 10, paddingRight: 10, borderTopWidth: 1, borderColor: "#ccc" }}>
                                        <TouchableOpacity style={styles.btnSubmit} onPress={handleDeliveryStaffAccept}>
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
    titleStatus: { color: "rgb(29, 185, 84)", fontSize: 16, fontWeight: 500 },
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
