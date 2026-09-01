/**
 * Shared animation utilities
 * Import and call initReveal() + initBackToTop() on every page.
 */

/** Fade-up reveal on scroll using IntersectionObserver */
export function initReveal () {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in')
        obs.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' })

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
}

/** Sticky back-to-top button */
export function initBackToTop () {
  const btn = document.getElementById('back-to-top')
  if (!btn) return

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400)
  }, { passive: true })

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}

/** Smooth scroll for all in-page anchor links */
export function initSmoothScroll () {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'))
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })
}

/**
 * Animated number counter
 * @param {HTMLElement} el  - element whose textContent will be updated
 * @param {number}      end - target integer
 * @param {string}      suffix - e.g. '+' or 'k+'
 * @param {number}      duration - ms
 */
export function animateCounter (el, end, suffix = '', duration = 1600) {
  let start = null
  const step = ts => {
    if (!start) start = ts
    const progress = Math.min((ts - start) / duration, 1)
    const eased    = 1 - Math.pow(1 - progress, 3)
    el.textContent = Math.floor(eased * end) + suffix
    if (progress < 1) requestAnimationFrame(step)
    else el.textContent = end + suffix
  }
  requestAnimationFrame(step)
}

/** Trigger counters when a container scrolls into view */
export function initCounters (containerSelector) {
  const container = document.querySelector(containerSelector)
  if (!container) return

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return
      container.querySelectorAll('[data-count]').forEach(el => {
        const end    = parseInt(el.dataset.count, 10)
        const suffix = el.dataset.suffix || ''
        animateCounter(el, end, suffix)
      })
      obs.unobserve(e.target)
    })
  }, { threshold: 0.4 })

  obs.observe(container)
}
