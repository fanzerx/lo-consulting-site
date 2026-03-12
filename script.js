document.addEventListener("DOMContentLoaded", function(){

/* =========================
SLIDER
========================= */

const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".slider-dots");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let index = 0;
let interval;

if(slides.length > 0){

slides.forEach((slide,i)=>{

let dot = document.createElement("div");
dot.classList.add("dot");

if(i === 0){
dot.classList.add("active");
}

dot.addEventListener("click",()=> showSlide(i));

dotsContainer.appendChild(dot);

});

const dots = document.querySelectorAll(".dot");

function showSlide(i){

slides[index].classList.remove("active");
dots[index].classList.remove("active");

index = i;

slides[index].classList.add("active");
dots[index].classList.add("active");

}

function nextSlide(){

let newIndex = (index + 1) % slides.length;
showSlide(newIndex);

}

function prevSlide(){

let newIndex = (index - 1 + slides.length) % slides.length;
showSlide(newIndex);

}

if(next) next.onclick = nextSlide;
if(prev) prev.onclick = prevSlide;

function startSlider(){
interval = setInterval(nextSlide,4000);
}

startSlider();

}

/* =========================
IMAGE MODAL
========================= */

const projectImages = document.querySelectorAll(".project-card img, .gallery img");
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const close = document.querySelector(".close");

projectImages.forEach(img => {

img.addEventListener("click", function(){

if(modal){
modal.style.display = "flex";
modalImg.src = this.src;
}

});

});

if(close){
close.onclick = function(){
modal.style.display = "none";
}
}

/* =========================
REVEAL SECTION
========================= */

function revealSections(){

const reveals = document.querySelectorAll(".reveal");

reveals.forEach(el=>{

let windowHeight = window.innerHeight;
let elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
el.classList.add("active");
}

});

}

window.addEventListener("scroll", revealSections);

/* =========================
HEADER SCROLL
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", function(){

if(window.scrollY > 50){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}

});

/* =========================
COUNTERS
========================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target = +counter.getAttribute("data-target");
const current = +counter.innerText;

const increment = target / 100;

if(current < target){

counter.innerText = Math.ceil(current + increment);
setTimeout(updateCounter,20);

}else{

counter.innerText = target + "+";

}

};

updateCounter();

});

/* =========================
MENU MOBILE
========================= */

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if(toggle){
toggle.addEventListener("click", function(){
menu.classList.toggle("active");
});
}

});