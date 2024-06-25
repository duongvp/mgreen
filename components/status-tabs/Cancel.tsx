import { StyleSheet, Image, Platform, View, Text, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';
import { ItemStatus } from './ItemStatus';

export default function CancelScreen() {
    const arr = new Array(10).fill(1)
    return (
        <ScrollView>
            <View style={styles.container}>
                {
                    arr.map(() => (
                        <ItemStatus style={styles.titleStatus} title="Đã hủy" />
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
    titleStatus: { color: "red", fontSize: 16, fontWeight: 500 },
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
