import React, { useId } from 'react'
import { StyleSheet } from 'react-native'
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { selectDate } from '@/app/schedule';

interface TProps {
    date: selectDate,
    minimumDate?: selectDate,
    setDate: React.Dispatch<React.SetStateAction<selectDate>>
}

export const TimePicker = ({ date, minimumDate, setDate }: TProps) => {
    const timeId = useId()
    const onChange = (event: DateTimePickerEvent, selectedDate: selectDate) => {
        console.log("🚀 ~ onChange ~ selectedDate:", selectedDate)
        const currentDate = selectedDate;
        setDate(currentDate);
        console.log("🚀 ~ DatePickerCustom ~ timeId:", timeId)
    };
    return (
        <DateTimePicker
            testID={timeId}
            value={date!}
            mode={"time"}
            onChange={onChange}
            {...(minimumDate ? { minimumDate } : {})}
        />
    )
}

const styles = StyleSheet.create({
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

