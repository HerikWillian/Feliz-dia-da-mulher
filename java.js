// Contador de tempo
const startDate = new Date('2023-02-01T20:00:00'); // Data em que começaram a namorar
const counterElement = document.getElementById('time');

function updateTime() {
    const now = new Date();
    const timeDifference = now - startDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    counterElement.textContent = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`;
}
setInterval(updateTime, 1000);
updateTime();

// Slideshow de fotos
const images = document.querySelectorAll('.slideshow img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}
setInterval(showNextImage, 2500);

// Corações caindo
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 500);
