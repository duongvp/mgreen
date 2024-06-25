import { StyleSheet, Image, Platform, View, Text, TextInput, TouchableOpacity, Button, ScrollView, RefreshControl } from 'react-native';
import { ItemStatus } from './ItemStatus';
import React, { useEffect, useState } from 'react';
import { houseHoldService } from '@/service/houseHold';
import { ScheduleStateType } from '@/constant/schedule';

export default function PendingScreen() {
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
    return (
        <ScrollView refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
            <View style={styles.container}>
                {
                    arr.map((item, index) => (
                        <View key={index}>
                            <ItemStatus style={styles.titleStatus} title="Chờ xác nhận" item={item} />
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
    titleStatus: { color: "#f7a000", fontSize: 16, fontWeight: 500 },
    avatar: {
        width: 114,
        height: 114
    },
    content: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 10
    },
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
