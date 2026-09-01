import { renderNav }    from '../../components/nav.js'
import { renderFooter } from '../../components/footer.js'
import { initReveal, initBackToTop, initSmoothScroll } from '../../utils/animations.js'

renderNav('contact')
renderFooter()
initReveal()
initBackToTop()
initSmoothScroll()

// Contact form submission (mock)
const form    = document.getElementById('contact-form')
const success = document.getElementById('form-success')

form?.addEventListener('submit', async (e) => {
  e.preventDefault()
  const btn = form.querySelector('button[type="submit"]')
  if (btn) {
    btn.textContent = 'Sending…'
    btn.disabled = true
  }

  const payload = {
    data: {
      firstName: document.getElementById('c-fname')?.value,
      lastName: document.getElementById('c-lname')?.value,
      email: document.getElementById('c-email')?.value,
      phone: document.getElementById('c-phone')?.value,
      subject: document.getElementById('c-subject')?.value,
      message: document.getElementById('c-msg')?.value,
    }
  };

  try {
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337';
    const res = await fetch(`${API_URL}/api/contact-inquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    
    if (res.ok) {
      success?.classList.add('show')
      form.reset()
    } else {
      alert('There was an error sending your message. Please try again.');
    }
  } catch (error) {
    alert('Network error. Please try again later.');
  } finally {
    if (btn) { btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message'; btn.disabled = false }
  }
})
