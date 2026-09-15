/* Local navigation for the captured Wix markup. Visual styles remain original. */
(() => {
  const mobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  if (mobile && !location.pathname.endsWith('mobile.html')) {
    location.replace('mobile.html' + location.hash);
    return;
  }
  const reveal = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        reveal.unobserve(entry.target);
      }
    });
  });
  document.querySelectorAll('[id]').forEach(element => {
    const style = getComputedStyle(element);
    if (style.animationName !== 'none' && style.animationPlayState === 'paused') reveal.observe(element);
  });
  const menu = document.getElementById('MENU_AS_CONTAINER');
  const toggle = document.getElementById('MENU_AS_CONTAINER_TOGGLE');
  const setMenu = open => {
    if (!menu || !toggle) return;
    menu.style.display = open ? 'block' : 'none';
    menu.style.visibility = open ? 'visible' : 'hidden';
    menu.style.opacity = open ? '1' : '0';
    menu.toggleAttribute('data-undisplayed', !open);
    menu.setAttribute('aria-hidden', String(!open));
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    document.body.style.overflow = open ? 'hidden' : '';
  };
  if (menu && toggle) {
    setMenu(false);
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    toggle.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle.click(); }
    });
    document.getElementById('overlay-MENU_AS_CONTAINER')?.addEventListener('click', () => setMenu(false));
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
    menu.addEventListener('click', event => { if (!event.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  }
  document.querySelectorAll('form').forEach(form => {
    // The site's subscriber database belongs to Wix and is not part of this export.
    // Keep the original form appearance, and route opt-ins to the live form.
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (form.reportValidity()) window.location.assign('https://www.hathi.vc/#comp-l4focb4r');
    });
  });
})();
