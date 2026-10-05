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

// Smooth anchor scrolling with exact header offset
document.querySelectorAll('.proof-item, a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const hash = link.getAttribute('href');
    if (!hash || hash === '#' || !hash.startsWith('#')) return;
    const target = document.querySelector(hash);
    if (!target) return;

    event.preventDefault();
    const isCaseStudy = target.classList.contains('case-study') || target.tagName.toLowerCase() === 'article';
    const isMobile = window.innerWidth <= 760;
    const headerHeight = isMobile ? 67 : 73;
    const offset = isCaseStudy ? (isMobile ? 110 : 154) : headerHeight;
    const targetY = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: Math.max(0, targetY),
      behavior: reducedMotion.matches ? 'auto' : 'smooth'
    });

    if (history.pushState) {
      history.pushState(null, '', hash);
    } else {
      location.hash = hash;
    }
  });
});

// Align initial hash if page is loaded or refreshed with a case study hash
if (window.location.hash) {
  const hashTarget = document.querySelector(window.location.hash);
  if (hashTarget && (hashTarget.classList.contains('case-study') || hashTarget.tagName.toLowerCase() === 'article')) {
    setTimeout(() => {
      const isMobile = window.innerWidth <= 760;
      const offset = isMobile ? 110 : 154;
      const targetY = hashTarget.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: Math.max(0, targetY),
        behavior: 'auto'
      });
    }, 60);
  }
}

