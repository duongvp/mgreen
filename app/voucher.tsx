import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons'
import { router } from 'expo-router';
import React from 'react'
import { Dimensions, Image, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import useInforUserStore from '@/store/useStoreUser';
const { width } = Dimensions.get('window');

export default function Page() {
    const { userInfo } = useInforUserStore()
    const arr = [{
        img: "https://www.shutterstock.com/image-vector/10-off-sale-voucher-coupon-600nw-2470613199.jpg",
        label: "Data 3G/4G",
        title: "Sale 10%",
        cup: "250"
    }, {
        img: "https://img.freepik.com/free-photo/beautiful-gift-voucher-with-hand_23-2149243856.jpg?t=st=1720102798~exp=1720106398~hmac=6f911706b68ce198b6dea51e7d8582febe90edaa03f4cb5e70f7cc362e6eaa27&w=740",
        label: "Pay the bill",
        title: "Sale 50%",
        cup: "280"
    }, {
        img: "https://img.freepik.com/free-photo/beautiful-gift-voucher-with-hand_23-2149243863.jpg?ga=GA1.1.1909771166.1720102749&semt=ais_user",
        label: "Pay the bill",
        title: "Sale 100$",
        cup: "350"
    }, {
        img: "https://www.shutterstock.com/image-vector/christmas-sale-voucher-coupon-business-260nw-2356233695.jpg",
        label: "Data 3G/4G",
        title: "Sale upto 50%",
        cup: "300"
    },
    {
        img: "https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_gift-voucher-template-39051e8285934735e74c94c89ea9a1fa.jpg",
        label: "Data 3G/4G",
        title: "Sale 10%",
        cup: "300"
    }]

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ paddingHorizontal: 20, paddingTop: 15 }}>
                    <Text style={{ marginBottom: 14, fontSize: 16, textAlign: "center", fontWeight: 600 }}>List of recycling and gift exchange collection points</Text>
                    <View style={{ flexDirection: "column", gap: 10 }}>
                        {
                            arr.map((item, index) => (
                                <View key={index} style={styles.boxShadow}>
                                    <View style={[{ width: "100%", height: 132, padding: 6, borderColor: "#ccc", borderRadius: 6, overflow: 'hidden', flexDirection: 'row' }]}>
                                        <Image style={styles.img} source={{ uri: item.img }} />
                                        <View style={{ flex: 1, paddingTop: 10, paddingLeft: 18, paddingRight: 8 }}>
                                            <View style={{ flex: 1 }}>
                                                <View style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                                    <View style={{ display: "flex", flexDirection: "row", alignItems: 'center', gap: 4 }}>
                                                        <FontAwesome6 name="money-bills" size={14} color="rgb(117 117 117)" />
                                                        <Text>{item?.label || "0934677134"}</Text>
                                                    </View>
                                                    <Text numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 14, fontWeight: 500 }}>{item.title}</Text>

                                                </View>
                                            </View>
                                            <View style={{ flexDirection: "row", gap: 4, justifyContent: "flex-end" }}>
                                                <FontAwesome5 name="trophy" size={14} color="#F4CE14" />
                                                <Text style={{ color: "#F4CE14", fontWeight: 700 }}>{item.cup}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            ))
                        }
                    </View>
                </View>
            </View >
        </ScrollView >
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: "100%",
    },
    img: {
        width: (width / 2) - 50,
        height: "100%",
        borderRadius: 6,
        objectFit: "cover"
    },
    boxShadow: {
        position: "relative",
        borderRadius: 6,
        ...Platform.select({
            ios: {
                shadowColor: "black",
                shadowOffset: { width: 0, height: 3 },
                backgroundColor: 'white',
                shadowOpacity: 0.2,
                shadowRadius: 6,
            },
            android: {
                elevation: 6, // Increase elevation to make the shadow more visible
            },
        }),
    },
});
