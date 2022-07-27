export const minutesToHours = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60
    const hoursText = (`00${hours}`).slice(-2)
    const minutesText = (`00${minutes}`).slice(-2)

    return `${hoursText}h${minutesText}m`
} 