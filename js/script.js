const carouselData = [
{
    id: 1,
    desktopUrl: "desktop-image-hero-1.jpg",
    mobileUrl: "mobile-image-hero-1.jpg",
    h1: "Discover innovative ways to decorate",
    p: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
},
{
    id: 2,
    desktopUrl: "desktop-image-hero-2.jpg",
    mobileUrl: "mobile-image-hero-2.jpg",
    h1: "We are available all across the globe",
    p: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
},
{
    id: 3,
    desktopUrl: "desktop-image-hero-3.jpg",
    mobileUrl: "mobile-image-hero-3.jpg",
    h1: "Manufactured with the best materials",
    p: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."

}

];

let i = 1;

const mainContent = document.querySelector('main');

const h1Element = document.querySelector('.section-2__h1');
const pElement = document.querySelector('.section-2__p');
const sectionOne = document.querySelector('.section-1');
const sectionTwo = document.querySelector('.section-2');

const leftButton1 = document.querySelector('.button-container-1 .carousel-button--prev');
const rightButton1 = document.querySelector('.button-container-1 .carousel-button--next');
const leftButton2 = document.querySelector('.button-container-2 .carousel-button--prev');
const rightButton2 = document.querySelector('.button-container-2 .carousel-button--next');


const hamIcon = document.querySelector('.hamburger-icon');
const navbarMobile = document.querySelector('.nav-mobile');
const navigation = document.querySelector('.navigation');
const closeButton = document.querySelector('.close-button');


function updateElements(id) {
  h1Element.innerText = carouselData[id - 1].h1;
  pElement.innerText = carouselData[id - 1].p;
  if (window.innerWidth > 767) {
    sectionOne.style.backgroundImage = `url('./images/${carouselData[id - 1].desktopUrl}')`;
  } else {
    sectionOne.style.backgroundImage = `url('./images/${carouselData[id - 1].mobileUrl}')`;
  }
}


updateElements(i);

[leftButton1, leftButton2].forEach(btn => {
  if (btn) {
    btn.addEventListener("click", () => {
      i = i === 1 ? carouselData.length : i - 1;
      updateElements(i);
    });
  }
});

[rightButton1, rightButton2].forEach(btn => {
  if (btn) {
    btn.addEventListener("click", () => {
      i = i === carouselData.length ? 1 : i + 1;
      updateElements(i);
    });
  }
});



window.addEventListener('resize', () => updateElements(i));


hamIcon.addEventListener('click', () => {
 navbarMobile.style.display = 'flex';
 hamIcon.style.display = 'none'; 
 mainContent.style.transform = 'translateY(110px)';

 
})

closeButton.addEventListener('click', () => {
 navbarMobile.style.display = 'none';
 
 hamIcon.style.display = 'flex';
   mainContent.style.transform = 'translateY(0)';

 
 
})