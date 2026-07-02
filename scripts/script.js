let openMobileMenu = document.querySelector('.menu-open');
let closeMobileMenu = document.querySelector('.menu-close');
let mobileMenuInterface = document.querySelector('.mobile-menu');

// Opening the mobile menu
openMobileMenu.addEventListener('click', () => {
  mobileMenuInterface.style.display = 'block';
  openMobileMenu.style.display = 'none';
  closeMobileMenu.style.display = 'block';
});

// Closing the mobile menu
closeMobileMenu.addEventListener('click', () => {
  mobileMenuInterface.style.display = 'none';
  openMobileMenu.style.display = 'block';
  closeMobileMenu.style.display = 'none';
});
