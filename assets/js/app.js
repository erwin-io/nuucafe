const menuButton = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  nav?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded','false');
}));

const slides = [...document.querySelectorAll('.hero-slide')];
const dots = [...document.querySelectorAll('.hero-dot')];
let currentSlide = 0;
let sliderTimer;
function showSlide(index){
  if(!slides.length) return;
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((s,i)=>s.classList.toggle('active', i===currentSlide));
  dots.forEach((d,i)=>d.classList.toggle('active', i===currentSlide));
}
function startSlider(){
  if(slides.length < 2) return;
  clearInterval(sliderTimer);
  sliderTimer = setInterval(()=>showSlide(currentSlide + 1), 5200);
}
dots.forEach((dot,i)=>dot.addEventListener('click',()=>{showSlide(i);startSlider()}));
showSlide(0); startSlider();

const filterButtons = [...document.querySelectorAll('.filter-btn')];
const menuItems = [...document.querySelectorAll('.menu-item')];
filterButtons.forEach(btn => btn.addEventListener('click', () => {
  filterButtons.forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const filter = btn.dataset.filter;
  menuItems.forEach(item => {
    item.hidden = filter !== 'all' && item.dataset.category !== filter;
  });
}));

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('in'); });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

document.querySelectorAll('[data-year]').forEach(el=>el.textContent = new Date().getFullYear());
