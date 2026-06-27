// script.js – tiny helpers for cursor, scroll reveal, and contact form demo

// ---------- Custom cursor ----------
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// ---------- Scroll reveal (IntersectionObserver) ----------
const revealElements = document.querySelectorAll('section[data-reveal]');
const revealObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, {threshold: 0.15});
revealElements.forEach(el => revealObserver.observe(el));

// ---------- Simple contact form handler (no backend) ----------
const form = document.getElementById('contactForm');
const status = document.getElementById('status');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    status.textContent = '📧 Sending…';
    // Simulate async send; replace with real endpoint if needed
    setTimeout(() => {
      status.textContent = '✅ Message sent! (demo only)';
      form.reset();
    }, 1200);
  });
}

// Optional: add data-reveal attribute to sections for animation
document.querySelectorAll('section').forEach(sec => sec.setAttribute('data-reveal', ''));
