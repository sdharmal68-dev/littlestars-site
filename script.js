
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !expanded);
    navMenu.classList.toggle('open');
  });
}

// Simple client-side form validation prompt
const form = document.querySelector('form[name="appointment"]');
if (form) {
  form.addEventListener('submit', (e) => {
    const required = form.querySelectorAll('[required]');
    for (const field of required) {
      if (!field.value) {
        alert('Please fill all required fields.');
        field.focus();
        e.preventDefault();
        return;
      }
    }
  });
}
