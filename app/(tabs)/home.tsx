import MyCarousel from '@/components/slider';
import { Image, StyleSheet, Platform, ImageBackground, Text, View, Button, Alert, TouchableOpacity, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { authUtil } from '@/utils/AuthUtils';
const { width } = Dimensions.get('window');

export default function HomeScreen() {
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

  const fetchApi = async () => {
    const token = await authUtil.getValueFor('token')
  }

  fetchApi()

  const handleSchedule = () => {
    router.push("/schedule")
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ marginBottom: 10, paddingHorizontal: 20, paddingTop: 30 }}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ display: "flex", flexDirection: "row", marginBottom: 7 }}>
              <Text style={{ paddingRight: 5, color: "rgb(117 117 117)", fontWeight: 500 }}>Hi,</Text>
              <Text style={{ color: "green", fontWeight: "500" }}>Clawrence</Text>
            </View>
            <FontAwesome name="bell" size={18} color="#FFC700" />
          </View>
          <Text style={{ color: "rgb(117 117 117)" }}>Let's contribute to our earth</Text>
        </View>
        <MyCarousel />
        <View style={{ marginTop: 20, paddingHorizontal: 20, flexDirection: "row", gap: 10 }}>
          <TouchableOpacity style={{ flex: 1 }} onPress={handleSchedule}>
            <View style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 5, flex: 1, paddingHorizontal: 10, paddingVertical: 10, borderRadius: 5, backgroundColor: "#FEB941" }}>
              <AntDesign name="gift" size={24} color="#fff" />
              <Text style={{ textAlign: "center", color: "#fff" }}>Đổi rác lấy quà</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1 }} onPress={handleSchedule}>
            <View style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 5, paddingHorizontal: 10, paddingVertical: 10, borderRadius: 5, backgroundColor: "#81A263" }}>
              <AntDesign name="calendar" size={24} color="#fff" />
              <Text style={{ textAlign: "center", color: "#fff" }}>Đặt lịch thu gom tại nhà</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1 }} onPress={handleSchedule}>
            <View style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 5, flex: 1, paddingHorizontal: 10, paddingVertical: 10, borderRadius: 5, backgroundColor: "#3DC2EC" }}>
              <AntDesign name="qrcode" size={24} color="#fff" />
              <Text style={{ textAlign: "center", color: "#fff" }}>Quét mã thùng rác</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 20, paddingTop: 15 }}>
          <Text style={{ marginBottom: 10, fontWeight: 600 }}>Bài viết nổi bật</Text>
          <View style={{ flexDirection: "column", gap: 10 }}>
            {
              arr.map((item, index) => (
                <View key={index}>
                  <View style={{ width: "100%", height: 100, borderColor: "#ccc", borderWidth: 1, borderRadius: 8, overflow: 'hidden', flexDirection: 'row' }}>
                    <Image style={styles.img} source={{ uri: item.img }} />
                    <View style={{ flex: 1, paddingTop: 10, paddingLeft: 18, paddingRight: 8 }}>
                      <View style={{ alignItems: 'baseline' }} >
                        <Text style={{ color: "#038E4C", borderRadius: 5, padding: 5, paddingVertical: 2, backgroundColor: "#BFF6C3" }}>Nổi bật</Text>
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
    </ScrollView>
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
  }
});
