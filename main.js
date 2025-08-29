/******************************
 * CONTACT-FORM CONTROLLER
 *****************************/

// Elements
const formContainer = document.getElementById('form-container');
const contactForm   = document.getElementById('contact-form');
const openBtn       = document.getElementById('open-form');
const closeBtn      = document.getElementById('close-form');

// --- Helpers ---
const visible   = el => (el.style.display = 'flex');
const hidden    = el => (el.style.display = 'none');
const isEmail   = str =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(str.trim());

// --- Show / Hide Logic ---
openBtn?.addEventListener('click', () => visible(formContainer));
closeBtn?.addEventListener('click', () => hidden(formContainer));
window.addEventListener('click', e => {
  if (e.target === formContainer) hidden(formContainer);
});

// --- Validation & Submit ---
contactForm?.addEventListener('submit', e => {
  e.preventDefault();

  const { name, email, message } = contactForm.elements;
  const errors = [];

  if (!name.value.trim())    errors.push('Name is required');
  if (!email.value.trim())   errors.push('Email is required');
  else if (!isEmail(email.value)) errors.push('Email is invalid');
  if (!message.value.trim()) errors.push('Message is required');

  if (errors.length) {
    alert(errors.join('\n'));
    return;
  }

  /* ---------------------------------
   * 👉  Replace with real submit call  
   * ---------------------------------
   * fetch('/api/contact', { method:'POST', body:new FormData(contactForm) })
   *   .then(() => … )
   *   .catch(() => … );
  ----------------------------------*/
  alert(`Thanks, ${name.value}! Your message is on its way.`);
  contactForm.reset();
  hidden(formContainer);
});

/******************************
 * ACTIVE-LINK FALLBACK
 *****************************/
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.href === window.location.href) a.classList.add('active-link');
});
