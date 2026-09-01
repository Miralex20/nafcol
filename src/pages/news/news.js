import { renderNav }    from '../../components/nav.js'
import { renderFooter } from '../../components/footer.js'
import { initReveal, initBackToTop, initSmoothScroll } from '../../utils/animations.js'

renderNav('news')
renderFooter()
initReveal()
initBackToTop()
initSmoothScroll()

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    // In a real app this would filter the grid via data attributes
  })
})
