import { router } from 'expo-router';
import { Image, StyleSheet, Platform, ImageBackground, Text, View, Button, Alert, TouchableOpacity } from 'react-native';

const image = '../assets/images/baner.jpg';

export default function Page() {
    const handlePress = () => {
        router.push('/login');
    };

    const handleRegister = () => {
        router.push('/register')
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require(image)} resizeMode="cover" style={styles.image}>
                {/* <Image source={require('../assets/images/rectangle.png')} style={styles.tinyLogo} /> */}
                <View style={styles.content}>
                    <Text style={styles.title}>VietNam Green</Text>
                    <Text style={styles.text}>Let’s work together for sustainable future</Text>
                    <TouchableOpacity onPress={handlePress} style={[styles.button, styles.buttonLogin]}>
                        <Text style={[styles.buttonText, styles.buttonTextLogin]}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleRegister} style={[styles.button, styles.buttonRegister]}>
                        <Text style={[styles.buttonText]}>Register</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
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
        width: "100%",
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
        marginTop: 16
    }
});
