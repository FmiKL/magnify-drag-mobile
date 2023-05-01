const magnify = document.querySelector('.magnify')
const isTouchDevice = 'ontouchstart' in window

magnify.addEventListener('click', handleMouseMove)

if (isTouchDevice) {
    magnify.addEventListener('touchmove', handleTouchMove)
}
else {
    magnify.addEventListener('mousemove', handleMouseMove)
}

function handleTouchMove(e) {
    e.preventDefault()
    
    const touch = e.touches[0]
    handleZoom(touch.pageX - this.offsetLeft, touch.pageY - this.offsetTop)
}

function handleMouseMove(e) {
    e.preventDefault()

    handleZoom(e.pageX - this.offsetLeft, e.pageY - this.offsetTop)
}

function handleZoom(x, y) {
    const magnifyImg = magnify.querySelector('.magnify__img')
    const magnifyZoomer = magnify.querySelector('.magnify__zoomer')

    const imgWidth = magnifyImg.offsetWidth
    const imgHeight = magnifyImg.offsetHeight

    const zoomerStyle = magnifyZoomer.style

    let xPercent = ((x / imgWidth) * 100)
    let yPercent = ((y / imgHeight) * 100)

    if (x > (.01 * imgWidth)) {
        xPercent += (.15 * xPercent)
    }

    if (y >= (.01 * imgHeight)) {
        yPercent += (.15 * yPercent)
    }

    zoomerStyle.backgroundImage = 'url(' + magnify.href + ')'
    zoomerStyle.backgroundPositionX = (xPercent - 9) + '%'
    zoomerStyle.backgroundPositionY = (yPercent - 9) + '%'
    zoomerStyle.left = (x - 100) + 'px'
    zoomerStyle.top = (y - 100) + 'px'
}
