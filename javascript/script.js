// for footer year
const date = new Date();
const currentYear = date.getFullYear();

const footerYear = document.querySelector('.year');
footerYear.textContent = currentYear;

// for mobile nav
const btnNavEl = document.querySelector('.btnMobileNav');
const headerEl = document.querySelector('.header');
btnNavEl.addEventListener('click', function() {
  headerEl.classList.toggle('navOpen');
})

// how to write a function
// function addNumber (num1, num2) {
//   return num1 + num2;
// }
// console.log(addNumber(23,47));
// console.log(addNumber(26,43));


// adding scroll effects on page
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function(link) {
link.addEventListener('click', function(e) {
  e.preventDefault();
  const href = link.getAttribute('href');

  // stronscrolling to the top
  if (href === "#") {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    })
  }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({behavior: 'smooth'});
      headerEl.classList.toggle('navOpen');
    }
  })
}) 

// for the sticky Navigation
const sectionHero = document.querySelector('.sectionHero');console.log(sectionHero)


// observe the web page
const obs = new IntersectionObserver(function(entries){
  const entry = entries[0];
  if (entry.isIntersecting === false) {
    document.body.classList.add('sticky');
  }

  if (entry.isIntersecting === true) {
    document.body.classList.remove('sticky');
  }
}, {
  root: null, 
  threshold: 0,
  rootMargin:'-80px'
});
obs.observe(sectionHero);