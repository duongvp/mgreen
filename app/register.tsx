import { TextInput } from '@/components/TextInput';
import { Link, router } from 'expo-router';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { AuthService } from '@/service/auth';
import { useState } from 'react';

interface IFormValues {
    email: string
    password: string
    repassword: string
}

const schema = yup.object().shape({
    email: yup
        .string()
        .required('Email is required')
        .email('Invalid email'),
    password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must contain at least 6 characters'),
    repassword: yup.string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Re-enter your password')
});

export default function Page() {
    const [err, setErr] = useState('')
    const { control, handleSubmit, formState: { errors } } = useForm<IFormValues>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IFormValues> = async (data) => {
        try {
            const res = await AuthService.register(data.email, data.password);
            router.push('/role')
            switch (res.status) {
                case 200:
                    const res = await AuthService.login(data);
                    router.push('/role')
                    break;
                case 500:
                    setErr('OOP! Connect server timeout !')
                    break;
                case 400:
                    setErr('DuplicateUserName')
                default:
                    break;
            }
        } catch (error) {
            console.error(error)
        }
    }

    const onError: SubmitErrorHandler<IFormValues> = async (error) => {
        console.error(error)
    }

    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.banner}
                    source={{ uri: '/assets/images/image1.png' }}
                />
                <View style={styles.title}>
                    <Text style={[styles.titleHeader, styles.login]}>Create Account</Text>
                    <Text style={[styles.titleHeader]}>Create an account so you can {"\n"}explore all the existing jobs</Text>
                </View>
            </View>
            <View style={{ position: 'absolute', top: 202, left: 29, right: 29, padding: 30, display: 'flex', flexDirection: 'column', gap: 28, backgroundColor: '#fff', borderRadius: 15 }}>
                <TextInput
                    label='Email'
                    name='email'
                    control={control}
                    placeholder='xxxxx@gmail.com'
                />
                <TextInput
                    label='Password'
                    name='password'
                    control={control}
                    placeholder="Enter your password"
                    isShowEye={true} />
                <TextInput
                    label='Confirm Password'
                    name='repassword'
                    control={control}
                    placeholder="Re-Enter your password"
                    isShowEye={true} />
                <View>
                    <TouchableOpacity onPress={handleSubmit(onSubmit, onError)} style={[styles.button, styles.buttonLogin]}>
                        <Text style={[styles.buttonText, styles.buttonTextLogin]}>Sign up</Text>
                    </TouchableOpacity>
                    {err && <Text style={styles.labelError}>{err}</Text>}
                </View>
                <Link href={'/login'} style={{ textAlign: 'center' }}>
                    <Text style={{ fontSize: 14, color: '#494949' }}>Already have an account ?</Text>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative'
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
    itemInput: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6
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
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10,
        paddingLeft: 6,
        color: '#626262',
        fontSize: 15
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
