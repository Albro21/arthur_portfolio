function toggleMenu() {
  if (window.innerWidth <= 640) {
    toggleMobileMenu();
    return;
  }

  const navMenu = document.getElementById('nav-menu');
  const navContent = document.getElementById('nav-content');
  const menuIcon = document.getElementById('menu-icon');
  const pageName = document.getElementById('pageName');
  const isExpanded = navMenu.classList.contains('sm:w-60');

  if (isExpanded) {
    navMenu.classList.replace('sm:w-60', 'sm:w-20');
    navContent.classList.replace('opacity-100', 'opacity-0');
    navContent.classList.replace('pointer-events-auto', 'pointer-events-none');
    menuIcon.classList.remove('-translate-x-20');
    menuIcon.classList.replace('fa-times', 'fa-bars');
    pageName.classList.replace('opacity-0', 'opacity-100')
  } else {
    navMenu.classList.replace('sm:w-20', 'sm:w-60');
    navContent.classList.replace('opacity-0', 'opacity-100');
    navContent.classList.replace('pointer-events-none', 'pointer-events-auto');
    menuIcon.classList.add('-translate-x-20');
    menuIcon.classList.replace('fa-bars', 'fa-times');
    pageName.classList.replace('opacity-100', 'opacity-0');
  }
}

function toggleSidebar() {
  const sidebar = document.querySelector('sidebar');
  const isCollapsed = sidebar.classList.contains('-translate-x-full');

  if (isCollapsed) {
    sidebar.classList.remove('-translate-x-full');
  } else {
    sidebar.classList.add('-translate-x-full');
  }
}

function toggleMobileMenu() {
  const sidebar = document.getElementById('nav-menu');
  const navContent = document.getElementById('nav-content');
  const menuIcon = document.getElementById('menu-icon');
  const pageName = document.getElementById('pageName');
  const isCollapsed = sidebar.classList.contains('translate-x-full');

  if (isCollapsed) {
    sidebar.classList.remove('translate-x-full');
    navContent.classList.replace('opacity-0', 'opacity-100');
    navContent.classList.replace('pointer-events-none', 'pointer-events-auto');
    menuIcon.classList.add('-translate-x-40');
    menuIcon.classList.replace('fa-bars', 'fa-times');
    pageName.classList.replace('opacity-100', 'opacity-0');
  } else {
    sidebar.classList.add('translate-x-full');
    navContent.classList.replace('opacity-100', 'opacity-0');
    navContent.classList.replace('pointer-events-auto', 'pointer-events-none');
    menuIcon.classList.remove('-translate-x-20');
    menuIcon.classList.replace('fa-times', 'fa-bars');
    pageName.classList.replace('opacity-0', 'opacity-100')
  }
}

// Scroll main on body wheel
document.body.addEventListener('wheel', function(e) {
  e.preventDefault();
  const main = document.querySelector('main');
  const sidebar = document.querySelector('sidebar');
  const sidebarScroll = sidebar.querySelector('.flex-1.overflow-y-auto');

  if (e.target.closest('sidebar')) {
    sidebarScroll.scrollTop += e.deltaY * 0.5;
  } else {
    main.scrollTop += e.deltaY * 0.5;
  }
}, { passive: false });

// Touch scrolling for sidebar on mobile
const sidebar = document.getElementById('sidebar');
let startY = 0;

sidebar.addEventListener('touchstart', function(e) {
  startY = e.touches[0].clientY;
}, { passive: false });

sidebar.addEventListener('touchmove', function(e) {
  const currentY = e.touches[0].clientY;
  const deltaY = startY - currentY;
  this.scrollTop += deltaY;
  startY = currentY;
  e.preventDefault();
}, { passive: false });
