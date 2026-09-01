/**
 * Shared Footer Component
 * Injected into every page via <footer id="site-footer"></footer>
 *
 * Usage:
 *   import { renderFooter } from '../components/footer.js'
 *   renderFooter()
 */

const FOOTER_HTML = `
  <div class="container">
    <div class="footer__grid">

      <!-- Brand + newsletter -->
      <div>
        <div class="footer__brand-logo">
          <div class="footer__brand-badge" aria-hidden="true">
            <img src="/assets/nafcol_logo.png" alt="" width="38" height="38" style="object-fit:contain;display:block;" />
          </div>
          <div>
            <div class="footer__brand-name">NAFCOL</div>
            <div class="footer__brand-sub">Nigerian Air Force College of Logistics</div>
          </div>
        </div>

        <p class="footer__desc">
          A world-class professional training, learning and experience centre in logistics
          specializations — building capacity and fostering innovation in Nigeria's defence
          and logistics sector since our founding in Enugu.
        </p>

        <form class="footer__newsletter" aria-label="Newsletter signup" onsubmit="
          event.preventDefault();
          const input = this.querySelector('input');
          const btn = this.querySelector('button');
          if(!input.value) return;
          const originalText = btn.textContent;
          btn.textContent = 'Subscribing...';
          btn.disabled = true;
          const API_URL = import.meta.env ? import.meta.env.VITE_API_URL : 'http://localhost:1337';
          fetch((API_URL || 'http://localhost:1337') + '/api/newsletter-subscribers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: { email: input.value } })
          }).then(res => {
            if(res.ok) {
              alert('Thank you for subscribing!');
              this.reset();
            } else {
              alert('An error occurred. You might already be subscribed.');
            }
          }).catch(err => {
            alert('Network error. Please try again later.');
          }).finally(() => {
            btn.textContent = originalText;
            btn.disabled = false;
          });
        ">
          <input type="email" placeholder="Your email address" aria-label="Email for newsletter" required />
          <button type="submit">Subscribe</button>
        </form>

        <div class="footer__social" aria-label="Social media links">
          <a href="#" aria-label="Follow us on Facebook">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="#" aria-label="Follow us on Twitter / X">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
            </svg>
          </a>
          <a href="#" aria-label="Connect on LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="#" aria-label="Watch us on YouTube">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.97A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Quick links -->
      <nav aria-label="Quick links">
        <div class="footer__col-title">Quick Links</div>
        <ul class="footer__links">
          <li><a href="/">Home</a></li>
          <li><a href="/src/pages/about/index.html">About NAFCOL</a></li>
          <li><a href="/src/pages/schools/index.html">Our Schools</a></li>
          <li><a href="/src/pages/about/index.html#admissions">Admissions</a></li>
          <li><a href="/src/pages/news/index.html">Academic Calendar</a></li>
          <li><a href="/src/pages/about/index.html#leadership">Staff Directory</a></li>
          <li><a href="/src/pages/gallery/index.html">Photo Gallery</a></li>
        </ul>
      </nav>

      <!-- Programmes -->
      <nav aria-label="Programmes">
        <div class="footer__col-title">Programmes</div>
        <ul class="footer__links">
          <li><a href="/src/pages/schools/index.html#slsm">Logistics &amp; Supply Management</a></li>
          <li><a href="/src/pages/schools/index.html#sws">Works &amp; Services</a></li>
          <li><a href="/src/pages/schools/index.html#scs">Catering Services</a></li>
          <li><a href="/src/pages/schools/index.html#sslt">Specialized Logistics Training</a></li>
          <li><a href="/src/pages/schools/index.html#short">Short Courses</a></li>
          <li><a href="/src/pages/schools/index.html#cert">Professional Certification</a></li>
        </ul>
      </nav>

      <!-- Contact -->
      <address>
        <div class="footer__col-title">Contact Us</div>
        <div class="footer__contact-row">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          <span>HQ NAFCOL, Nigerian Air Force College of Logistics,<br>Enugu, Enugu State, Nigeria</span>
        </div>
        <div class="footer__contact-row">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
          </svg>
          <span>+234 (0) 800 NAFCOL<br>+234 (0) 042 000 000</span>
        </div>
        <div class="footer__contact-row">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <span>
            <a href="mailto:info@nafcol.mil.ng">info@nafcol.mil.ng</a><br>
            <a href="mailto:admissions@nafcol.mil.ng">admissions@nafcol.mil.ng</a>
          </span>
        </div>
      </address>

    </div>

    <!-- Bottom bar -->
    <div class="footer__bottom">
      <p class="footer__copy">
        &copy; <span id="footer-year"></span> Nigerian Air Force College of Logistics &nbsp;·&nbsp; All Rights Reserved
      </p>
      <nav class="footer__util" aria-label="Legal links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Accessibility</a>
        <a href="#">Sitemap</a>
      </nav>
      <span class="footer__flag">🇳🇬 Proudly Nigerian</span>
    </div>

  </div>`

export function renderFooter () {
  const el = document.getElementById('site-footer')
  if (el) {
    el.innerHTML = FOOTER_HTML
    // Dynamic copyright year
    const yearEl = document.getElementById('footer-year')
    if (yearEl) yearEl.textContent = new Date().getFullYear()
  }
}
