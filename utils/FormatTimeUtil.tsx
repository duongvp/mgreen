function formatDateToTime(date: Date) {
    // Get hours, minutes, and day of the month
    let hours: string | number = date.getHours();
    let minutes: string | number = date.getMinutes();
    let day: string | number = date.getDate();

    // Ensure two-digit format
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    day = day < 10 ? '0' + day : day;

    // Combine into the desired format
    return `${hours}:${minutes}:${day}`;
}

function formatDate(timestamp: string): string {
    const date = new Date(timestamp);

    // Extract day, month, and year
    const day = ('0' + date.getUTCDate()).slice(-2);       // Ensure two digits
    const month = ('0' + (date.getUTCMonth() + 1)).slice(-2); // Months are zero-indexed, so we add 1
    const year = date.getUTCFullYear();

    // Format as dd/mm/yyyy
    return `${day}/${month}/${year}`;
}

function convertTimeRange(timeRange: string) {
    // Helper function to convert a single time from 24-hour format to 12-hour format with AM/PM
    function convertTo12HourFormat(time: any) {
        let [hours, minutes] = time.split(':');
        hours = parseInt(hours);
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;  // Convert '0' or '12' to '12', otherwise keep hours in 12-hour format
        return `${String(hours).padStart(2, '0')}:${minutes} ${period}`;
    }

    // Split the input time range into start and end times
    const [startTime, endTime] = timeRange.split(' - ');

    // Convert both times to 12-hour format
    const startTime12Hour = convertTo12HourFormat(startTime);
    const endTime12Hour = convertTo12HourFormat(endTime);

    // Combine the converted times into the desired output format
    return `${startTime12Hour} - ${endTime12Hour}`;
}

export const FormatTimeUtil = {
    formatDateToTime,
    formatDate,
    convertTimeRange
}
