document.querySelectorAll('.achievement-carousel').forEach((carousel) => {
  const slides = Array.from(carousel.querySelectorAll('.achievement-card'));
  const indicators = Array.from(carousel.querySelectorAll('.slide-indicator'));
  const slideCount = carousel.querySelector('.slide-count');
  let activeSlide = 0;

  function showSlide(index) {
    activeSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeSlide;
      slide.hidden = !isActive;
      slide.setAttribute('aria-label', `${slideIndex + 1} dari ${slides.length}`);
      indicators[slideIndex].setAttribute('aria-pressed', String(isActive));
    });

    slideCount.textContent = `${String(activeSlide + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  }

  carousel.addEventListener('click', (event) => {
    const directionButton = event.target.closest('[data-slide-direction]');
    const indicator = event.target.closest('[data-slide-to]');

    if (directionButton) {
      showSlide(activeSlide + Number(directionButton.dataset.slideDirection));
    } else if (indicator) {
      showSlide(Number(indicator.dataset.slideTo));
    }
  });

  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      showSlide(activeSlide - 1);
    } else if (event.key === 'ArrowRight') {
      showSlide(activeSlide + 1);
    }
  });
});
