// ***Date and Time
const date = new Date();

const currentDate = date.getDate()
const currentDay = date.getDay()
const currentYear = date.getFullYear()
const currentMonth = date.getMonth()
const currentHour = date.getHours()
const currentMinute = date.getMinutes()
const currentSeconds = date.getSeconds()

console.log(`Today date is = ${currentDate}-${currentYear}-${currentMonth}`)
console.log(`Current Time is = ${currentHour}:${currentMinute}:${currentSeconds}`)