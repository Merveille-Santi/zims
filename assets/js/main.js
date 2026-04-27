/* ===== NAVBAR ===== */
const navLinks = document.querySelectorAll('.nav-links a');
const sections  = document.querySelectorAll('section[id]');
const navToggle = document.querySelector('.nav-toggle');
const navMenu   = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => navMenu.classList.toggle('open'));
navLinks.forEach(l => l.addEventListener('click', () => navMenu.classList.remove('open')));

function updateActiveLink() {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
}
window.addEventListener('scroll', updateActiveLink, { passive: true });

/* ===== SCROLL REVEAL ===== */
const revealEls = document.querySelectorAll(
  '.project-card, .pub-item, .conf-item, .cv-item, .skills-group, .contact-item, .award-item, .sport-item, .conf-stat'
);
revealEls.forEach(el => el.classList.add('reveal'));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
revealEls.forEach(el => observer.observe(el));

/* ===== CONTACT FORM ===== */
function handleContact(e) {
  e.preventDefault();
  const name    = document.getElementById('name').value;
  const email   = document.getElementById('email').value;
  const subject = document.getElementById('subject')?.value || 'Contact from website';
  const message = document.getElementById('message').value;
  const mailto  = `mailto:zinsou.kpetchehoue-merveille-santi@ugb.edu.sn?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
  window.location.href = mailto;
  document.getElementById('form-msg').textContent = '✓ Opening your mail client...';
}

/* ===== NAVBAR BG on scroll ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 50 ? 'rgba(13,15,20,0.97)' : 'rgba(13,15,20,0.88)';
}, { passive: true });

/* ===== CV TABS ===== */
function switchTab(id, btn) {
  document.querySelectorAll('.cv-tab-panel').forEach(p => p.classList.add('hidden'));
  document.querySelectorAll('.cv-tab').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.remove('hidden');
  btn.classList.add('active');
}

/* ===== LIGHTBOX (image + video) ===== */
function openLightbox(src, caption) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lb-img');
  const vid = document.getElementById('lb-video-wrap');
  img.src = src; img.style.display = 'block';
  vid.innerHTML = ''; vid.classList.remove('active');
  document.getElementById('lb-caption').textContent = caption || '';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openVideo(src, caption) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lb-img');
  const vid = document.getElementById('lb-video-wrap');
  img.style.display = 'none'; img.src = '';

  /* YouTube ID (11 chars, no slash) or local file path */
  const isYT = src.length === 11 && !src.includes('/');
  const isYTUrl = src.includes('youtube.com') || src.includes('youtu.be');

  if (isYT) {
    vid.innerHTML = `<iframe src="https://www.youtube.com/embed/${src}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  } else if (isYTUrl) {
    const id = src.match(/(?:v=|youtu\.be\/)([^&?/]+)/)?.[1] || src;
    vid.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  } else {
    vid.innerHTML = `<video src="${src}" controls autoplay></video>`;
  }

  vid.classList.add('active');
  document.getElementById('lb-caption').textContent = caption || '';
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('open');
  document.body.style.overflow = '';
  /* Stop video on close */
  const vid = document.getElementById('lb-video-wrap');
  vid.innerHTML = ''; vid.classList.remove('active');
  document.getElementById('lb-img').src = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
document.addEventListener('DOMContentLoaded', () => {
  const inner = document.querySelector('.lb-inner');
  if (inner) inner.addEventListener('click', e => e.stopPropagation());
});

/* ===== PROJECT TABS ===== */
function switchProjectTab(id, btn) {
  document.querySelectorAll('.proj-tab-panel').forEach(p => p.classList.add('hidden'));
  btn.closest('.cv-tabs').querySelectorAll('.cv-tab').forEach(b => b.classList.remove('active'));
  document.getElementById('ptab-' + id).classList.remove('hidden');
  btn.classList.add('active');
}
