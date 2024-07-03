import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { router } from 'expo-router';
import React from 'react'
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MyCarousel from '../slider';
import useInforUserStore from '@/store/useStoreUser';
const { width } = Dimensions.get('window');

export const HomeUi = () => {
    const { userInfo } = useInforUserStore()
    const arr = [{
        img: "https://www.uffizio.com/wp-content/uploads/2024/01/ADAS-25-1-2-1536x865.jpg",
        title: "The Rising Challenge of Solid Waste Management",
        date: "25 Juli 2022"
    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_fyrr5247UFsbyV6UZYFLGKK4vEbSBCKLbA&s",
        title: "The Rising Challenge of Solid Waste Management",
        date: "25 Juli 2022"
    }, {
        img: "https://www.researchgate.net/publication/305892410/figure/fig1/AS:391960381673484@1470462045833/Waste-collection-site-in-India.png",
        title: "Waste collection site in India | Download Scientific Diagram",
        date: "25 Juli 2022"
    }, {
        img: "https://vcdn1-english.vnecdn.net/2020/03/05/rac1562165216r1200x0-158337083-2224-9662-1583371040.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=oZvCLUw1PhSjujJFXcy80g",
        title: "Vietnam waste management: Pay-as-you-throw model proposed for garbage collection",
        date: "25 Juli 2022"
    }]

    const handleSchedule = () => {
        router.push("/schedule")
    }

    const handleVoucher = () => {
        router.push("/voucher")
    }

    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 10, paddingHorizontal: 20, paddingTop: 30 }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ display: "flex", flexDirection: "row", marginBottom: 7 }}>
                        <Text style={{ fontSize: 16, paddingRight: 5, color: "rgb(117 117 117)", fontWeight: 500 }}>Welcome</Text>
                        <Text style={{ fontSize: 16, color: "green", fontWeight: "500" }}>Back</Text>
                    </View>
                    <FontAwesome name="bell" size={18} color="#FFC700" />
                </View>
                <Text style={{ color: "rgb(117 117 117)" }}>Let's contribute to our earth</Text>
            </View>
            <MyCarousel />
            <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                <View style={[{ width: "100%", display: "flex", justifyContent: "center", borderRadius: 6 }, styles.boxShadow]}>
                    <View style={{ paddingVertical: 16, paddingHorizontal: 12 }}>
                        <View style={{ display: "flex", flexDirection: "row", gap: 12, alignItems: "center" }}>
                            <View style={{ width: 48, height: 48, borderColor: "#F4CE14", borderRadius: 24, borderWidth: 3, display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <FontAwesome5 name="trophy" size={24} color="#F4CE14" />
                            </View>
                            <View>
                                <Text style={{ fontSize: 28, fontWeight: 500, color: "#81A263" }}>{userInfo.point ?? 0}</Text>
                                <Text style={{ fontSize: 14, fontWeight: 500, color: "#ccc", marginLeft: 2 }}>
                                    Let's join hands to save our world </Text>
                            </View>

                            {/* <Text style={{ fontSize: 14, fontWeight: 500, color: "#81A263" }}>point</Text> */}
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 10, paddingHorizontal: 20, flexDirection: "row", gap: 10 }}>
                <TouchableOpacity style={[{ flex: 1 }, styles.boxShadow]} onPress={handleSchedule}>
                    <View style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 6, paddingHorizontal: 16, paddingVertical: 12, borderRadius: 6, backgroundColor: "#81A263" }}>
                        <AntDesign name="calendar" size={24} color="#fff" />
                        <Text style={{ textAlign: "center", color: "#fff" }}>Create Schedules</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={[{ flex: 1 }, styles.boxShadow]} onPress={handleVoucher}>
                    <View style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 6, flex: 1, paddingHorizontal: 16, paddingVertical: 12, borderRadius: 5, backgroundColor: "#FEB941" }}>
                        <AntDesign name="gift" size={24} color="#fff" />
                        <Text style={{ textAlign: "center", color: "#fff" }}>Voucher</Text>
                    </View>
                </TouchableOpacity>
                {/* <TouchableOpacity style={{ flex: 1 }} onPress={handleSchedule}>
                    <View style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 5, flex: 1, paddingHorizontal: 10, paddingVertical: 10, borderRadius: 5, backgroundColor: "#3DC2EC" }}>
                        <AntDesign name="qrcode" size={24} color="#fff" />
                        <Text style={{ textAlign: "center", color: "#fff" }}>Quét mã thùng rác</Text>
                    </View>
                </TouchableOpacity> */}
            </View>
            <View style={{ paddingHorizontal: 20, paddingTop: 15 }}>
                <Text style={{ marginBottom: 10, fontWeight: 600 }}>Featured article</Text>
                <View style={{ flexDirection: "column", gap: 10 }}>
                    {
                        arr.map((item, index) => (
                            <View key={index}>
                                <View style={{ width: "100%", height: 100, borderColor: "#ccc", borderWidth: 1, borderRadius: 8, overflow: 'hidden', flexDirection: 'row' }}>
                                    <Image style={styles.img} source={{ uri: item.img }} />
                                    <View style={{ flex: 1, paddingTop: 10, paddingLeft: 18, paddingRight: 8 }}>
                                        <View style={{ alignItems: 'baseline' }} >
                                            <Text style={{ color: "#038E4C", borderRadius: 5, padding: 5, paddingVertical: 2, backgroundColor: "#BFF6C3" }}>New</Text>
                                        </View>
                                        <Text style={{ flex: 1, flexWrap: 'wrap' }} numberOfLines={2} ellipsizeMode="tail">{item.title}</Text>
                                        <View style={{ flexDirection: "row", gap: 4 }}>
                                            <AntDesign name="calendar" size={12} color="rgb(117 117 117)" />
                                            <Text style={{ color: "rgb(117 117 117)" }}>{item.date}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ))
                    }
                </View>
            </View>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: "100%",
    },
    img: {
        flex: 1,
        height: "100%",
        objectFit: "cover"
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
});
