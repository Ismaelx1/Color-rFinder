const hexfinder = document.getElementById('hex')
const rgbfinder = document.getElementById('rgba')
const displayz = document.querySelector('.display')
const text = document.getElementById('displayer')



function rgba() {
const random1 = Math.floor(Math.random() * 256)
const random2 = Math.floor(Math.random() * 256)
const random3 = Math.floor(Math.random() * 256)
    let bgvalue = `rgb(${random1}, ${random2}, ${random3})`
        return bgvalue
}

function hex() {
    const hexColor = Math.floor(Math.random()*16777215).toString(16);
        return hexColor
}





rgbfinder.addEventListener('click', () => {
        displayz.style.backgroundColor = rgba()
        text.textContent = 'Background Color: ' + rgba()
})

hexfinder.addEventListener('click', () => {
    displayz.style.backgroundColor = '#' + hex()
        text.textContent = 'Background Color: ' + '#' + hex()
})