const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const yearTarget = document.querySelector('#year');

if (yearTarget) {
    yearTarget.textContent = '2024';
}

if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
        const isOpen = siteNav.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            siteNav.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

const revealItems = document.querySelectorAll('.reveal, .reveal-card');

if ('IntersectionObserver' in window && revealItems.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.16,
        rootMargin: '0px 0px -40px 0px'
    });

    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
}

// Show form success message when redirected back after submission
const formSuccess = document.getElementById('formSuccess');
if (formSuccess && new URLSearchParams(window.location.search).get('sent') === '1') {
    formSuccess.style.display = 'block';
    document.querySelector('.contact-form')?.style.setProperty('display', 'none');
    window.history.replaceState({}, '', '/contact.html');
}