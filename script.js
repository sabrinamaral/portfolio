const cursor = document.querySelector('.cursor');
const cursorRing = document.querySelector('.cursor-ring');

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
