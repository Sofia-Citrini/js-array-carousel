const images = [
    "imgs/01.webp",
    "imgs/02.webp",
    "imgs/03.webp",
    "imgs/04.webp",
    "imgs/05.webp"
]

const sliderContainer = document.querySelector(".slider-container");
const tnContainer = document.querySelector(".row")
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let currentImg = 0; 


for (let i = 0; i < images.length; i++) {

    let active = "";
    let tnActive = "";
    if ( i === 0 ) {
        active = "img-active"
        tnActive = "thumbnail-img-active"
    }

    sliderContainer.innerHTML += `<img src="${images[i]}" class="slider-img ${active}">`
    tnContainer.innerHTML += `<div class="col">
        <img class="thumbnail-img ${tnActive}" src="${images[i]}">
        </div>`
}

// Button Prev
prevBtn.addEventListener ("click", function() {
    if (currentImg -1 < 0){
        currentImg = images.length;
    }

    const activeImg = document.querySelector(".img-active");
    activeImg.classList.remove("img-active");

    const activeTnImg = document.querySelector(".thumbnail-img-active");
    activeTnImg.classList.remove("thumbnail-img-active");

    currentImg--;
    
    const nextImg = document.querySelector(`.slider-container :nth-child(${currentImg + 1})`);
    nextImg.classList.add("img-active");

    const nextTnImg = document.querySelector(`.row :nth-child(${currentImg + 1})`).getElementsByTagName('img')[0];
    nextTnImg.classList.add("thumbnail-img-active");
})


// Button next
nextBtn.addEventListener ("click", function() {
    if (currentImg + 1  >= images.length){
        currentImg = -1
    }

    const activeImg = document.querySelector(".img-active");
    activeImg.classList.remove("img-active");

    const activeTnImg = document.querySelector(".thumbnail-img-active");
    activeTnImg.classList.remove("thumbnail-img-active");

    currentImg++;
    
    const nextImg = document.querySelector(`.slider-container :nth-child(${currentImg + 1})`);
    nextImg.classList.add("img-active");

    const nextTnImg = document.querySelector(`.row :nth-child(${currentImg + 1})`).getElementsByTagName('img')[0];
    nextTnImg.classList.add("thumbnail-img-active");
})
































