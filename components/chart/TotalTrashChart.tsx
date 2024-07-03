import SelectDropdown from 'react-native-select-dropdown'
import React, { useEffect, useState } from 'react'
import { Dimensions, Platform, StyleSheet, Text, View } from "react-native";
import { GetTimeParam } from "@/constant/getTime";
import { dashBoardService } from "@/service/dashboard";
import { Ionicons } from '@expo/vector-icons';
import { ItemStatus } from '../status-tabs/ItemStatus';

const screenWidth = Dimensions.get("window").width;
const { ToDay, ThreeDay, Week, Month, Quater, Year } = GetTimeParam

const emojisWithIcons = [
    { title: 'Today', value: ToDay },
    { title: 'Three day', value: ThreeDay },
    { title: 'Week', value: Week },
    { title: 'Month', value: Month },
    { title: 'Quarter', value: Quater },
    { title: 'Year', value: Year },
];

export const TotalTrashChart = () => {
    const [selectDate, setSelectDate] = useState<GetTimeParam>(0)
    const [quantity, setQuantity] = useState(0)
    const [listData, setListData] = useState([])

    useEffect(() => {
        try {
            const fetchApi = async () => {
                const res = await dashBoardService.getTrashData(selectDate)
                if (res.status === 200) {
                    setListData(await res.json())
                }
                console.log("🚀 ~ fetchApi ~ res:", await res.json())
                // const data = await res.json();
                // console.log("🚀 ~ fetchApi ~ data:", data)
                // setQuantity(data)

                // console.log("🚀 ~ fetchApi ~ data:", data)
            }
            fetchApi()
        } catch (error) {
            console.error(error)
        }
    }, [selectDate])

    return (
        <View style={styles.container}>
            <View style={styles.boxShadow}>
                <View style={{ padding: 10, alignItems: "center", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={styles.title}>Total Trash Quantity</Text>
                    <SelectDropdown
                        data={emojisWithIcons}
                        onSelect={(selectedItem, index) => {
                            setSelectDate(selectedItem.value)
                            console.log(selectedItem, selectedItem.value);
                        }}
                        renderButton={(selectedItem, isOpened) => {
                            return (
                                <View style={styles.dropdownButtonStyle}>
                                    <Text style={styles.dropdownButtonTxtStyle}>
                                        {(selectedItem && selectedItem.title) || 'Select your mood'}
                                    </Text>
                                    <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
                                </View>
                            );
                        }}
                        renderItem={(item, index, isSelected) => {
                            return (
                                <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
                                    <Text style={styles.dropdownItemTxtStyle}>{item?.title}</Text>
                                </View>
                            );
                        }}
                        showsVerticalScrollIndicator={false}
                        dropdownStyle={styles.dropdownMenuStyle}
                    />
                </View>
                {/* <Text style={styles.absoluteView}>{quantity} kg </Text> */}
            </View>
            <View style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 12 }}>
                {listData.length ?
                    listData.map((item) => (
                        <View style={styles.boxShadow}>
                            <ItemStatus item={item} />
                        </View>
                    )) : <View style={[styles.boxShadow, { paddingVertical: 48 }]}>
                        <Text style={{ textAlign: 'center', fontSize: 18 }}>No data</Text>
                    </View>
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1
    },
    boxShadow: {
        position: "relative",
        borderRadius: 7,
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
            },
        }),
    },
    title: {
        fontSize: 15,
        fontWeight: 500
    },
    absoluteView: {
        position: 'absolute',
        top: "50%",
        left: 0,
        right: 0,
        textAlign: "center",
        fontSize: 18
    },
    dropdownButtonStyle: {
        width: 180,
        height: 40,
        backgroundColor: '#E9ECEF',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
    },
    dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: 15,
        fontWeight: '500',
        color: '#151E26',
    },
    dropdownButtonArrowStyle: {
        fontSize: 20,
    },
    dropdownButtonIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
    dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: 8,
    },
    dropdownItemStyle: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color: '#151E26',
    },
    dropdownItemIconStyle: {
        fontSize: 28,
        marginRight: 8,
    },
});

/* heart */
