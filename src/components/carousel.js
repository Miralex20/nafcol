/**
 * Mobile Carousel Script
 * Attaches scroll behavior to navigation arrows.
 */
export function initCarousels() {
  const wrappers = document.querySelectorAll('.carousel-wrapper');
  
  wrappers.forEach(wrapper => {
    const carousel = wrapper.querySelector('.mobile-carousel');
    const prevBtn = wrapper.querySelector('.carousel-btn.prev');
    const nextBtn = wrapper.querySelector('.carousel-btn.next');

    if (!carousel || !prevBtn || !nextBtn) return;

    // Get scroll amount based on card width (85vw + gap)
    const getScrollAmount = () => {
      const card = carousel.firstElementChild;
      return card ? card.offsetWidth + 19 : window.innerWidth * 0.85; // 19px is roughly 1.2rem gap
    };

    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });
  });
}
