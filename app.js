const date = new Date()
let today = date.getDate()
const year = date.getFullYear()
const month = date.getMonth()
const minutes = date.getMinutes()
const seconds = date.getSeconds()
const hours = date.getHours()
const day = date.getDay()
const dayList = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']
let version;
version = (hours > 12 ? 'PM' : 'AM')
const para = document.getElementById('para')
para.textContent = 'time is' + ' ' +   hours + ':' + minutes + ':' + seconds +   version+ ' '+  'and day is '+  dayList[day]  + '' + 'and date is '  + '' + today + '-' + month + "-" + year
