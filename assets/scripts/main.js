// Ano atual no footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Navbar: glassmorphism ao rolar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// Menu overlay
const menuBtn     = document.getElementById('menuBtn');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose   = document.getElementById('menuClose');
let menuOpen = false;

function openMenu() {
    menuOpen = true;
    menuOverlay.classList.add('open');
    menuOverlay.setAttribute('aria-hidden', 'false');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    menuOpen = false;
    menuOverlay.classList.remove('open');
    menuOverlay.setAttribute('aria-hidden', 'true');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

menuBtn.addEventListener('click', () => menuOpen ? closeMenu() : openMenu());
menuClose.addEventListener('click', closeMenu);

document.querySelectorAll('.overlay-link').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Fechar ao pressionar Escape
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menuOpen) closeMenu();
});

// Scroll reveal com delay
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const delay = Number(entry.target.dataset.revealDelay) || 0;
        setTimeout(() => entry.target.classList.add('revealed'), delay);
        revealObserver.unobserve(entry.target);
    });
}, { threshold: 0.1 });

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));
