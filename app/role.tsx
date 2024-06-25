import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { AuthService } from '@/service/auth';
import { UserRole } from '@/constant/user';
import ModalCustomRole from '@/components/popup/ModalRole';
import { ProfileService } from '@/service/profile';

const arrRole = [{
    title: "DeliveryStaff",
    value: UserRole.DeliveryStaff
}, {
    title: "HouseHold",
    value: UserRole.HouseHold
}, {
    title: "CollectorStaff",
    value: UserRole.CollectorStaff
}]

export default function Page() {
    const [err, setErr] = useState('');
    const [contentPopup, setContentPopup] = useState("")
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [isSuccessCreate, setIsSuccessCreate] = useState(false)

    const showModal = () => {
        setModalVisible(true);
        !isSuccessCreate && (
            setTimeout(() => {
                setModalVisible(false);
            }, 3000)) // 3 seconds
    };

    const [selectedView, setSelectedView] = useState(arrRole[1].value);

    const handleViewPress = (view: any) => {
        setSelectedView(view);
    };

    const failPopup = () => {
        setContentPopup("Create permission failed")
        setIsSuccessCreate(false)
        showModal()
    }

    const handleSubmit = async () => {
        try {
            const body = {
                role: selectedView
            }
            const res = await ProfileService.patch(body)
            if (res.status == 200) {
                setContentPopup("Create permission successfully")
                setIsSuccessCreate(true)
                showModal()
            } else {
                failPopup()
            }
        } catch (error) {
            failPopup()
            console.error(error)
        }
    }

    return (
        <View style={styles.containerParent}>
            <View style={{ position: 'absolute', top: 102, left: 29, right: 29, padding: 30, display: 'flex', flexDirection: 'column', gap: 28, backgroundColor: '#fff', borderRadius: 15 }}>
                <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 600 }}>Please select user permissions</Text>
                <View style={styles.container}>
                    {
                        arrRole.map(item => (
                            <TouchableOpacity
                                key={item.value}
                                style={[styles.view, selectedView === item.value && styles.activeView]}
                                onPress={() => handleViewPress(item.value)}
                            >
                                <Text>{item.title}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View>
                    <TouchableOpacity onPress={handleSubmit} style={[styles.button, styles.buttonLogin]}>
                        <Text style={[styles.buttonText, styles.buttonTextLogin]}>
                            Confirm</Text>
                    </TouchableOpacity>
                    {err && <Text style={styles.labelError}>{err}</Text>}
                </View>
            </View>
            <ModalCustomRole content={contentPopup} modalVisible={modalVisible} isSuccessCreate={isSuccessCreate} setModalVisible={setModalVisible} />
        </View >
    );
}

const styles = StyleSheet.create({
    containerParent: {
        position: 'relative'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view: {
        flex: 1,
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    activeView: {
        backgroundColor: 'lightblue',
    },
    banner: {
        width: '100%',
        height: 270
    },
    title: {
        position: 'absolute',
        top: 20,
        left: 30,
        display: 'flex',
        flexDirection: 'column',
        gap: 3
    },
    titleHeader: {
        color: '#fff',
        fontSize: 16
    },
    login: {
        fontSize: 24,
        lineHeight: 36,
        fontWeight: 600
    },
    form: {
        position: 'absolute',
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
        backgroundColor: "#1DB954",
        marginTop: 25
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonTextLogin: {
        color: "#fff",
    },
    labelError: {
        paddingTop: 5,
        textAlign: "center",
        color: 'rgb(231 38 38)'
    },
});
