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

export const FormatTimeUtil = {
    formatDateToTime,
    formatDate
}
