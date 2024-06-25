import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { Control, Controller, FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { View, TextInput as RNTextInput, Text, StyleSheet, TextInputProps as RNTextInputProps, TouchableOpacity } from 'react-native';


interface TextInputProps<T extends FieldValues> extends RNTextInputProps {
	label?: string;
	name: Path<T>;
	isShowEye?: boolean;
	control: Control<T>;
}

export const TextInput = <T extends FieldValues>(props: TextInputProps<T>) => {
	const [isFocused, setIsFocused] = useState(false);
	const {
		label,
		name,
		isShowEye,
		control,
		...TextInputProps
	} = props;

	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};

	return (
		<View style={styles.itemInput}>
			{label && (<Text style={{ fontWeight: 600, fontSize: 16, color: '#535353', textTransform: 'capitalize' }}>{label}</Text>)}
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
					<View style={{ position: 'relative' }}>
						<RNTextInput
							style={[styles.input, isFocused && styles.focusedInput]}
							onChangeText={onChange}
							onFocus={() => setIsFocused(true)}
							onBlur={() => {
								onBlur()
								setIsFocused(false)
							}}
							value={value}
							secureTextEntry={!isPasswordVisible && isShowEye}
							{...props}
						/>
						{
							isShowEye && (
								<TouchableOpacity
									style={{ position: 'absolute', right: 0, top: 10 }}
									onPress={togglePasswordVisibility}
								>
									<Ionicons name={isPasswordVisible ? 'eye' : 'eye-off'} size={20} color="#626262" />
								</TouchableOpacity>
							)
						}
						{error && <Text style={styles.labelError}>{error.message}</Text>}
					</View>
				)} />
		</View>

	)
}

const styles = StyleSheet.create({
	itemInput: {
		display: 'flex',
		flexDirection: 'column',
		gap: 6
	},
	input: {
		height: 40,
		borderWidth: 0,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		padding: 10,
		paddingLeft: 6,
		color: '#626262',
		fontSize: 15,
	},
	labelError: {
		color: 'rgb(231 38 38)'
	},
	focusedInput: {
		borderBottomColor: 'blue !important', // Change color when focused
	},
})

