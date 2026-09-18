(() => {
  document.documentElement.classList.replace('no-js', 'js');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#nav-links');
  if (toggle && nav) {
    const close = () => { toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','開啟導覽選單'); nav.classList.remove('is-open'); };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? '關閉導覽選單' : '開啟導覽選單');
      nav.classList.toggle('is-open', open);
    });
    document.addEventListener('click', e => { if (!e.target.closest('.site-header') || e.target.closest('#nav-links a')) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { close(); toggle.focus(); } });
    window.matchMedia('(min-width:801px)').addEventListener('change', close);
  }
  // Local file preview only. Deployed pages retain clean /menu/ and /blog/.../ URLs.
  if (location.protocol === 'file:') {
    document.querySelectorAll('a[data-local]').forEach(link => { link.href = link.dataset.local; });
  }
})();
