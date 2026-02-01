const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const close = document.querySelector('#nav-close');

btn.addEventListener('click', ()=> {
    nav.classList.add('active')
});
close.addEventListener('click', ()=>{
    nav.classList.remove('active')
});
document.querySelectorAll('.nav-list a').forEach(link=>{
    link.addEventListener('click', ()=> {
        nav.classList.remove('active')
    })
});

const track = document.querySelector('.track');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dots span');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function updateSlider() {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

next.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateSlider();
});

prev.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        updateSlider();
    });
});

window.addEventListener('resize', updateSlider);
updateSlider();
