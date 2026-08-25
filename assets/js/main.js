/* ============================================================
   DECIDRA — shared behaviour
   ============================================================ */
(function () {
  'use strict';

  // Current year in footer
  var yr = document.getElementById('year');
  if (yr) { yr.textContent = new Date().getFullYear(); }

  // Nav: shadow on scroll
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Nav: mobile toggle
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Reveal on scroll
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add('in'); });
    }
  }

  // Contact form -> compose email (no backend required)
  var form = document.getElementById('contactForm');
  if (form) {
    var status = document.getElementById('formStatus');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var v = function (id) {
        var el = document.getElementById(id);
        return el ? (el.value || '').trim() : '';
      };
      var subject = 'Consultation request — ' + (v('company') || v('name'));
      var body =
        'Name: ' + v('name') + '\n' +
        'Company: ' + (v('company') || '—') + '\n' +
        'Email: ' + v('email') + '\n' +
        'Phone: ' + (v('phone') || '—') + '\n' +
        'Interested in: ' + v('interest') + '\n\n' +
        'Message:\n' + v('message') + '\n';
      var mailto = 'mailto:hello@decidra.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(body);
      window.location.href = mailto;
      if (status) {
        status.textContent = (typeof window.t === 'function')
          ? window.t('form.status')
          : 'Thanks — your email app should open with the message ready to send. Prefer to email us directly? hello@decidra.com';
        status.classList.add('show');
      }
    });
  }
})();
