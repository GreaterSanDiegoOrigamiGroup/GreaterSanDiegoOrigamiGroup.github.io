// ============ KEN BURNS SLIDESHOW ============
(function () {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const dotsContainer = document.getElementById('slideDots');
  if (!slides.length || !dotsContainer) return;

  let current = 0;
  let timer;
  const INTERVAL = 6000;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function getDots() {
    return Array.from(dotsContainer.querySelectorAll('.slide-dot'));
  }

  function goTo(index) {
    const dots = getDots();
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');

    slides[index].style.animation = 'none';
    void slides[index].offsetWidth;
    slides[index].style.animation = 'kenBurns 8s ease-in-out';

    current = index;
    slides[current].classList.add('active');
    dots[current].classList.add('active');

    clearInterval(timer);
    timer = setInterval(next, INTERVAL);
  }

  function next() {
    goTo((current + 1) % slides.length);
  }

  timer = setInterval(next, INTERVAL);

  const hero = document.getElementById('hero');
  if (hero) {
    hero.addEventListener('mouseenter', () => clearInterval(timer));
    hero.addEventListener('mouseleave', () => { timer = setInterval(next, INTERVAL); });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') goTo((current - 1 + slides.length) % slides.length);
  });
})();

// ============ SCROLL REVEAL ============
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.uk-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ============ SCROLL REVEAL ============
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.uk-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}
