const slides = document.querySelectorAll(".slide");
let currentSlide=0;
function loadSlides(){
    slides.forEach((slide,index)=>{
        if(index===currentSlide){
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    } )
}
loadSlides();
function goToNextSlide() {
	if (currentSlide === slides.length - 1) {
		currentSlide = 0;
	} else {
		currentSlide += 1;
	}
	loadSlides();
}

let sliderIntervalId = null;

sliderIntervalId = setInterval(goToNextSlide, 6000);




const targetSection = document.querySelector(".block");
const bars = document.querySelectorAll(".progress-results");

function showProgress() {
    for (let i = 0; i < bars.length; i++) {
        const bar = bars[i];
        const value = bar.dataset.progress;
        console.log(value);
        bar.style.opacity = 1;
        bar.style.width = `${value}%`;
    }
}

function hideProgress() {
    for (let i = 0; i < bars.length; i++) {
        const bar = bars[i];
        bar.style.opacity = 0;
        bar.style.width = 0;
    }
}

window.addEventListener('scroll', () => {
    const sectionPos = targetSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos) {
        showProgress();
    } else {
        hideProgress();
    }
});
