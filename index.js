// Scroll animation
// const reveals = document.querySelectorAll('.reveal');
// window.addEventListener('scroll', () => {
//   reveals.forEach(reveal => {
//     const windowHeight = window.innerHeight;
//     const elementTop = reveal.getBoundingClientRect().top;
//     const elementVisible = 150;
//     if (elementTop < windowHeight - elementVisible) {
//       reveal.classList.add('show');
//     } else {
//       reveal.classList.remove('show');
//     }
//   });
// });

// Form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = this.querySelector('input[placeholder="Your Name"]').value.trim();
  const email = this.querySelector('input[placeholder="Your Email"]').value.trim();
  const msg = this.querySelector('textarea').value.trim();

  if (!name || !email || !msg) {
    alert('Please fill all fields.');
    return;
  }
  alert('Message sent!');
  this.reset();
});
// Reveal animation
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const visible = window.innerHeight - 100;
    if (top < visible) {
      el.classList.add('show');
    }
  });
});

// Form validation + fake submission
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.querySelector('input[name=\"name\"]')?.value.trim();
    const email = this.querySelector('input[name=\"email\"]')?.value.trim();
    const message = this.querySelector('textarea[name=\"message\"]')?.value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    alert('✅ Message submitted! (This is a demo form.)');
    this.reset();
  });
}
