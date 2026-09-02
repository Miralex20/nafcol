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

// Search Filtering Logic
const params = new URLSearchParams(window.location.search)
const query = params.get('q')

if (query) {
  const lowerQuery = query.toLowerCase()
  let matchCount = 0
  
  // Update header to reflect search
  const heroTitle = document.querySelector('.page-hero-title')
  if (heroTitle) {
    heroTitle.innerHTML = `Search Results for <em>"${query}"</em>`
  }

  // Filter articles
  const articles = document.querySelectorAll('.news-card-full, .news-featured')
  articles.forEach(article => {
    const title = article.querySelector('.news-card-full__title, .news-featured__title')?.textContent.toLowerCase() || ''
    const excerpt = article.querySelector('.news-card-full__excerpt, .news-featured__excerpt')?.textContent.toLowerCase() || ''
    
    if (title.includes(lowerQuery) || excerpt.includes(lowerQuery)) {
      article.style.display = ''
      matchCount++
    } else {
      article.style.display = 'none'
    }
  })

  // Show no results message if needed
  if (matchCount === 0) {
    const grid = document.querySelector('.news-grid')
    if (grid) {
      grid.innerHTML = `<div style="text-align:center; padding: 4rem; grid-column: 1/-1; color: var(--text-muted); font-size: 1.2rem;">No news articles matched your search.</div>`
    }
    const featured = document.querySelector('.news-featured')
    if (featured) featured.style.display = 'none'
  }
}
