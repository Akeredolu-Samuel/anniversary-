const story = document.querySelector('#story');
document.querySelector('#openStory').addEventListener('click', () => story.scrollIntoView({ behavior: 'smooth' }));
document.querySelector('#replay').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const observer = new IntersectionObserver((entries) => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('in'); observer.unobserve(entry.target); }
}), { threshold: .16 });
document.querySelectorAll('.reveal').forEach(section => observer.observe(section));

const box = document.querySelector('#lightbox');
const lightboxImg = document.querySelector('#lightboxImg');
const caption = document.querySelector('#caption');
document.querySelectorAll('.memory').forEach(memory => memory.addEventListener('click', () => {
  const image = memory.querySelector('img');
  lightboxImg.src = image.src; lightboxImg.alt = image.alt; caption.textContent = memory.dataset.caption;
  box.classList.add('show'); box.setAttribute('aria-hidden', 'false');
}));
function closeBox(){ box.classList.remove('show'); box.setAttribute('aria-hidden', 'true'); }
document.querySelector('#close').addEventListener('click', closeBox);
box.addEventListener('click', event => { if (event.target === box) closeBox(); });
document.addEventListener('keydown', event => { if(event.key === 'Escape') closeBox(); });

const heart = document.querySelector('#heart');
heart.addEventListener('click', () => { heart.textContent = '♥'; heart.animate([{transform:'scale(1)'},{transform:'scale(1.45)'},{transform:'scale(1)'}],{duration:500}); setTimeout(()=>heart.textContent='♡',850); });
