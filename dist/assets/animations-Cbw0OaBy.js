(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();const d=[{key:"home",label:"Home",href:"/"},{key:"about",label:"About",href:"/src/pages/about/index.html"},{key:"schools",label:"Schools",href:"/src/pages/schools/index.html",children:[{label:"School of Logistics & Supply Management",href:"/src/pages/schools/index.html#slsm"},{label:"School of Works & Services",href:"/src/pages/schools/index.html#sws"},{label:"School of Catering Services",href:"/src/pages/schools/index.html#scs"},{label:"School of Specialized Logistics Training",href:"/src/pages/schools/index.html#sslt"}]},{key:"news",label:"News",href:"/src/pages/news/index.html"},{key:"gallery",label:"Gallery",href:"/src/pages/gallery/index.html"},{key:"contact",label:"Contact",href:"/src/pages/contact/index.html"}],f=`
  <img
    src="/assets/nafcol_logo.png"
    alt="NAFCOL crest"
    width="36"
    height="36"
    style="object-fit:contain;display:block;"
  />`,u=`
  <svg class="nav-icon" width="11" height="11" viewBox="0 0 24 24"
       fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
    <polyline points="9 18 15 12 9 6"/>
  </svg>`;function v(o){return`
    <ul role="menu">
      ${o.map(e=>`
        <li role="menuitem">
          <a href="${e.href}">${e.label}</a>
        </li>`).join("")}
    </ul>`}function m(o){return d.map(e=>{const t=e.key===o,i=e.children&&e.children.length;return`
      <li class="${i?"nav__dropdown":""}" role="${i?"none":""}">
        <a
          href="${e.href}"
          class="${t?"active":""}"
          ${i?'aria-haspopup="true" aria-expanded="false"':""}
        >
          ${u}
          ${e.label}${i?' <span aria-hidden="true">▾</span>':""}
        </a>
        ${i?v(e.children):""}
      </li>`}).join("")}function b(o="home"){const e=`
    <nav class="nav" id="mainNav" role="navigation" aria-label="Main navigation">
      <div class="nav__inner">

        <a href="/" class="nav__logo" aria-label="NAFCOL — Home">
          <div class="nav__logo-badge" aria-hidden="true">${f}</div>
          <div>
            <span class="nav__logo-name">NAFCOL</span>
            <span class="nav__logo-sub">Nigerian Air Force College of Logistics</span>
          </div>
        </a>

        <ul class="nav__links" role="menubar" aria-label="Site navigation">
          ${m(o)}
        </ul>

        <div class="nav__actions">
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

    <!-- Mobile overlay -->
    <div class="mob-nav" id="mobNav" role="dialog" aria-modal="true" aria-label="Mobile navigation">
      <button class="mob-nav__close" id="mobClose" aria-label="Close menu">✕</button>
      ${d.map(n=>{if(n.children){const h=n.children.map(c=>`<a href="${c.href}" class="mob-nav__child">- ${c.label}</a>`).join("");return`
            <details class="mob-nav__details">
              <summary class="mob-nav__summary">${n.label} <span aria-hidden="true">▾</span></summary>
              <div class="mob-nav__dropdown">
                ${h}
              </div>
            </details>
          `}return`<a href="${n.href}">${n.label}</a>`}).join("")}
      <a href="/src/pages/about/index.html#admissions" class="btn btn--gold" style="margin-top:.8rem">
        Apply Now
      </a>
    </div>`,t=document.getElementById("site-header");t&&(t.innerHTML=e);const i=document.getElementById("mainNav");i&&window.addEventListener("scroll",()=>{i.classList.toggle("scrolled",window.scrollY>50)},{passive:!0});const a=document.getElementById("mobNav"),s=document.getElementById("hamburger"),r=document.getElementById("mobClose");s&&a&&r&&(s.addEventListener("click",()=>{a.classList.add("open"),s.setAttribute("aria-expanded","true"),document.body.style.overflow="hidden"}),r.addEventListener("click",l),a.querySelectorAll("a").forEach(n=>n.addEventListener("click",l)));function l(){!a||!s||(a.classList.remove("open"),s.setAttribute("aria-expanded","false"),document.body.style.overflow="")}}const g=`
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

        <form class="footer__newsletter" onsubmit="return false" aria-label="Newsletter signup">
          <input type="email" placeholder="Your email address" aria-label="Email for newsletter" />
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

  </div>`;function _(){const o=document.getElementById("site-footer");if(o){o.innerHTML=g;const e=document.getElementById("footer-year");e&&(e.textContent=new Date().getFullYear())}}function y(){const o=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("in"),o.unobserve(t.target))})},{threshold:.1,rootMargin:"0px 0px -30px 0px"});document.querySelectorAll(".reveal").forEach(e=>o.observe(e))}function w(){const o=document.getElementById("back-to-top");o&&(window.addEventListener("scroll",()=>{o.classList.toggle("show",window.scrollY>400)},{passive:!0}),o.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}))}function x(){document.querySelectorAll('a[href^="#"]').forEach(o=>{o.addEventListener("click",e=>{const t=document.querySelector(o.getAttribute("href"));t&&(e.preventDefault(),t.scrollIntoView({behavior:"smooth"}))})})}function p(o,e,t="",i=1600){let a=null;const s=r=>{a||(a=r);const l=Math.min((r-a)/i,1),n=1-Math.pow(1-l,3);o.textContent=Math.floor(n*e)+t,l<1?requestAnimationFrame(s):o.textContent=e+t};requestAnimationFrame(s)}function C(o){const e=document.querySelector(o);if(!e)return;const t=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&(e.querySelectorAll("[data-count]").forEach(s=>{const r=parseInt(s.dataset.count,10),l=s.dataset.suffix||"";p(s,r,l)}),t.unobserve(a.target))})},{threshold:.4});t.observe(e)}export{_ as a,w as b,x as c,C as d,y as i,b as r};
