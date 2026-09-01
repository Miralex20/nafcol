import { renderNav }    from '../../components/nav.js'
import { renderFooter } from '../../components/footer.js'
import { initReveal, initBackToTop } from '../../utils/animations.js'

renderNav('gallery')
renderFooter()
initReveal()
initBackToTop()

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
  })
})

// Lightbox
const lightbox   = document.getElementById('lightbox')
const lbClose    = document.getElementById('lb-close')
const lbTitle    = document.getElementById('lb-title')
const lbCat      = document.getElementById('lb-cat')
const lbDesc     = document.getElementById('lb-desc')

document.querySelectorAll('.gal-card__btn, .gal-card__overlay').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const card  = trigger.closest('.gal-card')
    const title = card.querySelector('.gal-card__title')?.textContent || ''
    const meta  = card.querySelector('.gal-card__meta')?.textContent  || ''
    // Use real image if available, otherwise keep placeholder
    const realImg = card.querySelector('.gal-card__img img')
    const lbImgEl = document.querySelector('.lightbox__img')
    if (lbImgEl) {
      if (realImg) {
        lbImgEl.innerHTML = `<img src="${realImg.src}" alt="${realImg.alt}" style="width:100%;height:100%;object-fit:cover;display:block;" />`
      } else {
        lbImgEl.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width=".8"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>`
      }
    }
    if (lbTitle) lbTitle.textContent = title
    if (lbCat)   lbCat.textContent   = meta
    if (lbDesc)  lbDesc.textContent  = `This image is part of the NAFCOL campus and programmes gallery — ${title}.`
    lightbox?.classList.add('open')
    document.body.style.overflow = 'hidden'
  })
})

function closeLightbox () {
  lightbox?.classList.remove('open')
  document.body.style.overflow = ''
}

lbClose?.addEventListener('click', closeLightbox)
lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox() })
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox() })
