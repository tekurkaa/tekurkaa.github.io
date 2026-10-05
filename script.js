const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const navLinks = [...document.querySelectorAll('.desktop-nav a, .mobile-nav a')];

if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const revealTargets = document.querySelectorAll(
    '.section-heading, .case-study, .experience-intro, .role, .about-heading, .about-details, .photo-heading, .photo, .contact-inner'
  );

  document.documentElement.classList.add('motion-ready');
  revealTargets.forEach((target) => target.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

  revealTargets.forEach((target) => revealObserver.observe(target));
}

if ('IntersectionObserver' in window) {
  const sections = document.querySelectorAll('#top, #work, #experience, #photography, #contact');
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach((section) => navObserver.observe(section));
}

const mobileNav = document.querySelector('.mobile-nav');

document.querySelectorAll('.mobile-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    if (mobileNav) mobileNav.open = false;
  });
});

if (mobileNav) {
  document.addEventListener('click', (event) => {
    if (mobileNav.open && !mobileNav.contains(event.target)) {
      mobileNav.open = false;
    }
  });
}

// Image modal dialog controls
document.querySelectorAll('[data-modal-target]').forEach((trigger) => {
  const targetId = trigger.getAttribute('data-modal-target');
  const modal = document.getElementById(targetId);
  if (!modal || typeof modal.showModal !== 'function') return;

  trigger.addEventListener('click', () => {
    modal.showModal();
  });
});

document.querySelectorAll('dialog.image-modal').forEach((modal) => {
  modal.querySelectorAll('[data-dialog-close]').forEach((btn) => {
    btn.addEventListener('click', () => modal.close());
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
});

