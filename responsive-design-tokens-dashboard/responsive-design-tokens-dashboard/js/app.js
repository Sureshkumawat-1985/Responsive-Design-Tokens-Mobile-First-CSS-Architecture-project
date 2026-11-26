/* ==========================================================================
   Theme Switcher, Mobile Drawer & Live Breakpoint Indicator
   ========================================================================== */

(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const themeLabel = document.getElementById('themeLabel');
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebarBackdrop');
  const viewportIndicator = document.getElementById('viewportIndicator');

  // 1. Theme Management (Light / Dark)
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      themeIcon.innerHTML = '&#9728;';
      themeLabel.textContent = 'Light Mode';
    } else {
      themeIcon.innerHTML = '&#9790;';
      themeLabel.textContent = 'Dark Mode';
    }
  }

  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  // 2. Mobile Off-Canvas Sidebar Drawer
  function toggleSidebar(forceState) {
    const isOpen = typeof forceState === 'boolean'
      ? forceState
      : !sidebar.classList.contains('is-open');

    sidebar.classList.toggle('is-open', isOpen);
    backdrop.classList.toggle('is-visible', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  }

  menuToggle.addEventListener('click', () => toggleSidebar());
  backdrop.addEventListener('click', () => toggleSidebar(false));

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.nav-link').forEach((el) => el.classList.remove('is-active'));
      link.classList.add('is-active');
      if (window.innerWidth < 1024) {
        toggleSidebar(false);
      }
    });
  });

  // 3. Live Viewport Breakpoint Indicator
  function updateViewportBadge() {
    const w = window.innerWidth;
    let tier = 'Mobile (<768px)';
    if (w >= 1440) tier = 'Wide Desktop (1440px+)';
    else if (w >= 1024) tier = 'Desktop (1024px+)';
    else if (w >= 768) tier = 'Tablet (768px+)';
    viewportIndicator.textContent = `${w}px — ${tier}`;
  }

  window.addEventListener('resize', updateViewportBadge);
  updateViewportBadge();
})();
