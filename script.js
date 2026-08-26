const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: .12 });
reveals.forEach(el => observer.observe(el));

const modal = document.getElementById('modal');
const noteText = document.getElementById('noteText');
const close = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); };

document.querySelectorAll('.memory').forEach(card => card.addEventListener('click', () => {
  noteText.textContent = card.dataset.note;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
}));
document.getElementById('close').addEventListener('click', close);
document.querySelector('.modal-backdrop').addEventListener('click', close);
document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
document.getElementById('again').addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

document.getElementById('soundBtn').addEventListener('click', e => {
  e.currentTarget.textContent = e.currentTarget.textContent === 'sound off' ? 'sound on' : 'sound off';
});
