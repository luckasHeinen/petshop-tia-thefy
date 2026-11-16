document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const links = navLinks.querySelectorAll('a');

  // Abre e fecha o menu hambúrguer no celular
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    
    if (navLinks.classList.contains('active')) {
      icon.classList.replace('ph-list', 'ph-x');
    } else {
      icon.classList.replace('ph-x', 'ph-list');
    }
  });

  // Fecha o menu automaticamente ao clicar em qualquer link de navegação
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const icon = menuToggle.querySelector('i');
      icon.classList.replace('ph-x', 'ph-list');
    });
  });
});