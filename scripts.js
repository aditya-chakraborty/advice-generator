const url = 'https://api.adviceslip.com/advice'

const btn = document.getElementsByClassName("dice-btn")[0]
const adviceId = document.getElementsByClassName("advice__id")[0]
const adviceText = document.getElementsByClassName("advice__text")[0]

async function fetchAdvice() {
    let response = await fetch(url)
    let data = await response.json()
    adviceId.innerHTML = data.slip.id
    adviceText.innerHTML = `"${data.slip.advice}"`
}

btn.addEventListener('click', () => {
    fetchAdvice()
})