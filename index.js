const monthNameEl = document.getElementById("month-name")
const dayNameEl = document.getElementById("day-name")
const dayNumEl = document.getElementById("day-number")
const yearEl = document.getElementById("year")

const date = new Date();
const month = date.getMonth()


monthNameEl.innerText = date.toLocaleString("en", {month: "long"})

dayNameEl.innerHTML = date.toLocaleString("en", {weekday: "long"})

dayNumEl.innerHTML = date.getDate()

yearEl.innerHTML = date.getFullYear()

