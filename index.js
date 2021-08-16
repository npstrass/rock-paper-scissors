const rules = document.getElementById('rules')
const closeBtn = document.getElementById('close')
const modal = document.querySelector(".modal-screen")

rules.addEventListener('click', () => {
    modal.classList.remove('display-none')
})

closeBtn.addEventListener('click', () => {
    modal.classList.add('display-none')
})