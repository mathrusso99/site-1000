const form = document.querySelector(".information")
const mask = document.querySelector(".mask-2")
const services = document.querySelector(".services")

function buttonClick() {
    form.style.left = "33%"
    form.style.transform = "translateX(-50px)"
    mask.style.visibility = "visible"
}

function maskClick() {
    form.style.left = "-280px"
    form.style.transform = "none"
    mask.style.visibility = "hidden"

    services.style.top = "-400px"
    services.style.transform = "none"
    mask.style.visibility = "hidden"
}

function clickLink() {
    services.style.top = "30%"
    services.style.transform = "translateY(-20px)"
    mask.style.visibility = "visible"
}

const a = document.querySelector('.link-audio')
a.addEventListener('click', function () {
    const audio = document.querySelector('#audio-coin')
    audio.currentTime = 0
    audio.play()
})

const button = document.querySelector('.audio-button')
button.addEventListener('click', function () {
    const audioMario = document.querySelector('#audio-mario')
    audioMario.currentTime = 0
    audioMario.play()
})
