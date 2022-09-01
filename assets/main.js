const form = document.getElementById("form")
const cardContainer = document.getElementById("card")
const agenda = JSON.parse(localStorage.getItem("agenda")) || []

// const renderAgenda = () => {
//     cardContainer.innerHTML = 
// }

const init = () => {
    renderAgenda()
    window.addEventListener("DOMContentLoaded", setDateInervals)
    // form.addEventListener("submit", submitForm)
}

init()