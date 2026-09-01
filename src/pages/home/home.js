import { renderNav }    from '../../components/nav.js'
import { renderFooter } from '../../components/footer.js'
import { initReveal, initBackToTop, initSmoothScroll, initCounters } from '../../utils/animations.js'

renderNav('home')
renderFooter()
initReveal()
initBackToTop()
initSmoothScroll()
initCounters('.hero__stats')

// ── Hero crossfade slideshow ──────────────────────────────────
const slides = document.querySelectorAll('.hero__slide')
const dots   = document.querySelectorAll('.hero__dot')
let   current   = 0
let   timer     = null

function goTo (index) {
  slides[current].classList.remove('active')
  dots[current].classList.remove('active')
  dots[current].setAttribute('aria-selected', 'false')

  current = index
  slides[current].classList.add('active')
  dots[current].classList.add('active')
  dots[current].setAttribute('aria-selected', 'true')
}

function advance () {
  goTo((current + 1) % slides.length)
}

function startTimer () {
  timer = setInterval(advance, 6000)
}

function resetTimer () {
  clearInterval(timer)
  startTimer()
}

// Manual dot navigation
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => { goTo(i); resetTimer() })
})

// Pause on hover
const heroRight = document.querySelector('.hero__right')
heroRight?.addEventListener('mouseenter', () => clearInterval(timer))
heroRight?.addEventListener('mouseleave', startTimer)

// Kick off
if (slides.length > 1) startTimer()
