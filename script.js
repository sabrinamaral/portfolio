// Animations
const cursor = document.querySelector('.cursor');
const cursorRing = document.querySelector('.cursor-ring');
const nav = document.getElementById('nav');
// Modal
const closeModal = document.getElementById('modal-close');
const openModal = document.getElementById('open-modal');
const modal = document.getElementById('modal-overlay');
const form = document.getElementById('contact-form');

window.addEventListener('mousemove', (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2, // smoothness
    ease: 'power2.out',
  });

  // ring follows more slowly for trailing effect
  gsap.to(cursorRing, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.3,
    ease: 'power2.out',
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

openModal.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const response = await fetch('https://formspree.io/f/mleqqejd', {
    method: 'POST',
    body: new FormData(form),
    headers: { Accept: 'application/json' },
  });

  if (response.ok) {
    document.getElementById('form-content').innerHTML = `
      <h2>Thank <em>you!</em></h2>
      <p style="color: var(--accent); margin-top: 1rem;">
        Your message was sent. I'll get back to you soon.
      </p>
    `;
  } else {
    alert('Something went wrong. Please try again.');
  }
});
