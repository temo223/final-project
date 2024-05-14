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






// box elements

const boxElements = document.querySelectorAll('.box');

const boxTexts = [
  "Text for the first box.",
  "Text for the second box.",
  "Text for the third box.",
  "Text for the fourth box.Text for the fourth boxText for the fourth boxText for the fourth box",
  "Text for the fifth box.",
  "Text for the sixth box.",
  "Text for the seventh box."
];

boxElements.forEach((box, index) => {
  const h3Element = box.querySelector('h3');

  const pElement = document.createElement('p');
  pElement.textContent = boxTexts[index];
  pElement.classList.add('additional-text');

  box.appendChild(pElement);

  pElement.style.display = 'none';

  box.addEventListener('mouseover', () => {
    pElement.style.display = 'block';
  });

  box.addEventListener('mouseout', () => {
    pElement.style.display = 'none';
  });
});




/* recomendation slider*/

const buttonElements = document.querySelectorAll('.button');
const paragraphElement = document.querySelector('.recomendation p');
const imageElement = document.querySelector('.example img');

const buttonContent = [
  {
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa  expekto vartensa vektrum occaet bronat curak",
    imageSrc: "assets/img/d3.svg"
  },
  {
    text: "Clocker sernma occaecat cupidatat non proident, sunt in culpa  expekto slemingu sardinam occaet bronat curak",
    imageSrc: "assets/img/d4.svg"
  },
  {
    text: "Vektroo rfomeo occaecat cupidatat non proident, sunt in culpa  expekto varronum expektusa occaet bronat curak",
    imageSrc: "assets/img/d5.svg"
  }
];

let currentText = buttonContent[0].text;
let currentImageSrc = buttonContent[0].imageSrc;
paragraphElement.textContent = currentText;
imageElement.src = currentImageSrc;

buttonElements.forEach((button, index) => {
  button.addEventListener('mouseover', () => {
    currentText = buttonContent[index].text;
    currentImageSrc = buttonContent[index].imageSrc;
    paragraphElement.textContent = currentText;
    imageElement.src = currentImageSrc;
  });
});

document.querySelector('.recomendation').addEventListener('mouseleave', () => {
  paragraphElement.textContent = currentText;
  imageElement.src = currentImageSrc;
});


// projects

function filterproects(e) {
  const proeects = document.querySelectorAll(".proect-lines div");

  let filter = e.target.dataset.filter;
  proeects.forEach((proect) => {
    proect.classList.contains(filter)
      ? proect.classList.remove("hidden")
      : proect.classList.add("hidden");

    if (filter === "*") {
      proeects.forEach((proect) => proect.classList.remove("hidden"));
    }
  });
}
function filterproects(e) {
  const proeects = document.querySelectorAll(".proect-lines div");
  let filter = e.target.dataset.filter;
  if (filter === "*") {
    proeects.forEach((proect) => proect.classList.remove("hidden"));
  } else {
    proeects.forEach((proect) => {
      proect.classList.contains(filter)
        ? proect.classList.remove("hidden")
        : proect.classList.add("hidden");
    });
  }
}
 