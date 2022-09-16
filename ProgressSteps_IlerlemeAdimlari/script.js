const progress = document.getElementById('progress')
const ileri = document.getElementById('ileri')
const geri = document.getElementById('geri')
const circles = document.querySelectorAll('.circle')

let currentActive = 1 //hangisi aktifse onu gerçekleştirecek

ileri.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update() //temel olarak DOM güncellenecek
})

geri.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }
    update()
})

function update() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (currentActive === 1) {
        geri.disabled = true
    }
    else if (currentActive === circles.length) {
        ileri.disabled = true
    }
    else {
        geri.disabled = false
        ileri.disabled = false
    }
}