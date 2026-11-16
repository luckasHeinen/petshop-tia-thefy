
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
// 1. Manipulando o DOM com lógica: Saudação dinâmica baseada no horário do computador
const elementoSaudacao = document.getElementById('saudacao-js');
const horaAtual = new Date().getHours();

if (horaAtual < 12) {
    elementoSaudacao.innerText = "☀️ Bom dia! Seja bem-vindo(a)";
} else if (horaAtual < 18) {
    elementoSaudacao.innerText = " Boa tarde! Seja bem-vindo(a)";
} else {
    elementoSaudacao.innerText = "🌙 Boa noite! Seja bem-vindo(a)";
}

// 2. Função de interatividade: Criando o link dinâmico para o WhatsApp
function abrirWhatsApp() {
    const telefone = '5551999999999'; // Substitua pelo número real da petshop depois
    const texto = encodeURIComponent('Olá! Vim pelo site da Petshop Tia Thefy e gostaria de tirar dúvidas ou agendar um horário.');
    const url = `https://wa.me/${telefone}?text=${texto}`;
    
    window.open(url, '_blank');
}

// 3. Capturando os botões do HTML e escutando o evento de clique ('click')
const btnContatoHero = document.getElementById('btnContato');
const btnRodape = document.getElementById('btnRodape');

if (btnContatoHero) {
    btnContatoHero.addEventListener('click', abrirWhatsApp);
}

if (btnRodape) {
    btnRodape.addEventListener('click', abrirWhatsApp);
}

