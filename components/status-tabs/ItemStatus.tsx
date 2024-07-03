import useInforUserStore from '@/store/useStoreUser';
import { FormatTimeUtil } from '@/utils/FormatTimeUtil'
import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

interface Iprops { style?: any, title?: string, item?: any }

export const ItemStatus = ({ style, title, item }: Iprops) => {
    console.log("🚀 ~ ItemStatus ~ item:", item)
    const { userInfo } = useInforUserStore();
    console.log("🚀 ~ ItemStatus ~ role:", userInfo)
    return (
        // <View style={styles.content}>
        //     <View style={styles.infoUser}>
        //         <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "100%" }}>
        //             <View>
        //                 <Text style={styles.label}>{`${item?.houseHold?.firstName} ${item?.houseHold?.lastName}`}</Text>
        //                 {/* <Text style={{ color: "rgb(47 45 45)", fontSize: 15, fontWeight: 500 }}>Weight: {item?.quantity} kg</Text> */}
        //             </View>
        //             <Text style={style}>{title}</Text>
        //         </View>
        //         <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "100%", paddingTop: 10, paddingBottom: 3 }}>
        //             <Text style={styles.label}>Weight:</Text>
        //             <Text style={styles.title}>{item?.quantity} kg</Text>
        //         </View>
        //         <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "100%", paddingBottom: 3 }}>
        //             <Text style={styles.label}>Collection time:</Text>
        //             <Text style={styles.title}>{item?.startTime} - {item?.endTime}</Text>
        //         </View>
        //         <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "100%", paddingVertical: 10, paddingTop: 0 }}>
        //             <Text style={styles.label}>Form of collection:</Text>
        //             <Text style={styles.title}>Collect at home</Text>
        //         </View>
        //         <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "100%" }}>
        //             <Text style={styles.label}>Schedule date: </Text>
        //             <Text style={styles.title}>{item?.date ? FormatTimeUtil.formatDate(item?.date) : ""}</Text>
        //         </View>
        //     </View>
        // </View>
        <View style={styles.infoUser}>
            <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "100%" }}>
                <View>
                    <Text style={[styles.label, { fontWeight: 600 }]}>{`${item?.houseHold?.firstName ?? "Anonymouse"} ${item?.houseHold?.lastName ?? ""}`}</Text>
                    <Text style={[styles.title, { fontSize: 14, marginTop: 4 }]}>{item.address || item.houseHold?.address || "Collect at home"}</Text>
                    {/* <Text style={{ color: "rgb(47 45 45)", fontSize: 15, fontWeight: 500 }}>Weight: {item?.quantity} kg</Text> */}
                </View>
                <Text style={style}>{title}</Text>

            </View>
            <View style={{ height: 1, width: "100%", backgroundColor: "#F6F5F5", marginVertical: 8 }}></View>
            <View style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "100%" }}>
                    <Text style={styles.label}>Quantity:</Text>
                    <Text style={styles.title}>{item?.quantity} kg</Text>
                </View>
                <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "100%" }}>
                    <Text style={styles.label}>Date: </Text>
                    <Text style={styles.title}>{item?.date ? FormatTimeUtil.formatDate(item?.date) : ""}</Text>
                </View>
                <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "100%" }}>
                    <Text style={styles.label}>Time:</Text>
                    <Text style={styles.title}>{item?.startTime} - {item?.endTime}</Text>
                </View>
                {/* <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "100%" }}>
                    <Text style={styles.label}>Address:</Text>
                    <Text style={styles.title}>{item.houseHold?.address ?? "Collect at home"}</Text>
                </View> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    infoUser: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 4,
        borderRadius: 24,
    },
    // content: {
    //     marginTop: 6,
    //     marginHorizontal: 8,
    //     borderRadius: 6,
    //     backgroundColor: "#fff",
    //     height: "auto",
    //     ...Platform.select({
    //         ios: {
    //             shadowColor: "black",
    //             shadowOffset: { width: 0, height: 3 },
    //             backgroundColor: 'white',
    //             shadowOpacity: 0.2,
    //             shadowRadius: 7,
    //         },
    //         android: {
    //             elevation: 6, // Increase elevation to make the shadow more visible
    //         }
    //     }),
    // },
    label: {
        color: "rgb(47 45 45)",
        fontSize: 16,
        fontWeight: 700
    },
    title: {
        color: "#939185",
        fontSize: 16,
        fontWeight: 500
    }
})