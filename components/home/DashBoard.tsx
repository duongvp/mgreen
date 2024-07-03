import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { TotalUserPieChart } from '../chart/TotalUserPieChart'
import { TotalTrashChart } from '../chart/TotalTrashChart'
import { dashBoardService } from '@/service/dashboard'
import { UserRole } from '@/constant/user'
import { FontAwesome } from '@expo/vector-icons'

export interface IdataAcc {
    title: string,
    quantity: number
}

export const DashBoard = () => {
    const dataChart = [1, 2, 3]
    const [dataAccChart, setDataAccChart] = useState<IdataAcc[]>([])

    const fetchUser = async () => {
        const res = await dashBoardService.get(UserRole.HouseHold)
        const data = await res.json()
        return data
    }

    const fetchDeliver = async () => {
        const res = await dashBoardService.get(UserRole.DeliveryStaff)
        const data = await res.json()
        return data
    }

    const fetchStaff = async () => {
        const res = await dashBoardService.get(UserRole.CollectorStaff)
        const data = await res.json()
        return data
    }

    useEffect(() => {
        const fetchApi = async () => {
            const user = await fetchUser()
            const deliver = await fetchDeliver()
            const staff = await fetchStaff()
            setDataAccChart([{
                title: 'House Hold',
                quantity: user
            }, {
                title: 'Delivery Staff',
                quantity: deliver
            }, {
                title: 'Staff',
                quantity: staff
            }])
        }
        fetchApi()
    }, [])

    return (
        <View>
            <View style={{ marginBottom: 10, paddingHorizontal: 20, paddingTop: 30 }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ display: "flex", flexDirection: "row", marginBottom: 7 }}>
                        <Text style={{ fontSize: 16, paddingRight: 5, color: "rgb(117 117 117)", fontWeight: 500 }}>Welcome</Text>
                        <Text style={{ fontSize: 16, color: "green", fontWeight: "500" }}>Back</Text>
                    </View>
                </View>
                <Text style={{ color: "rgb(117 117 117)" }}>Let's contribute to our earth</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
                <FlatList
                    data={dataAccChart}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <View style={styles.gridItem}>
                            <TotalUserPieChart item={item} />
                        </View>
                    )}
                />
                <TotalTrashChart />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
});
