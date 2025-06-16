

// Navigation Menu Toggle
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}






//slider logic
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach((slide, idx) => {
    slide.classList.remove('active');
  });

  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}

// First slide active on load
slides[slideIndex].classList.add('active');

// Auto slide every 3 seconds
setInterval(showSlides, 3000);







//counter animation
  const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 300; // smaller increment = slower count

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 30); // delay in milliseconds
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});



