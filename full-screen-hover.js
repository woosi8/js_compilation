const links = document.querySelectorAll('.full_screen a')
const bg = document.querySelector('.bg')
const showclass = 'bg-show'

for (const link of links) {
    // it dosen't need to use const img, but it helps for img loading speed ahead of mouseenter event
    const img = new Image()
    img.src = link.dataset.bg

    link.addEventListener('mouseenter', function () {
        bg.style.backgroundImage = `url(${this.dataset.bg})`
        bg.classList.add(showclass)
    })
    link.addEventListener('mouseleave', function () {
        bg.classList.remove(showclass)
    })
}
