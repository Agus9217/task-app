const getNextDay = () => {
    let tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow
}

const padToTwoDigits = (numero) => {
    return numero.toString().padStart(2, "0" )
}


const getTomorrowDate = () => {
    const year = getNextDay().getFullYear()
    const day = getNextDay().getDate()
    const month = getNextDay().getMonth() + 1

    return `${year}-${padToTwoDigits(month)}-${day}`
}

const setDateInervals = () => {
    dateInput.value = getTomorrowDate()
    dateInput.min = getTomorrowDate()
    dateInput.max = getNextDay().getFullYear() + "-12-31"
}