// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('primaryNav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  document.getElementById('enquiryForm').addEventListener('submit', function (e) {
    let isValid = true;

    // ---- Name ----
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (name.value.trim().length < 2) {
        showError(name, nameError, 'Please enter your full name.');
        isValid = false;
    } else {
        clearError(name, nameError);
    }

    // ---- Email ----
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        showError(email, emailError, 'Please enter a valid email address, e.g. name@example.com');
        isValid = false;
    } else {
        clearError(email, emailError);
    }

    // ---- Phone (South African format: 0xxxxxxxxx or +27xxxxxxxxx) ----
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phonePattern = /^(\+27|0)[6-8][0-9]{8}$/;
    const cleanedPhone = phone.value.replace(/\s|-/g, '');
    if (!phonePattern.test(cleanedPhone)) {
        showError(phone, phoneError, 'Please enter a valid SA phone number, e.g. 0722882770 or +27722882770');
        isValid = false;
    } else {
        clearError(phone, phoneError);
    }

    // ---- Message ----
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (message.value.trim().length < 10) {
        showError(message, messageError, 'Please provide a few more details about your project.');
        isValid = false;
    } else {
        clearError(message, messageError);
    }

    if (!isValid) {
        e.preventDefault();
    }
});

function showError(input, errorEl, message) {
    input.classList.add('input-error');
    errorEl.textContent = message;
    errorEl.classList.add('visible');
}

function clearError(input, errorEl) {
    input.classList.remove('input-error');
    errorEl.textContent = '';
    errorEl.classList.remove('visible');
}

  // Close menu when a nav link is clicked (mobile)
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});
