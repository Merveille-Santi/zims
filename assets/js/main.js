/* ===== NAVBAR (mobile) ===== */
const navLinks  = document.querySelectorAll('.nav-links a');
const navToggle = document.querySelector('.nav-toggle');
const navMenu   = document.querySelector('.nav-links');
navToggle?.addEventListener('click', () => navMenu.classList.toggle('open'));

/* ===== SINGLE-PAGE NAVIGATION (one section displayed at a time) ===== */
const pages   = Array.from(document.querySelectorAll('section[id]'));
const pageIds = pages.map(p => p.id);
const DEFAULT_PAGE = 'home';

function showPage(id) {
  if (!pageIds.includes(id)) id = DEFAULT_PAGE;

  pages.forEach(p => {
    const on = p.id === id;
    p.classList.toggle('active', on);
    p.style.display = on ? (p.classList.contains('hero') ? 'flex' : 'block') : 'none';
  });
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));

  navMenu?.classList.remove('open');
  closeLightbox();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/* Intercept every internal link (#research, #cv, ...) : menu, hero buttons, etc. */
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href').slice(1);
  if (!pageIds.includes(id)) return;
  e.preventDefault();
  if (location.hash === '#' + id) showPage(id);   // same page: just refresh view
  else location.hash = id;                        // triggers hashchange
});

/* Back/forward buttons + direct links (site.com/#publications) */
window.addEventListener('hashchange', () => showPage(location.hash.slice(1)));
showPage(location.hash.slice(1));

/* ===== SCROLL REVEAL ===== */
const revealEls = document.querySelectorAll(
  '.project-card, .pub-item, .conf-item, .cv-item, .skill-domain, .contact-item, .award-item, .sport-item, .conf-stat'
);
revealEls.forEach(el => el.classList.add('reveal'));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      const el = e.target;
      setTimeout(() => el.classList.add('visible'), i * 60);
      /* once the fade-in is done, drop the reveal classes so the
         normal hover effects (lift, shadow, border) work again */
      setTimeout(() => el.classList.remove('reveal', 'visible'), i * 60 + 700);
      observer.unobserve(el);
    }
  });
}, { threshold: 0.08 });
revealEls.forEach(el => observer.observe(el));

/* ===== NAVBAR : shadow once the page is scrolled ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* ===== CV TABS ===== */
function switchTab(id, btn) {
  document.querySelectorAll('.cv-tab-panel').forEach(p => p.classList.add('hidden'));
  document.querySelectorAll('#cv .cv-tab').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + id).classList.remove('hidden');
  btn.classList.add('active');
}

/* ===== LIGHTBOX (image + video) ===== */
function openLightbox(src, caption) {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
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
  if (!lb) return;
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
  if (!lb) return;
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