
function openLightbox(index) {
    const images = ["assets/images/ironman.jpg", "assets/images/spiderman.jpg", "assets/images/hulk.jpg"];
    document.getElementById('lightbox-img').src = images[index];
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}
