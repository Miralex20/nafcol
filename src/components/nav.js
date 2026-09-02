/**
 * Shared Navigation Component
 * Injected into every page. Accepts the current page key
 * to highlight the active link.
 *
 * Usage:
 *   import { renderNav } from '../components/nav.js'
 *   renderNav('home')   // or 'about', 'schools', 'news', 'gallery', 'contact'
 */

const NAV_LINKS = [
  { key: 'home',    label: 'Home',    href: '/' },
  { key: 'about',   label: 'About',   href: '/src/pages/about/index.html' },
  {
    key: 'schools', label: 'Schools', href: '/src/pages/schools/index.html',
    children: [
      { label: 'School of Logistics & Supply Management', href: '/src/pages/schools/index.html#slsm' },
      { label: 'School of Works & Services',              href: '/src/pages/schools/index.html#sws'  },
      { label: 'School of Catering Services',             href: '/src/pages/schools/index.html#scs'  },
      { label: 'School of Specialized Logistics Training',href: '/src/pages/schools/index.html#sslt' },
    ],
  },
  { key: 'news',    label: 'News',    href: '/src/pages/news/index.html' },
  { key: 'gallery', label: 'Gallery', href: '/src/pages/gallery/index.html' },
  { key: 'contact', label: 'Contact', href: '/src/pages/contact/index.html' },
]

const CREST_SVG = `
  <img
    src="/assets/nafcol_logo.png"
    alt="NAFCOL crest"
    width="36"
    height="36"
    style="object-fit:contain;display:block;"
  />`

const CHEVRON_ICON = `
  <svg class="nav-icon" width="11" height="11" viewBox="0 0 24 24"
       fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
    <polyline points="9 18 15 12 9 6"/>
  </svg>`

function buildDropdown (children) {
  return `
    <ul role="menu">
      ${children.map(c => `
        <li role="menuitem">
          <a href="${c.href}">${c.label}</a>
        </li>`).join('')}
    </ul>`
}

function buildLinks (activePage) {
  return NAV_LINKS.map(link => {
    const isActive   = link.key === activePage
    const hasChildren = link.children && link.children.length

    return `
      <li class="${hasChildren ? 'nav__dropdown' : ''}" role="${hasChildren ? 'none' : ''}">
        <a
          href="${link.href}"
          class="${isActive ? 'active' : ''}"
          ${hasChildren ? 'aria-haspopup="true" aria-expanded="false"' : ''}
        >
          ${CHEVRON_ICON}
          ${link.label}${hasChildren ? ' <span aria-hidden="true">▾</span>' : ''}
        </a>
        ${hasChildren ? buildDropdown(link.children) : ''}
      </li>`
  }).join('')
}

export function renderNav (activePage = 'home') {
  const html = `
    <nav class="nav" id="mainNav" role="navigation" aria-label="Main navigation">
      <div class="nav__inner">

        <a href="/" class="nav__logo" aria-label="NAFCOL — Home">
          <div class="nav__logo-badge" aria-hidden="true">${CREST_SVG}</div>
          <div>
            <span class="nav__logo-name">NAFCOL</span>
            <span class="nav__logo-sub">Nigerian Air Force College of Logistics</span>
          </div>
        </a>

        <ul class="nav__links" role="menubar" aria-label="Site navigation">
          ${buildLinks(activePage)}
        </ul>

        <div class="nav__actions">
          <!-- Search Icon Button -->
          <button class="nav__icon-btn" id="searchToggle" aria-label="Open search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <a href="/src/pages/about/index.html#admissions" class="btn btn--navy">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
            </svg>
            Apply Now
          </a>
          <button class="nav__hamburger" id="hamburger" aria-label="Open mobile menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>

      </div>
    </nav>
    
    <!-- Search Modal -->
    <div class="search-modal" id="searchModal" role="dialog" aria-modal="true" aria-label="Site Search">
      <div class="search-modal__backdrop" id="searchBackdrop"></div>
      <div class="search-modal__content">
        <button class="search-modal__close" id="searchClose" aria-label="Close search">✕</button>
        <form class="search-modal__form" id="searchForm" action="/src/pages/news/index.html" method="GET">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" name="q" placeholder="Search news & events..." aria-label="Search query" required autofocus autocomplete="off" />
          <button type="submit" class="btn btn--navy">Search</button>
        </form>
      </div>
    </div>

    <!-- Mobile overlay -->
    <div class="mob-nav" id="mobNav" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      
      <div class="mob-nav__header">
        <a href="/" class="nav__logo" aria-label="NAFCOL — Home">
          <div class="nav__logo-badge" aria-hidden="true">${CREST_SVG}</div>
          <div>
            <span class="nav__logo-name">NAFCOL</span>
          </div>
        </a>
        <button class="mob-nav__close" id="mobClose" aria-label="Close menu">✕</button>
      </div>
      
      <div class="mob-nav__body">
        ${NAV_LINKS.map(l => {
          if (l.children) {
            const childLinks = l.children.map(c => `<a href="${c.href}" class="mob-nav__child">${c.label}</a>`).join('');
            return `
              <details class="mob-nav__details">
                <summary class="mob-nav__summary">
                  <span>${l.label}</span> 
                  <span class="mob-nav__toggle-icon" aria-hidden="true"></span>
                </summary>
                <div class="mob-nav__dropdown">
                  ${childLinks}
                </div>
              </details>
            `;
          }
          return `<a href="${l.href}" class="mob-nav__link">${l.label}</a>`;
        }).join('')}
        <div style="padding: 1.5rem;">
          <a href="/src/pages/about/index.html#admissions" class="btn btn--navy" style="width: 100%; text-align: center;">
            Apply Now
          </a>
        </div>
      </div>
    </div>`

  // Mount into <header id="site-header">
  const header = document.getElementById('site-header')
  if (header) header.innerHTML = html

  // Behaviour — scroll shadow
  const nav = document.getElementById('mainNav')
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50)
    }, { passive: true })
  }

  // Behaviour — mobile nav
  const mobNav = document.getElementById('mobNav')
  const hamburger = document.getElementById('hamburger')
  const mobClose  = document.getElementById('mobClose')

  if (hamburger && mobNav && mobClose) {
    hamburger.addEventListener('click', () => {
      mobNav.classList.add('open')
      hamburger.setAttribute('aria-expanded', 'true')
      document.body.style.overflow = 'hidden'
    })
    mobClose.addEventListener('click', closeMobNav)
    mobNav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', closeMobNav)
    )
  }

  function closeMobNav () {
    if (!mobNav || !hamburger) return
    mobNav.classList.remove('open')
    hamburger.setAttribute('aria-expanded', 'false')
    document.body.style.overflow = ''
  }

  // Behaviour — search modal
  const searchToggle = document.getElementById('searchToggle')
  const searchModal  = document.getElementById('searchModal')
  const searchClose  = document.getElementById('searchClose')
  const searchBackdrop = document.getElementById('searchBackdrop')

  if (searchToggle && searchModal && searchClose) {
    searchToggle.addEventListener('click', () => {
      searchModal.classList.add('open')
      const input = searchModal.querySelector('input')
      if (input) setTimeout(() => input.focus(), 100)
    })
    
    const closeSearch = () => searchModal.classList.remove('open')
    searchClose.addEventListener('click', closeSearch)
    searchBackdrop.addEventListener('click', closeSearch)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchModal.classList.contains('open')) closeSearch()
    })
  }
}
