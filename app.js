// about us review slider

let reviews = document.querySelectorAll('.review-wrapper');

let currentReviews = [0,2];

let updateReviewSlider = (cards) => {

    cards.forEach((card_index) => {
        reviews[card_index].classList.add('active');
    })
}

setInterval(() => {
    currentReviews.forEach((card_index, i) => {
        reviews[card_index].classList.remove('active');

        currentReviews[i] = card_index >= reviews.length - 1 ? 0 :card_index + 1;
    })

    setTimeout(() => {
        updateReviewSlider(currentReviews)
    }, 250);

}, 5000);

updateReviewSlider(currentReviews)

// faq

let faqs = [...document.querySelectorAll('.faq')];

faqs.map(faq => {
    let ques = faq.querySelector('.question-box')

    ques.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
})

// dish slider

let dishSlider = document.querySelector('.dish-slide');

let rotationVal = 0;

setInterval(() => {

    rotationVal += 120;

    dishSlider.style.transform = `translateY(-50%) rotate(${rotationVal}deg)`
}, 2500)

// nav toggler

let navToggler = document.querySelector('.nav-toggler');
let linksContainer = document.querySelector('.links-container');

navToggler.addEventListener('click', () => {
    navToggler.classList.toggle('active');
    linksContainer.classList.toggle('active');
})

const themeButton = document.getElementById('themeButton');
const themeIcon = document.getElementById('themeIcon');
const root = document.documentElement;

const darkTheme = {
  '--accent-color': '#2E2E2E',
  '--primary-text-color': '#FFFFFF',
  '--secondary-text-color': '#A0A0A0',
  '--light-text-color': '#EAEAEA',
  '--primary-color': '#1A1A1A',
  '--secondary-color': '#007676',
  '--alpha-secondary-color': 'rgba(0, 118, 118, 0.2)',
  '--discount-color': '#E71A1C',
  '--card-hover-bg-color': '#252525',
  '--border-color': '#313131',
  '--box-shadow-color': 'var(--accent-color)',
  '--shadow': 'rgba(0, 0, 0, 0.1)',
  '--box-shadow': 'rgba(0, 0, 0, 0.3)',
  '--discount-banner-background-overlay': 'linear-gradient(rgba(0, 118, 118, 0.8), rgba(0, 118, 118, 0.8))',
  '--phone-app-shadow': '#C7E1EB',
  '--alpha-primary-color': 'rgba(255, 255, 255, 0.5)',
  '--rating-color': '#FFA800',
};

const lightTheme = {
  '--accent-color': '#EAF2F5',
  '--primary-text-color': '#141414',
  '--secondary-text-color': '#007676',
  '--light-text-color': '#fff',
  '--primary-color': '#fff',
  '--secondary-color': '#007676',
  '--alpha-secondary-color': 'rgba(0, 118, 118, 0.2)',
  '--discount-color': '#E71A1C',
  '--card-hover-bg-color': '#F9F9F9',
  '--border-color': '#f9f9f9',
  '--box-shadow-color': 'var(--accent-color)',
  '--shadow': 'rgba(0, 0, 0, 0.05)',
  '--box-shadow': 'rgba(0, 0, 0, 0.25)',
  '--discount-banner-background-overlay': 'linear-gradient(rgba(0, 118, 118, 0.8), rgba(0, 118, 118, 0.8))',
  '--phone-app-shadow': '#C7E1EB',
  '--alpha-primary-color': 'rgba(255, 255, 255, 0.5)',
  '--rating-color': '#FFA800',
};

let isLightTheme = true;

themeButton.addEventListener('click', () => {
    isLightTheme = !isLightTheme;
    const selectedTheme = isLightTheme ? lightTheme : darkTheme;
    for (const property in selectedTheme) {
      root.style.setProperty(property, selectedTheme[property]);
    }
  
    // Change the icon based on the theme
    themeIcon.classList.remove(isLightTheme ? 'fa-sun' : 'fa-moon');
    themeIcon.classList.add(isLightTheme ? 'fa-moon' : 'fa-sun');
  });


