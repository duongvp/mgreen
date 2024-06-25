import { FormatTimeUtil } from '@/utils/FormatTimeUtil'
import React, { useId } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Iprops { style: any, title: string, item?: any }

export const ItemStatus = ({ style, title, item }: Iprops) => {
    console.log("🚀 ~ ItemStatus ~ item:", item)
    const key = useId()
    return (
        <View style={styles.content} key={key}>
            <View style={styles.infoUser}>
                <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "100%" }}>
                    <View>
                        <Text style={{ color: "rgb(47 45 45)", fontSize: 16, fontWeight: 500 }}>{`${item?.houseHold?.firstName} ${item?.houseHold?.lastName}`}</Text>
                        <Text style={{ color: "rgb(47 45 45)", fontSize: 15, fontWeight: 500 }}>Số lượng: {item?.quantity} kg</Text>
                    </View>
                    <Text style={style}>{title}</Text>
                </View>
                <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "100%", paddingVertical: 10, paddingBottom: 3 }}>
                    <Text style={{ color: "rgb(47 45 45)", fontSize: 16, fontWeight: 500 }}>Thời gian thu gom</Text>
                    <Text style={{ color: "rgb(47 45 45)", fontSize: 16, fontWeight: 500 }}>{item?.startTime} - {item?.endTime}</Text>
                </View>
                <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "100%", paddingVertical: 10, paddingTop: 0 }}>
                    <Text style={{ color: "rgb(47 45 45)", fontSize: 16, fontWeight: 500 }}>Hình thức thu gom</Text>
                    <Text style={{ color: "rgb(47 45 45)", fontSize: 16, fontWeight: 500 }}>Thu gom tại nhà</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                    <Text style={{ color: "rgb(47 45 45)", fontSize: 16, fontWeight: 500 }}>Ngày đặt lịch: {item?.date ? FormatTimeUtil.formatDate(item?.date) : ""}</Text>
                </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", paddingBottom: 10, paddingRight: 10, borderTopWidth: 1, borderColor: "#ccc" }}>
                <TouchableOpacity style={styles.btnSubmit} >
                    <Text style={{ textAlign: "center", color: "#fff", fontSize: 17 }}>Nhận lịch</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 10,
        backgroundColor: "#fff",
        height: "auto",
    },
    infoUser: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    btnSubmit: {
        marginTop: 5,
        backgroundColor: "#81A263",
        width: 85,
        paddingVertical: 10,
        borderRadius: 5,
    }
})