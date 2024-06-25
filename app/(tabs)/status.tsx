import { Image, StyleSheet, Platform, ImageBackground, Text, View, Button, Alert, TouchableOpacity } from 'react-native';

const image = { uri: '/assets/images/pexels-leonid.png' };
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PendingScreen from '@/components/status-tabs/Pending';
import ReciveScreen from '@/components/status-tabs/Recieve';
import CancelScreen from '@/components/status-tabs/Done';

const Tab = createMaterialTopTabNavigator();

export default function StatusScreen() {
    const handlePress = () => {
        alert('Button Pressed!');
    };

    return (
        <View style={styles.container}>
            <Tab.Navigator screenOptions={{
                lazy: true,
                swipeEnabled: false,
                tabBarScrollEnabled: true,
                tabBarItemStyle: { width: 150 },
                tabBarLabelStyle: { fontSize: 16 }
            }}>
                <Tab.Screen name="Chờ xác nhận" component={PendingScreen} />
                <Tab.Screen name="Đã xác nhận" component={PendingScreen} />
                <Tab.Screen name="Đã nhận hàng" component={ReciveScreen} />
                <Tab.Screen name="Hoàn thành" component={CancelScreen} />
            </Tab.Navigator>
        </View >
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    content: {
        flexDirection: 'column',
        gap: 5,
        position: 'absolute',
        bottom: 66,
        left: 30,
        right: 30
    },
    tinyLogo: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 36,
    },
    text: {
        color: 'white',
        fontSize: 14,
        lineHeight: 21,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        width: '100%'
    },
    buttonLogin: {
        backgroundColor: "#fff",
        marginTop: 40
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonTextLogin: {
        color: "#1DB954",
    },
    buttonRegister: {
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderWidth: 1,
        marginTop: 30
    }
});
