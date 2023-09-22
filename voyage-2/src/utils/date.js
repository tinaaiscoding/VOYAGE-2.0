// Today's date
let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

today = `${yyyy}-${mm}-${dd}`


// One year from today's date
let next365Days = new Date();
const nextYear = next365Days.getFullYear() + 1;
next365Days = `${nextYear}-${mm}-${dd}`

export { today, next365Days }